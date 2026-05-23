import type { DocsLocale } from "@/docs/catalog";

export type GlossaryEntry = {
  id: string;
  aliases: string[];
  title: Record<DocsLocale, string>;
  description: Record<DocsLocale, string>;
};

const glossaryEntries: GlossaryEntry[] = [
  {
    id: "api",
    aliases: ["api", "接口"],
    title: { en: "API", "zh-CN": "API（接口）" },
    description: {
      en: "API stands for Application Programming Interface. In this product, it usually means an address and rule set that lets another program send requests to the platform.",
      "zh-CN": "API 是“应用程序编程接口”。在本产品里，通常指别的程序访问本平台时使用的接口地址与调用规则。",
    },
  },
  {
    id: "openapi",
    aliases: ["openapi"],
    title: { en: "OpenAPI", "zh-CN": "OpenAPI" },
    description: {
      en: "OpenAPI is a standard format for describing APIs. It helps tools generate interface docs, test requests, and code clients.",
      "zh-CN": "OpenAPI 是一种描述接口的标准格式，可用于生成接口文档、测试请求和客户端代码。",
    },
  },
  {
    id: "swagger",
    aliases: ["swagger"],
    title: { en: "Swagger", "zh-CN": "Swagger" },
    description: {
      en: "Swagger is a common interface-document viewer. In this site it refers to the API docs page used to inspect and test endpoints.",
      "zh-CN": "Swagger 是常见的接口文档查看工具。在本站里通常指用于查看和测试接口的 API 文档页。",
    },
  },
  {
    id: "endpoint",
    aliases: ["endpoint", "端点"],
    title: { en: "Endpoint", "zh-CN": "端点" },
    description: {
      en: "An endpoint is a specific request address or function entry of an API, such as a URL used for reading data or submitting data.",
      "zh-CN": "端点指 API 中某个具体的请求地址或功能入口，例如读取数据或提交数据的 URL。",
    },
  },
  {
    id: "token",
    aliases: ["token", "令牌"],
    title: { en: "Token", "zh-CN": "Token（令牌）" },
    description: {
      en: "A token is a credential string used to identify or authorize a request. You can think of it as a temporary digital pass used by a program or user session.",
      "zh-CN": "Token 是用于标识或授权请求的一段凭证字符串。可以把它理解为程序或会话访问系统时使用的临时数字通行证。",
    },
  },
  {
    id: "relay-token",
    aliases: ["relay token", "转发 token", "转发token"],
    title: { en: "Relay token", "zh-CN": "转发 Token" },
    description: {
      en: "A relay token is a token used specifically for traffic forwarding. It normally carries routing, quota, or channel-related control meaning.",
      "zh-CN": "转发 Token 是专门用于流量转发的令牌，通常还带有路由、额度或渠道控制含义。",
    },
  },
  {
    id: "access-key",
    aliases: ["access key", "api key", "apikey", "访问密钥"],
    title: { en: "Access key / API key", "zh-CN": "访问密钥 / API Key" },
    description: {
      en: "An access key or API key is a long-term credential used by scripts, tools, or external services to call the platform without interactive login.",
      "zh-CN": "访问密钥或 API Key 是供脚本、工具或外部服务调用平台时使用的长期凭证，不需要人工交互登录。",
    },
  },
  {
    id: "smtp",
    aliases: ["smtp"],
    title: { en: "SMTP", "zh-CN": "SMTP" },
    description: {
      en: "SMTP stands for Simple Mail Transfer Protocol. It is the standard method a server uses to send outgoing emails.",
      "zh-CN": "SMTP 是“简单邮件传输协议”，服务器向外发送邮件时通常使用它。",
    },
  },
  {
    id: "ip",
    aliases: ["ip", "ip address", "ip地址"],
    title: { en: "IP / IP address", "zh-CN": "IP / IP 地址" },
    description: {
      en: "An IP address is the network identity used by a device on the internet or an internal network. It helps systems know where a request comes from and where a response should go.",
      "zh-CN": "IP 地址是设备在互联网或内网中的网络身份标识。系统通过它判断请求来自哪里，以及响应要发往哪里。",
    },
  },
  {
    id: "json",
    aliases: ["json"],
    title: { en: "JSON", "zh-CN": "JSON" },
    description: {
      en: "JSON is a lightweight text format for structured data. It is widely used for API request bodies and response results.",
      "zh-CN": "JSON 是一种轻量级结构化文本格式，常用于 API 请求体和响应结果。",
    },
  },
  {
    id: "jwt",
    aliases: ["jwt"],
    title: { en: "JWT", "zh-CN": "JWT" },
    description: {
      en: "JWT stands for JSON Web Token. It is a token format often used to store login identity and expiry information.",
      "zh-CN": "JWT 是 JSON Web Token 的缩写，是一种常用于保存登录身份和过期信息的令牌格式。",
    },
  },
  {
    id: "passkey",
    aliases: ["passkey", "通行密钥"],
    title: { en: "Passkey", "zh-CN": "Passkey（通行密钥）" },
    description: {
      en: "A passkey is a modern passwordless login method, usually based on the device's secure key storage plus fingerprint, face, or system unlock.",
      "zh-CN": "Passkey 是一种现代无密码登录方式，通常依赖设备安全密钥、指纹、人脸或系统解锁能力。",
    },
  },
  {
    id: "two-factor",
    aliases: ["2fa", "two-factor", "双重验证", "二次验证", "二步验证"],
    title: { en: "2FA / two-factor verification", "zh-CN": "2FA / 双重验证" },
    description: {
      en: "2FA means a second verification step after password entry, such as email code, authenticator code, or device confirmation.",
      "zh-CN": "2FA 指在密码之外再做一次身份确认，例如邮箱验证码、验证器动态码或设备确认。",
    },
  },
  {
    id: "recovery-code",
    aliases: ["recovery code", "恢复码"],
    title: { en: "Recovery code", "zh-CN": "恢复码" },
    description: {
      en: "A recovery code is a backup verification credential used when your normal second-step verification method is unavailable.",
      "zh-CN": "恢复码是在常规二次验证方式不可用时使用的备用验证凭证。",
    },
  },
  {
    id: "webhook",
    aliases: ["webhook", "回调"],
    title: { en: "Webhook", "zh-CN": "Webhook" },
    description: {
      en: "A webhook is an automatic HTTP callback. When an event happens, the system pushes a message to a URL you configured.",
      "zh-CN": "Webhook 是一种自动 HTTP 回调。当事件发生时，系统会把消息主动推送到你配置好的 URL。",
    },
  },
  {
    id: "quota",
    aliases: ["quota", "额度", "配额"],
    title: { en: "Quota", "zh-CN": "额度 / 配额" },
    description: {
      en: "Quota means the allowed amount of usage within a period or rule scope, such as request count, token count, or money limit.",
      "zh-CN": "额度或配额，表示在某个时间范围或规则范围内允许使用的量，例如请求次数、Token 数或金额上限。",
    },
  },
  {
    id: "rate-limit",
    aliases: ["rate limit", "限流", "throttling"],
    title: { en: "Rate limit / throttling", "zh-CN": "限流" },
    description: {
      en: "Rate limiting means the system restricts request speed or request count in order to protect resources and keep service stable.",
      "zh-CN": "限流是指系统限制请求速度或请求次数，以保护资源并维持服务稳定。",
    },
  },
  {
    id: "failover",
    aliases: ["failover", "故障转移"],
    title: { en: "Failover", "zh-CN": "故障转移" },
    description: {
      en: "Failover means switching traffic to another available target when the current target fails, times out, or becomes unhealthy.",
      "zh-CN": "故障转移是指当前目标异常、超时或不健康时，把流量切换到其他可用目标。",
    },
  },
  {
    id: "upstream",
    aliases: ["upstream", "上游"],
    title: { en: "Upstream", "zh-CN": "上游" },
    description: {
      en: "Upstream means the service provider or target service that this platform is calling or forwarding requests to.",
      "zh-CN": "上游指本平台正在调用或转发请求到达的目标服务或服务提供方。",
    },
  },
  {
    id: "latency",
    aliases: ["latency", "延迟"],
    title: { en: "Latency", "zh-CN": "延迟" },
    description: {
      en: "Latency is the time delay between sending a request and receiving a response. Lower latency usually means faster interaction.",
      "zh-CN": "延迟是从发出请求到收到响应之间的时间。延迟越低，通常表示交互越快。",
    },
  },
  {
    id: "audit-log",
    aliases: ["audit", "audit log", "审计", "审计日志"],
    title: { en: "Audit log", "zh-CN": "审计日志" },
    description: {
      en: "An audit log is a record used to trace who did what, when it happened, and what changed for accountability and investigation.",
      "zh-CN": "审计日志是用于追踪“谁在什么时间做了什么、造成了什么变化”的记录，便于追责与排查。",
    },
  },
  {
    id: "rbac",
    aliases: ["rbac", "权限", "role-based access control"],
    title: { en: "RBAC", "zh-CN": "RBAC（基于角色的权限控制）" },
    description: {
      en: "RBAC stands for Role-Based Access Control. Permissions are assigned through roles or groups instead of being configured one by one for every action.",
      "zh-CN": "RBAC 是“基于角色的权限控制”，即通过角色或群组授予权限，而不是为每个动作逐项单独配置。",
    },
  },
  {
    id: "proxy-relay",
    aliases: ["proxy", "relay", "转发", "代理"],
    title: { en: "Proxy / relay", "zh-CN": "代理 / 转发" },
    description: {
      en: "Proxy or relay means this platform receives a request first, then forwards it to another service and returns the result back.",
      "zh-CN": "代理或转发，表示请求先到达本平台，再由本平台转发给其他服务，并把结果返回给调用方。",
    },
  },
  {
    id: "channel",
    aliases: ["channel", "渠道"],
    title: { en: "Channel", "zh-CN": "渠道" },
    description: {
      en: "A channel is a routing unit or provider path used by the platform to send traffic to a specific upstream service or model source.",
      "zh-CN": "渠道是平台把流量发送到某个上游服务或模型来源时使用的路由单元或提供方通道。",
    },
  },
  {
    id: "model",
    aliases: ["model", "模型"],
    title: { en: "Model", "zh-CN": "模型" },
    description: {
      en: "A model usually means an AI model or service capability option that determines how requests are processed and billed.",
      "zh-CN": "模型通常指 AI 模型或某种服务能力选项，它会影响请求如何处理以及如何计费。",
    },
  },
  {
    id: "url",
    aliases: ["url", "链接", "地址"],
    title: { en: "URL", "zh-CN": "URL（链接地址）" },
    description: {
      en: "A URL is a web address used to open a page or send a request, such as a docs page link or API request address.",
      "zh-CN": "URL 是网页或接口请求使用的链接地址，例如文档页面链接或 API 请求地址。",
    },
  },
  {
    id: "whitelist-blacklist",
    aliases: ["whitelist", "blacklist", "白名单", "黑名单"],
    title: { en: "Whitelist / blacklist", "zh-CN": "白名单 / 黑名单" },
    description: {
      en: "A whitelist means explicitly allowed targets, while a blacklist means explicitly blocked targets.",
      "zh-CN": "白名单表示明确允许的对象，黑名单表示明确拒绝的对象。",
    },
  },
  {
    id: "monthly-pass",
    aliases: ["monthly pass", "月卡"],
    title: { en: "Monthly pass", "zh-CN": "月卡" },
    description: {
      en: "A monthly pass is a time-based package that usually grants quota, balance benefit, or discounted usage during its validity period.",
      "zh-CN": "月卡是一种按时间生效的套餐，通常会在有效期内提供额度、余额权益或优惠价格。",
    },
  },
  {
    id: "redemption-code",
    aliases: ["redemption code", "兑换码"],
    title: { en: "Redemption code", "zh-CN": "兑换码" },
    description: {
      en: "A redemption code is a code that can be exchanged for balance, quota, membership benefit, or another predefined reward.",
      "zh-CN": "兑换码是可用于换取余额、额度、会员权益或其他预设奖励的一串代码。",
    },
  },
];

const asciiAliasPattern = /^[a-z0-9][a-z0-9 +./:-]*$/i;

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const matchesAlias = (normalizedText: string, alias: string) => {
  const normalizedAlias = alias.toLowerCase();

  if (asciiAliasPattern.test(alias)) {
    return new RegExp(`\\b${escapeRegExp(normalizedAlias)}\\b`, "i").test(
      normalizedText,
    );
  }

  return normalizedText.includes(normalizedAlias);
};

export const getGlossaryEntriesForText = (text: string) => {
  const normalizedText = text.toLowerCase();

  return glossaryEntries.filter((entry) =>
    entry.aliases.some((alias) => matchesAlias(normalizedText, alias)),
  );
};
