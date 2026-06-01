import gettingStartedEn from "@/content/en/getting-started.md?raw";
import loginRegisterEn from "@/content/en/login-register.md?raw";
import forgotPasswordEn from "@/content/en/forgot-password.md?raw";
import authVerificationEn from "@/content/en/auth-verification.md?raw";
import homeArticlesEn from "@/content/en/home-articles.md?raw";
import chatEn from "@/content/en/chat.md?raw";
import accountSettingsEn from "@/content/en/account-settings.md?raw";
import accessKeyManagementEn from "@/content/en/access-key-management.md?raw";
import oauthAppManagementEn from "@/content/en/oauth-app-management.md?raw";
import notificationSettingsEn from "@/content/en/notification-settings.md?raw";
import balanceHistoryEn from "@/content/en/balance-history.md?raw";
import myMonthlyPassesEn from "@/content/en/my-monthly-passes.md?raw";
import userManagementEn from "@/content/en/user-management.md?raw";
import groupManagementEn from "@/content/en/group-management.md?raw";
import permissionManagementEn from "@/content/en/permission-management.md?raw";
import balanceManagementEn from "@/content/en/balance-management.md?raw";
import monthlyPassManagementEn from "@/content/en/monthly-pass-management.md?raw";
import redemptionCodeManagementEn from "@/content/en/redemption-code-management.md?raw";
import jsonEndpointManagementEn from "@/content/en/json-endpoint-management.md?raw";
import articleManagementEn from "@/content/en/article-management.md?raw";
import legalPolicyManagementEn from "@/content/en/legal-policy-management.md?raw";
import relayTokenManagementEn from "@/content/en/relay-token-management.md?raw";
import apiDocumentationEn from "@/content/en/api-documentation.md?raw";
import relaySettingsEn from "@/content/en/relay-settings.md?raw";
import upstreamStatusEn from "@/content/en/upstream-status.md?raw";
import debugToolsEn from "@/content/en/debug-tools.md?raw";
import scriptManagerEn from "@/content/en/script-manager.md?raw";
import serverConfigurationEn from "@/content/en/server-configuration.md?raw";
import ipMonitoringDashboardEn from "@/content/en/ip-monitoring-dashboard.md?raw";
import systemStatisticsEn from "@/content/en/system-statistics.md?raw";
import consumptionStatisticsEn from "@/content/en/consumption-statistics.md?raw";
import systemLogsEn from "@/content/en/system-logs.md?raw";
import businessLogsEn from "@/content/en/business-logs.md?raw";
import ojApiKeyManagementEn from "@/content/en/oj-api-key-management.md?raw";
import ojUsageStatisticsEn from "@/content/en/oj-usage-statistics.md?raw";
import ojPricingManagementEn from "@/content/en/oj-pricing-management.md?raw";
import notFound404En from "@/content/en/not-found-404.md?raw";
import gettingStartedZh from "@/content/zh-CN/getting-started.md?raw";
import loginRegisterZh from "@/content/zh-CN/login-register.md?raw";
import forgotPasswordZh from "@/content/zh-CN/forgot-password.md?raw";
import authVerificationZh from "@/content/zh-CN/auth-verification.md?raw";
import homeArticlesZh from "@/content/zh-CN/home-articles.md?raw";
import chatZh from "@/content/zh-CN/chat.md?raw";
import accountSettingsZh from "@/content/zh-CN/account-settings.md?raw";
import accessKeyManagementZh from "@/content/zh-CN/access-key-management.md?raw";
import oauthAppManagementZh from "@/content/zh-CN/oauth-app-management.md?raw";
import notificationSettingsZh from "@/content/zh-CN/notification-settings.md?raw";
import balanceHistoryZh from "@/content/zh-CN/balance-history.md?raw";
import myMonthlyPassesZh from "@/content/zh-CN/my-monthly-passes.md?raw";
import userManagementZh from "@/content/zh-CN/user-management.md?raw";
import groupManagementZh from "@/content/zh-CN/group-management.md?raw";
import permissionManagementZh from "@/content/zh-CN/permission-management.md?raw";
import balanceManagementZh from "@/content/zh-CN/balance-management.md?raw";
import monthlyPassManagementZh from "@/content/zh-CN/monthly-pass-management.md?raw";
import redemptionCodeManagementZh from "@/content/zh-CN/redemption-code-management.md?raw";
import jsonEndpointManagementZh from "@/content/zh-CN/json-endpoint-management.md?raw";
import articleManagementZh from "@/content/zh-CN/article-management.md?raw";
import legalPolicyManagementZh from "@/content/zh-CN/legal-policy-management.md?raw";
import relayTokenManagementZh from "@/content/zh-CN/relay-token-management.md?raw";
import apiDocumentationZh from "@/content/zh-CN/api-documentation.md?raw";
import relaySettingsZh from "@/content/zh-CN/relay-settings.md?raw";
import upstreamStatusZh from "@/content/zh-CN/upstream-status.md?raw";
import debugToolsZh from "@/content/zh-CN/debug-tools.md?raw";
import scriptManagerZh from "@/content/zh-CN/script-manager.md?raw";
import serverConfigurationZh from "@/content/zh-CN/server-configuration.md?raw";
import ipMonitoringDashboardZh from "@/content/zh-CN/ip-monitoring-dashboard.md?raw";
import systemStatisticsZh from "@/content/zh-CN/system-statistics.md?raw";
import consumptionStatisticsZh from "@/content/zh-CN/consumption-statistics.md?raw";
import systemLogsZh from "@/content/zh-CN/system-logs.md?raw";
import businessLogsZh from "@/content/zh-CN/business-logs.md?raw";
import ojApiKeyManagementZh from "@/content/zh-CN/oj-api-key-management.md?raw";
import ojUsageStatisticsZh from "@/content/zh-CN/oj-usage-statistics.md?raw";
import ojPricingManagementZh from "@/content/zh-CN/oj-pricing-management.md?raw";
import notFound404Zh from "@/content/zh-CN/not-found-404.md?raw";

export type DocsLocale = "en" | "zh-CN";

export interface DocsPage {
  slug: string;
  category: Record<DocsLocale, string>;
  title: Record<DocsLocale, string>;
  summary: Record<DocsLocale, string>;
  tags: string[];
  updatedAt: string;
  content: Record<DocsLocale, string>;
}

const createDocsPage = (
  slug: string,
  categoryEn: string,
  categoryZh: string,
  titleEn: string,
  titleZh: string,
  summaryEn: string,
  summaryZh: string,
  tags: string[],
  contentEn: string,
  contentZh: string,
): DocsPage => ({
  slug,
  category: {
    en: categoryEn,
    "zh-CN": categoryZh,
  },
  title: {
    en: titleEn,
    "zh-CN": titleZh,
  },
  summary: {
    en: summaryEn,
    "zh-CN": summaryZh,
  },
  tags,
  updatedAt: "2026-05-23",
  content: {
    en: contentEn,
    "zh-CN": contentZh,
  },
});

export const docsPages = [
  createDocsPage(
    "getting-started",
    "Intro",
    "入门",
    "User manual",
    "用户手册",
    "How to use the page-by-page manual and find the right screen guide.",
    "说明如何使用按页面拆分的用户手册并找到对应界面说明。",
    ["manual", "search", "index"],
    gettingStartedEn,
    gettingStartedZh,
  ),
  createDocsPage(
    "login-register",
    "Access",
    "访问",
    "Login / Register",
    "登录 / 注册",
    "Sign in, register, consent to policies, and enter with passkey when available.",
    "说明登录、注册、政策同意，以及可用时的 passkey 登录。",
    ["login", "register", "passkey"],
    loginRegisterEn,
    loginRegisterZh,
  ),
  createDocsPage(
    "forgot-password",
    "Access",
    "访问",
    "Forgot password",
    "找回密码",
    "Recover account access through email verification and password reset.",
    "说明通过邮箱验证码重置密码并恢复账号访问。",
    ["password", "recovery", "email"],
    forgotPasswordEn,
    forgotPasswordZh,
  ),
  createDocsPage(
    "auth-verification",
    "Access",
    "访问",
    "Verification",
    "验证页面",
    "Handle login verification, step-up checks, and recovery-code flows.",
    "说明登录验证、二次校验与恢复码流程。",
    ["verification", "2fa", "recovery-code"],
    authVerificationEn,
    authVerificationZh,
  ),
  createDocsPage(
    "home-articles",
    "Content",
    "内容",
    "Home / Articles",
    "首页 / 文章",
    "Read articles, browse summaries, and navigate long-form content.",
    "说明文章阅读、摘要浏览和长文导航。",
    ["home", "article", "knowledge"],
    homeArticlesEn,
    homeArticlesZh,
  ),
  createDocsPage(
    "chat",
    "Chat",
    "对话",
    "Chat",
    "聊天",
    "Conversation list, message actions, and mobile usage guidance.",
    "说明会话列表、消息操作与移动端使用方式。",
    ["chat", "conversation", "message"],
    chatEn,
    chatZh,
  ),
  createDocsPage(
    "account-settings",
    "Account",
    "账号",
    "Settings",
    "设置",
    "Profile, password, email, theme, language, and security controls.",
    "说明资料、密码、邮箱、主题、语言与安全控制。",
    ["settings", "profile", "security"],
    accountSettingsEn,
    accountSettingsZh,
  ),
  createDocsPage(
    "access-key-management",
    "Account",
    "账号",
    "Access key management",
    "访问密钥管理",
    "Create, copy, review, and remove account access keys.",
    "说明账号访问密钥的创建、复制、查看和删除。",
    ["access-key", "security", "key"],
    accessKeyManagementEn,
    accessKeyManagementZh,
  ),
  createDocsPage(
    "oauth-app-management",
    "Account",
    "账号",
    "OAuth app management",
    "OAuth 应用管理",
    "Register applications, manage redirect URIs, and rotate client secrets safely.",
    "说明应用注册、回调地址管理，以及如何安全轮换客户端密钥。",
    ["oauth", "application", "client"],
    oauthAppManagementEn,
    oauthAppManagementZh,
  ),
  createDocsPage(
    "notification-settings",
    "Account",
    "账号",
    "Notification settings",
    "通知设置",
    "Manage email alerts, webhook targets, thresholds, and delivery history.",
    "说明通知邮箱、Webhook、告警阈值和投递历史。",
    ["notification", "email", "webhook"],
    notificationSettingsEn,
    notificationSettingsZh,
  ),
  createDocsPage(
    "balance-history",
    "Account",
    "账号",
    "Balance & usage history",
    "余额与用量记录",
    "Check balance, redeem codes, and review usage trends and transactions.",
    "说明余额查看、兑换码使用、趋势图和交易记录。",
    ["balance", "usage", "transaction"],
    balanceHistoryEn,
    balanceHistoryZh,
  ),
  createDocsPage(
    "my-monthly-passes",
    "Account",
    "账号",
    "My monthly passes",
    "我的月卡",
    "Review your assigned monthly passes, quotas, and validity windows.",
    "说明个人月卡、额度和有效期窗口。",
    ["monthly-pass", "quota", "benefit"],
    myMonthlyPassesEn,
    myMonthlyPassesZh,
  ),
  createDocsPage(
    "user-management",
    "Admin",
    "管理",
    "User management",
    "用户管理",
    "Create, edit, reset, and maintain user accounts.",
    "说明用户账号的新建、编辑、重置和维护。",
    ["user", "admin", "account"],
    userManagementEn,
    userManagementZh,
  ),
  createDocsPage(
    "group-management",
    "Admin",
    "管理",
    "Group management",
    "群组管理",
    "Maintain groups, descriptions, levels, and group permission sets.",
    "说明群组、等级、说明和群组权限集合维护。",
    ["group", "permission", "admin"],
    groupManagementEn,
    groupManagementZh,
  ),
  createDocsPage(
    "permission-management",
    "Admin",
    "管理",
    "Permission management",
    "权限管理",
    "Inspect effective permissions and adjust user-level overrides.",
    "说明生效权限查看与用户级覆盖调整。",
    ["permission", "rbac", "override"],
    permissionManagementEn,
    permissionManagementZh,
  ),
  createDocsPage(
    "balance-management",
    "Admin",
    "管理",
    "Balance management",
    "余额管理",
    "Search user balances, adjust values, and inspect transaction history.",
    "说明用户余额查询、调整和交易历史检查。",
    ["balance", "finance", "admin"],
    balanceManagementEn,
    balanceManagementZh,
  ),
  createDocsPage(
    "monthly-pass-management",
    "Admin",
    "管理",
    "Monthly pass management",
    "月卡管理",
    "Manage monthly-pass templates, publishing, and user assignments.",
    "说明月卡模板、发布状态和用户分配管理。",
    ["monthly-pass", "template", "assignment"],
    monthlyPassManagementEn,
    monthlyPassManagementZh,
  ),
  createDocsPage(
    "redemption-code-management",
    "Admin",
    "管理",
    "Redemption code management",
    "兑换码管理",
    "Create, distribute, and track redemption codes.",
    "说明兑换码的创建、发放和状态追踪。",
    ["redemption", "code", "balance"],
    redemptionCodeManagementEn,
    redemptionCodeManagementZh,
  ),
  createDocsPage(
    "json-endpoint-management",
    "Admin",
    "管理",
    "JSON endpoint management",
    "JSON 端点管理",
    "Publish JSON endpoints with public or protected access.",
    "说明 JSON 端点的发布、公开访问和保护访问。",
    ["json", "endpoint", "publish"],
    jsonEndpointManagementEn,
    jsonEndpointManagementZh,
  ),
  createDocsPage(
    "article-management",
    "Admin",
    "管理",
    "Article management",
    "文章管理",
    "Create, edit, publish, and sort articles and knowledge pages.",
    "说明文章与知识内容的创建、编辑、发布和排序。",
    ["article", "editor", "publish"],
    articleManagementEn,
    articleManagementZh,
  ),
  createDocsPage(
    "legal-policy-management",
    "Admin",
    "管理",
    "Legal policy management",
    "法律政策管理",
    "Maintain terms, privacy versions, and publishing status.",
    "说明条款、隐私版本和发布状态维护。",
    ["legal", "policy", "privacy"],
    legalPolicyManagementEn,
    legalPolicyManagementZh,
  ),
  createDocsPage(
    "relay-token-management",
    "Relay",
    "转发",
    "Relay token management",
    "转发 Token 管理",
    "Manage relay tokens, quotas, channels, and failover behavior.",
    "说明转发 Token、额度、渠道和故障转移行为。",
    ["relay", "token", "failover"],
    relayTokenManagementEn,
    relayTokenManagementZh,
  ),
  createDocsPage(
    "api-documentation",
    "Reference",
    "参考",
    "API documentation",
    "API 文档",
    "Review endpoint addresses, response-field notes, and pricing views.",
    "说明接口地址、响应字段说明和价格视图。",
    ["api", "reference", "endpoint"],
    apiDocumentationEn,
    apiDocumentationZh,
  ),
  createDocsPage(
    "relay-settings",
    "Relay",
    "转发",
    "Relay settings",
    "转发设置",
    "Configure relay-wide behavior, monitoring rules, and pricing settings.",
    "说明全局转发行为、监控规则和价格配置。",
    ["relay", "settings", "pricing"],
    relaySettingsEn,
    relaySettingsZh,
  ),
  createDocsPage(
    "upstream-status",
    "Relay",
    "转发",
    "Upstream status",
    "上游状态",
    "Monitor upstream health, heartbeat history, and latency indicators.",
    "说明上游健康度、心跳历史和延迟指标。",
    ["upstream", "status", "monitoring"],
    upstreamStatusEn,
    upstreamStatusZh,
  ),
  createDocsPage(
    "debug-tools",
    "Tools",
    "工具",
    "Debug",
    "调试页",
    "Use support and developer diagnostics, state checks, and quick test tools.",
    "说明支持与开发排障、状态检查和快速测试工具。",
    ["debug", "tools", "diagnostics"],
    debugToolsEn,
    debugToolsZh,
  ),
  createDocsPage(
    "script-manager",
    "Tools",
    "工具",
    "Script manager",
    "脚本管理",
    "Run approved scripts, inspect output, and review script history.",
    "说明脚本执行、输出查看和历史记录。",
    ["script", "automation", "execution"],
    scriptManagerEn,
    scriptManagerZh,
  ),
  createDocsPage(
    "server-configuration",
    "System",
    "系统",
    "Server configuration",
    "服务端配置",
    "Maintain registration, billing, SMTP, and IP-ban related settings.",
    "说明注册、计费、SMTP 与 IP 封禁相关设置。",
    ["server", "config", "smtp"],
    serverConfigurationEn,
    serverConfigurationZh,
  ),
  createDocsPage(
    "ip-monitoring-dashboard",
    "System",
    "系统",
    "IP monitoring dashboard",
    "IP 监控面板",
    "Query IP risk state and maintain blacklist or whitelist records.",
    "说明 IP 风险查询与黑白名单维护。",
    ["ip", "monitoring", "blacklist"],
    ipMonitoringDashboardEn,
    ipMonitoringDashboardZh,
  ),
  createDocsPage(
    "system-statistics",
    "System",
    "系统",
    "System statistics",
    "系统统计",
    "Track runtime health, resource usage, and infrastructure summaries.",
    "说明运行健康度、资源占用和基础设施摘要。",
    ["system", "stats", "runtime"],
    systemStatisticsEn,
    systemStatisticsZh,
  ),
  createDocsPage(
    "consumption-statistics",
    "System",
    "系统",
    "Consumption statistics",
    "消耗统计",
    "Analyze usage by user, model, channel, and relay token.",
    "说明按用户、模型、渠道和转发 Token 分析使用量。",
    ["consumption", "analytics", "usage"],
    consumptionStatisticsEn,
    consumptionStatisticsZh,
  ),
  createDocsPage(
    "system-logs",
    "System",
    "系统",
    "System logs",
    "系统日志",
    "Inspect API logs, request details, and server log files.",
    "说明 API 日志、请求详情和服务端日志文件查看。",
    ["logs", "request", "server"],
    systemLogsEn,
    systemLogsZh,
  ),
  createDocsPage(
    "business-logs",
    "System",
    "系统",
    "Business logs",
    "业务日志",
    "Review audit-style business activity, changes, and error details.",
    "说明审计型业务活动、变更记录和错误详情。",
    ["logs", "audit", "business"],
    businessLogsEn,
    businessLogsZh,
  ),
  createDocsPage(
    "oj-api-key-management",
    "OJ",
    "OJ",
    "OJ API key management",
    "OJ API Key 管理",
    "Maintain OJ submitter keys, bindings, and usage metadata.",
    "说明 OJ 提交器密钥、绑定信息和用量元数据。",
    ["oj", "api-key", "submitter"],
    ojApiKeyManagementEn,
    ojApiKeyManagementZh,
  ),
  createDocsPage(
    "oj-usage-statistics",
    "OJ",
    "OJ",
    "OJ usage statistics",
    "OJ 用量统计",
    "Review OJ submitter requests, tokens, cost, and detailed records.",
    "说明 OJ 提交器请求、Token、费用和明细记录。",
    ["oj", "usage", "cost"],
    ojUsageStatisticsEn,
    ojUsageStatisticsZh,
  ),
  createDocsPage(
    "oj-pricing-management",
    "OJ",
    "OJ",
    "OJ pricing management",
    "OJ 价格管理",
    "Maintain OJ provider and model pricing rules.",
    "说明 OJ 供应商与模型价格规则维护。",
    ["oj", "pricing", "model"],
    ojPricingManagementEn,
    ojPricingManagementZh,
  ),
  createDocsPage(
    "not-found-404",
    "Other",
    "其他",
    "404 not found",
    "404 未找到",
    "Fallback guidance when a requested page no longer exists.",
    "说明访问页面不存在时的返回与恢复方式。",
    ["404", "fallback", "routing"],
    notFound404En,
    notFound404Zh,
  ),
] satisfies DocsPage[];

export type DocsSlug = (typeof docsPages)[number]["slug"];

export const docsPageSlugs = docsPages.map((page) => page.slug);

export const defaultDocsSlug: DocsSlug = "getting-started";

export const normalizeDocsLocale = (locale?: string | null): DocsLocale => {
  return locale === "en" ? "en" : "zh-CN";
};

export const getDocsPage = (slug?: string | null): DocsPage => {
  return docsPages.find((page) => page.slug === slug) ?? docsPages[0]!;
};
