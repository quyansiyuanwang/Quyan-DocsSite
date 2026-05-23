<template>
  <div class="docs-page">
    <header class="docs-topbar">
      <div class="brand-block">
        <div class="brand-mark">Q</div>
        <div>
          <div class="brand-name">QYSYW Docs</div>
          <div class="brand-note">API-style bilingual docs</div>
        </div>
      </div>

      <div class="topbar-actions">
        <button class="command-pill" type="button" @click="focusSearch">
          Ctrl + K
        </button>
        <a
          class="top-link"
          href="https://qysyw.cn"
          target="_blank"
          rel="noreferrer"
          >Main site</a
        >
        <a
          class="top-link primary"
          href="https://api.qysyw.cn/docs"
          target="_blank"
          rel="noreferrer"
        >
          Swagger
        </a>
      </div>
    </header>

    <div class="docs-shell">
      <aside class="sidebar-panel">
        <div class="sidebar-section sidebar-hero">
          <div class="sidebar-eyebrow">Documentation hub</div>
          <h2>Search, skim, jump</h2>
          <p>Use the same reference-first rhythm as an API docs portal.</p>
        </div>

        <div class="sidebar-section sidebar-toolbar">
          <div class="locale-switch">
            <button
              v-for="option in localeOptions"
              :key="option.value"
              class="locale-button"
              :class="{ active: option.value === locale }"
              @click="switchLocale(option.value)"
            >
              {{ option.label }}
            </button>
          </div>

          <label class="search-box">
            <span class="search-label">{{ ui.search }}</span>
            <input
              ref="searchInputRef"
              v-model="query"
              :placeholder="ui.searchPlaceholder"
              @keydown.enter.prevent="openFirstMatch"
            />
          </label>
        </div>

        <div class="sidebar-section sidebar-groups">
          <div class="section-label">{{ ui.pages }}</div>

          <div
            v-for="group in groupedPages"
            :key="group.label"
            class="group-block"
          >
            <div class="group-title">{{ group.label }}</div>
            <button
              v-for="page in group.pages"
              :key="page.slug"
              class="page-item"
              :class="{ active: page.slug === currentPage.slug }"
              @click="openPage(page.slug)"
            >
              <div class="page-item-title">{{ page.title[locale] }}</div>
              <div class="page-item-summary">{{ page.summary[locale] }}</div>
            </button>
          </div>
        </div>
      </aside>

      <main class="content-panel">
        <section class="doc-hero">
          <div class="doc-breadcrumbs">
            <span>{{ currentPage.category[locale] }}</span>
            <span>/</span>
            <span>{{ currentPage.slug }}</span>
          </div>

          <div class="doc-meta-row">
            <span class="doc-method">DOC</span>
            <span class="doc-route"
              >docs.qysyw.cn/{{ locale }}/{{ currentPage.slug }}</span
            >
            <span class="doc-update">Updated {{ currentPage.updatedAt }}</span>
          </div>

          <h1>{{ currentPage.title[locale] }}</h1>
          <p class="doc-summary">{{ currentPage.summary[locale] }}</p>

          <div class="doc-tags">
            <span v-for="tag in currentPage.tags" :key="tag" class="doc-tag"
              >#{{ tag }}</span
            >
          </div>

          <div class="doc-actions">
            <button
              class="action-button"
              type="button"
              @click="copyCurrentPageUrl"
            >
              {{ ui.copyPage }}
            </button>
            <a
              class="action-button ghost"
              href="https://api.qysyw.cn/docs"
              target="_blank"
              rel="noreferrer"
            >
              Swagger
            </a>
            <a
              class="action-button ghost"
              href="https://qysyw.cn"
              target="_blank"
              rel="noreferrer"
            >
              App
            </a>
          </div>
        </section>

        <section
          v-if="query.trim() && searchMatches.length"
          class="result-panel"
        >
          <div class="panel-header">
            <div>
              <div class="section-label">{{ ui.searchResults }}</div>
              <h3>{{ searchMatches.length }} {{ ui.matches }}</h3>
            </div>
            <button
              class="action-button ghost"
              type="button"
              @click="query = ''"
            >
              Clear
            </button>
          </div>

          <div class="result-list">
            <button
              v-for="page in searchMatches"
              :key="page.slug"
              class="result-card"
              @click="openPage(page.slug)"
            >
              <div class="result-title">{{ page.title[locale] }}</div>
              <div class="result-desc">{{ page.summary[locale] }}</div>
              <div class="result-tags">
                <span v-for="tag in page.tags" :key="tag">#{{ tag }}</span>
              </div>
            </button>
          </div>
        </section>

        <section class="doc-layout">
          <article class="article-panel" v-html="renderedContent"></article>

          <aside class="toc-panel">
            <div class="toc-sticky">
              <div class="section-label">{{ ui.toc }}</div>
              <a
                v-for="item in tocItems"
                :key="item.id"
                class="toc-link"
                :href="`#${item.id}`"
              >
                <span class="toc-bullet" :class="`level-${item.level}`"></span>
                <span>{{ item.label }}</span>
              </a>

              <div class="toc-card">
                <div class="toc-card-title">{{ ui.quickLinks }}</div>
                <a href="https://qysyw.cn" target="_blank" rel="noreferrer"
                  >qysyw.cn</a
                >
                <a
                  href="https://api.qysyw.cn/docs"
                  target="_blank"
                  rel="noreferrer"
                  >api.qysyw.cn/docs</a
                >
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { marked } from "marked";
import { useRoute, useRouter } from "vue-router";
import {
  defaultDocsSlug,
  docsPages,
  getDocsPage,
  normalizeDocsLocale,
  type DocsLocale,
  type DocsSlug,
} from "@/docs/catalog";

type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

const route = useRoute();
const router = useRouter();
const query = ref("");
const searchInputRef = ref<HTMLInputElement | null>(null);

const locale = computed<DocsLocale>(() =>
  normalizeDocsLocale(route.params.locale as string | undefined),
);
const currentSlug = computed<DocsSlug>(() => {
  const slug = route.params.slug as string | undefined;
  return (
    docsPages.some((page) => page.slug === slug) ? slug : defaultDocsSlug
  ) as DocsSlug;
});
const currentPage = computed(() => getDocsPage(currentSlug.value));

const localeOptions = [
  { value: "zh-CN" as const, label: "中文" },
  { value: "en" as const, label: "EN" },
];

const ui = computed(() => ({
  search: locale.value === "en" ? "Search docs" : "搜索文档",
  searchPlaceholder:
    locale.value === "en"
      ? "Search title, tag, or content"
      : "搜索标题、标签或正文",
  pages: locale.value === "en" ? "Pages" : "文档目录",
  searchResults: locale.value === "en" ? "Search results" : "搜索结果",
  matches: locale.value === "en" ? "matches" : "条匹配",
  toc: locale.value === "en" ? "On this page" : "本页目录",
  quickLinks: locale.value === "en" ? "Quick links" : "快捷链接",
  copyPage: locale.value === "en" ? "Copy page link" : "复制页面链接",
}));

const groupedPages = computed(() => {
  const groups = new Map<string, typeof docsPages>();

  for (const page of docsPages) {
    const key = page.category[locale.value];
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(page);
  }

  return Array.from(groups.entries()).map(([label, pages]) => ({
    label,
    pages,
  }));
});

const normalizedQuery = computed(() => query.value.trim().toLowerCase());

const filteredPages = computed(() => {
  const keyword = normalizedQuery.value;
  if (!keyword) return docsPages;

  return docsPages.filter((page) => {
    const haystack = [
      page.slug,
      page.category[locale.value],
      page.title[locale.value],
      page.summary[locale.value],
      page.tags.join(" "),
      page.content[locale.value],
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(keyword);
  });
});

const searchMatches = computed(() => filteredPages.value);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}\[\]]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const renderMarkdownWithAnchors = (markdown: string) => {
  const html = String(marked.parse(markdown));
  return html.replace(/<h([23])>(.*?)<\/h\1>/g, (_match, level, rawText) => {
    const text = String(rawText).replace(/<[^>]+>/g, "");
    const id = slugify(text);
    return `<h${level} id="${id}">${rawText}</h${level}>`;
  });
};

const renderedContent = computed(() =>
  renderMarkdownWithAnchors(currentPage.value.content[locale.value]),
);

const tocItems = computed<TocItem[]>(() => {
  const content = currentPage.value.content[locale.value];
  const items: TocItem[] = [];

  for (const line of content.split("\n")) {
    const headingMatch = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!headingMatch) continue;

    const level = headingMatch[1]!.length as 2 | 3;
    const label = headingMatch[2]!.replace(/[`*_>]/g, "").trim();
    items.push({ id: slugify(label), label, level });
  }

  return items;
});

const openPage = async (slug: DocsSlug) => {
  await router.push({ name: "docs", params: { locale: locale.value, slug } });
};

const switchLocale = async (nextLocale: DocsLocale) => {
  await router.push({
    name: "docs",
    params: { locale: nextLocale, slug: currentSlug.value },
  });
};

const focusSearch = async () => {
  await nextTick();
  searchInputRef.value?.focus();
};

const openFirstMatch = async () => {
  const first = searchMatches.value[0];
  if (first) await openPage(first.slug);
};

const copyCurrentPageUrl = async () => {
  const url = `${window.location.origin}/${locale.value}/${currentPage.value.slug}`;
  await navigator.clipboard.writeText(url);
};

watch(
  () => route.params.slug,
  (slug) => {
    if (slug === undefined) {
      void router.replace({
        name: "docs",
        params: { locale: locale.value, slug: defaultDocsSlug },
      });
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.docs-page {
  min-height: 100vh;
  max-width: var(--docs-max-width);
  margin: 0 auto;
  padding: 24px;
}

.docs-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  padding: 18px 24px;
  border: 1px solid var(--docs-topbar-border);
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    var(--docs-topbar-start),
    var(--docs-topbar-end)
  );
  color: var(--docs-topbar-text);
  box-shadow: var(--docs-shadow);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7dd3fc, #2563eb 60%, #1d4ed8);
  color: #05111f;
  font-weight: 900;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.brand-name {
  font-size: 18px;
  font-weight: 800;
}

.brand-note {
  margin-top: 2px;
  color: var(--docs-topbar-muted);
  font-size: 13px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.command-pill,
.top-link,
.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--docs-topbar-pill-border);
  background: var(--docs-topbar-pill);
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background-color 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.command-pill:hover,
.top-link:hover,
.action-button:hover {
  transform: translateY(-1px);
}

.top-link.primary,
.action-button {
  background: linear-gradient(
    135deg,
    var(--docs-primary-strong),
    var(--docs-accent)
  );
  color: #fff;
  border-color: transparent;
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.22);
}

.docs-shell {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 20px;
}

.sidebar-panel,
.content-panel {
  min-width: 0;
}

.sidebar-panel {
  display: grid;
  gap: 16px;
  align-self: start;
  position: sticky;
  top: 24px;
}

.sidebar-section,
.doc-hero,
.result-panel,
.article-panel,
.toc-panel {
  border: 1px solid var(--docs-border);
  border-radius: 18px;
  background: var(--docs-surface);
  box-shadow: var(--docs-shadow);
  backdrop-filter: blur(10px);
}

.sidebar-hero {
  padding: 18px;
  background:
    linear-gradient(
      180deg,
      var(--docs-surface-strong),
      var(--docs-surface-soft)
    ),
    radial-gradient(
      circle at top right,
      var(--docs-accent-soft),
      transparent 35%
    ),
    var(--docs-surface);
}

.sidebar-eyebrow,
.section-label,
.doc-breadcrumbs,
.doc-meta-row,
.toc-card-title,
.search-label {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--docs-muted);
  font-weight: 700;
}

.sidebar-hero h2 {
  margin: 10px 0 6px;
  font-size: 24px;
}

.sidebar-hero p {
  margin: 0;
  color: var(--docs-muted);
  line-height: 1.65;
}

.sidebar-toolbar,
.sidebar-groups,
.result-panel,
.article-panel,
.toc-panel {
  padding: 20px;
}

.doc-hero {
  padding: 16px 18px;
  max-height: 360px;
}

.sidebar-toolbar {
  display: grid;
  gap: 14px;
}

.locale-switch {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.locale-button,
.page-item,
.result-card,
.toc-link {
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
}

.locale-button {
  min-height: 40px;
  border-color: var(--docs-border);
  border-radius: 12px;
  background: var(--docs-surface-strong);
  color: var(--docs-muted);
  transition:
    border-color 0.18s ease,
    color 0.18s ease,
    background-color 0.18s ease;
}

.locale-button.active {
  background: var(--docs-primary-soft);
  color: var(--docs-primary);
  border-color: rgba(37, 99, 235, 0.28);
}

.search-box {
  display: grid;
  gap: 8px;
}

.search-box input {
  width: 100%;
  min-height: 48px;
  padding: 0 16px;
  border: 1px solid var(--docs-border);
  border-radius: 14px;
  background: var(--docs-surface-soft);
  color: var(--docs-text);
  box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.03);
}

.search-box input:focus {
  border-color: rgba(37, 99, 235, 0.3);
  background: var(--docs-surface-strong);
}

.group-block {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}

.group-title {
  color: var(--docs-muted-soft);
  font-size: 13px;
  font-weight: 800;
}

.page-item {
  display: grid;
  gap: 5px;
  text-align: left;
  padding: 13px 14px;
  border-radius: 14px;
  border-color: transparent;
  background: transparent;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.page-item:hover,
.page-item.active {
  border-color: rgba(37, 99, 235, 0.12);
  background: linear-gradient(
    180deg,
    var(--docs-surface-strong),
    var(--docs-surface-soft)
  );
  box-shadow: var(--docs-shadow-soft);
}

.page-item:hover {
  transform: translateY(-1px);
}

.page-item.active {
  position: relative;
}

.page-item.active::before {
  content: "";
  position: absolute;
  inset: 10px auto 10px 0;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--docs-primary), var(--docs-accent));
}

.page-item-title {
  font-weight: 800;
}

.page-item-summary,
.doc-summary,
.result-desc {
  color: var(--docs-muted-soft);
  line-height: 1.7;
}

.content-panel {
  display: grid;
  gap: 16px;
  align-content: start;
}

.doc-hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background:
    linear-gradient(135deg, var(--docs-hero-start), var(--docs-hero-end)),
    radial-gradient(
      circle at top right,
      var(--docs-accent-soft),
      transparent 35%
    ),
    var(--docs-surface);
  color: var(--docs-hero-text);
  overflow: hidden;
  padding: 12px 16px;
}

.doc-breadcrumbs,
.doc-meta-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.doc-meta-row {
  margin-top: 0;
}

.doc-method,
.doc-route,
.doc-update {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--docs-hero-text);
  border: 1px solid var(--docs-hero-border);
  font-size: 11px;
}

.doc-method {
  background: linear-gradient(135deg, var(--docs-success), #38bdf8);
  color: #07121f;
  font-weight: 900;
}

.doc-hero h1 {
  margin: 0;
  font-size: clamp(22px, 2.8vw, 34px);
  line-height: 1.06;
}

.doc-summary {
  margin: 0;
  max-width: 70ch;
  font-size: 14px;
  line-height: 1.5;
  color: var(--docs-hero-muted);
}

.doc-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 0;
}

.doc-tag {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: var(--docs-hero-text);
  font-size: 12px;
}

.doc-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 0;
}

.action-button.ghost {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--docs-topbar-pill-border);
  color: inherit;
  box-shadow: none;
}

.result-panel {
  display: grid;
  gap: 14px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.panel-header h3 {
  margin: 6px 0 0;
  font-size: 22px;
}

.result-list {
  display: grid;
  gap: 10px;
}

.result-card {
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 14px;
  text-align: left;
  background: linear-gradient(
    180deg,
    var(--docs-surface-strong),
    var(--docs-surface-soft)
  );
  border-color: var(--docs-border);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.result-card:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.18);
  box-shadow: var(--docs-shadow-soft);
}

.result-title {
  font-weight: 800;
}

.result-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--docs-primary);
  font-size: 12px;
}

.doc-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  gap: 20px;
  align-items: start;
}

.article-panel {
  padding: 28px 30px;
}

.article-panel :deep(h1) {
  display: none;
}

.article-panel :deep(h2),
.article-panel :deep(h3) {
  margin-top: 1.6em;
  scroll-margin-top: 24px;
}

.article-panel :deep(h2) {
  font-size: 22px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--docs-border);
}

.article-panel :deep(h3) {
  font-size: 18px;
}

.article-panel :deep(p),
.article-panel :deep(li) {
  line-height: 1.85;
  color: var(--docs-text);
}

.article-panel :deep(p + p) {
  margin-top: 12px;
}

.article-panel :deep(ul),
.article-panel :deep(ol) {
  padding-left: 1.35rem;
}

.article-panel :deep(code) {
  padding: 0.18rem 0.42rem;
  border-radius: 8px;
  background: var(--docs-primary-soft);
  color: var(--docs-primary-strong);
}

.article-panel :deep(pre) {
  overflow: auto;
  padding: 18px;
  border: 1px solid var(--docs-border);
  border-radius: 16px;
  background: var(--docs-code-bg);
  color: var(--docs-code-text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.article-panel :deep(pre code) {
  padding: 0;
  background: transparent;
  color: inherit;
}

.article-panel :deep(table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 14px;
  background: var(--docs-table-bg);
}

.article-panel :deep(th),
.article-panel :deep(td) {
  padding: 12px 14px;
  border: 1px solid var(--docs-border);
  text-align: left;
}

.toc-panel {
  position: sticky;
  top: 24px;
}

.toc-sticky {
  display: grid;
  gap: 10px;
}

.toc-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  text-align: left;
  color: var(--docs-text);
  text-decoration: none;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.toc-link:hover {
  background: var(--docs-primary-soft);
  color: var(--docs-primary-strong);
}

.toc-bullet {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--docs-primary);
}

.toc-bullet.level-3 {
  width: 6px;
  height: 6px;
  opacity: 0.75;
}

.toc-card {
  display: grid;
  gap: 8px;
  margin-top: 8px;
  padding-top: 14px;
  border-top: 1px solid var(--docs-border);
}

.toc-card a {
  color: var(--docs-primary);
  text-decoration: none;
}

@media (max-width: 1120px) {
  .docs-shell,
  .doc-layout {
    grid-template-columns: 1fr;
  }

  .sidebar-panel,
  .toc-panel {
    position: relative;
    top: 0;
  }
}

@media (max-width: 760px) {
  .docs-page {
    padding: 12px;
  }

  .docs-topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .topbar-actions {
    justify-content: flex-start;
  }

  .article-panel,
  .doc-hero,
  .result-panel,
  .toc-panel,
  .sidebar-section {
    border-radius: 18px;
  }

  .article-panel {
    padding: 22px 18px;
  }
}
</style>
