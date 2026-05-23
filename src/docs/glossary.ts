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
      "zh-CN":
        "API 是“应用程序编程接口”。在本产品里，通常指别的程序访问本平台时使用的接口地址与调用规则。",
    },
  },
  {
    id: "openapi",
    aliases: ["openapi"],
    title: { en: "OpenAPI", "zh-CN": "OpenAPI" },
    description: {
      en: "OpenAPI is a standard format for describing APIs. It helps tools generate interface docs, test requests, and code clients.",
      "zh-CN":
        "OpenAPI 是一种描述接口的标准格式，可用于生成接口文档、测试请求和客户端代码。",
    },
  },
  {
    id: "swagger",
    aliases: ["swagger"],
    title: { en: "Swagger", "zh-CN": "Swagger" },
    description: {
      en: "Swagger is a common interface-document viewer. In this site it refers to the API docs page used to inspect and test endpoints.",
      "zh-CN":
        "Swagger 是常见的接口文档查看工具。在本站里通常指用于查看和测试接口的 API 文档页。",
    },
  },
  {
    id: "endpoint",
    aliases: ["endpoint", "端点"],
    title: { en: "Endpoint", "zh-CN": "端点" },
    description: {
      en: "An endpoint is a specific request address or function entry of an API, such as a URL used for reading data or submitting data.",
      "zh-CN":
        "端点指 API 中某个具体的请求地址或功能入口，例如读取数据或提交数据的 URL。",
    },
  },
  {
    id: "token",
    aliases: ["token", "令牌"],
    title: { en: "Token", "zh-CN": "Token（令牌）" },
    description: {
      en: "A token is a credential string used to identify or authorize a request. You can think of it as a temporary digital pass used by a program or user session.",
      "zh-CN":
        "Token 是用于标识或授权请求的一段凭证字符串。可以把它理解为程序或会话访问系统时使用的临时数字通行证。",
    },
  },
  {
    id: "relay-token",
    aliases: ["relay token", "转发 token", "转发token"],
    title: { en: "Relay token", "zh-CN": "转发 Token" },
    description: {
      en: "A relay token is a token used specifically for traffic forwarding. It normally carries routing, quota, or channel-related control meaning.",
      "zh-CN":
        "转发 Token 是专门用于流量转发的令牌，通常还带有路由、额度或渠道控制含义。",
    },
  },
  {
    id: "access-key",
    aliases: ["access key", "api key", "apikey", "访问密钥"],
    title: { en: "Access key / API key", "zh-CN": "访问密钥 / API Key" },
    description: {
      en: "An access key or API key is a long-term credential used by scripts, tools, or external services to call the platform without interactive login.",
      "zh-CN":
        "访问密钥或 API Key 是供脚本、工具或外部服务调用平台时使用的长期凭证，不需要人工交互登录。",
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
      "zh-CN":
        "IP 地址是设备在互联网或内网中的网络身份标识。系统通过它判断请求来自哪里，以及响应要发往哪里。",
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
      "zh-CN":
        "JWT 是 JSON Web Token 的缩写，是一种常用于保存登录身份和过期信息的令牌格式。",
    },
  },
  {
    id: "passkey",
    aliases: ["passkey", "通行密钥"],
    title: { en: "Passkey", "zh-CN": "Passkey（通行密钥）" },
    description: {
      en: "A passkey is a modern passwordless login method, usually based on the device's secure key storage plus fingerprint, face, or system unlock.",
      "zh-CN":
        "Passkey 是一种现代无密码登录方式，通常依赖设备安全密钥、指纹、人脸或系统解锁能力。",
    },
  },
  {
    id: "two-factor",
    aliases: ["2fa", "two-factor", "双重验证", "二次验证", "二步验证"],
    title: { en: "2FA / two-factor verification", "zh-CN": "2FA / 双重验证" },
    description: {
      en: "2FA means a second verification step after password entry, such as email code, authenticator code, or device confirmation.",
      "zh-CN":
        "2FA 指在密码之外再做一次身份确认，例如邮箱验证码、验证器动态码或设备确认。",
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
      "zh-CN":
        "Webhook 是一种自动 HTTP 回调。当事件发生时，系统会把消息主动推送到你配置好的 URL。",
    },
  },
  {
    id: "quota",
    aliases: ["quota", "额度", "配额"],
    title: { en: "Quota", "zh-CN": "额度 / 配额" },
    description: {
      en: "Quota means the allowed amount of usage within a period or rule scope, such as request count, token count, or money limit.",
      "zh-CN":
        "额度或配额，表示在某个时间范围或规则范围内允许使用的量，例如请求次数、Token 数或金额上限。",
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
      "zh-CN":
        "故障转移是指当前目标异常、超时或不健康时，把流量切换到其他可用目标。",
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
      "zh-CN":
        "延迟是从发出请求到收到响应之间的时间。延迟越低，通常表示交互越快。",
    },
  },
  {
    id: "audit-log",
    aliases: ["audit log", "审计", "审计日志"],
    title: { en: "Audit log", "zh-CN": "审计日志" },
    description: {
      en: "An audit log is a record used to trace who did what, when it happened, and what changed for accountability and investigation.",
      "zh-CN":
        "审计日志是用于追踪“谁在什么时间做了什么、造成了什么变化”的记录，便于追责与排查。",
    },
  },
  {
    id: "rbac",
    aliases: ["rbac", "role-based access control", "权限控制", "角色权限"],
    title: { en: "RBAC", "zh-CN": "RBAC（基于角色的权限控制）" },
    description: {
      en: "RBAC stands for Role-Based Access Control. Permissions are assigned through roles or groups instead of being configured one by one for every action.",
      "zh-CN":
        "RBAC 是“基于角色的权限控制”，即通过角色或群组授予权限，而不是为每个动作逐项单独配置。",
    },
  },
  {
    id: "proxy-relay",
    aliases: ["proxy", "relay", "转发", "代理"],
    title: { en: "Proxy / relay", "zh-CN": "代理 / 转发" },
    description: {
      en: "Proxy or relay means this platform receives a request first, then forwards it to another service and returns the result back.",
      "zh-CN":
        "代理或转发，表示请求先到达本平台，再由本平台转发给其他服务，并把结果返回给调用方。",
    },
  },
  {
    id: "channel",
    aliases: ["channel", "渠道"],
    title: { en: "Channel", "zh-CN": "渠道" },
    description: {
      en: "A channel is a routing unit or provider path used by the platform to send traffic to a specific upstream service or model source.",
      "zh-CN":
        "渠道是平台把流量发送到某个上游服务或模型来源时使用的路由单元或提供方通道。",
    },
  },
  {
    id: "model",
    aliases: ["model", "模型"],
    title: { en: "Model", "zh-CN": "模型" },
    description: {
      en: "A model usually means an AI model or service capability option that determines how requests are processed and billed.",
      "zh-CN":
        "模型通常指 AI 模型或某种服务能力选项，它会影响请求如何处理以及如何计费。",
    },
  },
  {
    id: "url",
    aliases: ["url", "网址", "链接地址"],
    title: { en: "URL", "zh-CN": "URL（链接地址）" },
    description: {
      en: "A URL is a web address used to open a page or send a request, such as a docs page link or API request address.",
      "zh-CN":
        "URL 是网页或接口请求使用的链接地址，例如文档页面链接或 API 请求地址。",
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
      "zh-CN":
        "月卡是一种按时间生效的套餐，通常会在有效期内提供额度、余额权益或优惠价格。",
    },
  },
  {
    id: "redemption-code",
    aliases: ["redemption code", "兑换码"],
    title: { en: "Redemption code", "zh-CN": "兑换码" },
    description: {
      en: "A redemption code is a code that can be exchanged for balance, quota, membership benefit, or another predefined reward.",
      "zh-CN":
        "兑换码是可用于换取余额、额度、会员权益或其他预设奖励的一串代码。",
    },
  },
  {
    id: "access-token",
    aliases: ["access token", "access-token", "访问令牌"],
    title: { en: "Access token", "zh-CN": "访问令牌" },
    description: {
      en: "An access token is a credential used directly when calling protected APIs. It is usually short-lived and proves that the current request has login or authorization state.",
      "zh-CN":
        "访问令牌是调用受保护 API 时直接使用的凭证。它通常有效期较短，用于证明当前请求具备登录或授权状态。",
    },
  },
  {
    id: "refresh-token",
    aliases: ["refresh token", "refresh-token", "刷新令牌"],
    title: { en: "Refresh token", "zh-CN": "刷新令牌" },
    description: {
      en: "A refresh token is used to obtain a new access token after the old one expires, so the user does not need to log in again immediately.",
      "zh-CN":
        "刷新令牌用于在访问令牌过期后换取新的访问令牌，从而避免用户立刻重新登录。",
    },
  },
  {
    id: "cookie",
    aliases: ["cookie", "cookies"],
    title: { en: "Cookie", "zh-CN": "Cookie" },
    description: {
      en: "A cookie is small browser-stored data that websites use to keep login state, preferences, or security context between requests.",
      "zh-CN":
        "Cookie 是浏览器保存的一小段数据，网站通常用它在多次请求之间维持登录状态、偏好设置或安全上下文。",
    },
  },
  {
    id: "session",
    aliases: ["session", "会话"],
    title: { en: "Session", "zh-CN": "会话" },
    description: {
      en: "A session is the active state linking your current browser or client to the platform after login or while performing a continuous interaction.",
      "zh-CN":
        "会话是登录后或持续交互过程中，将你当前浏览器或客户端与平台关联起来的一段活动状态。",
    },
  },
  {
    id: "domain",
    aliases: ["domain name", "域名", "网站域名"],
    title: { en: "Domain", "zh-CN": "域名" },
    description: {
      en: "A domain is the human-readable site address, such as docs.example.com, used instead of directly remembering a server IP address.",
      "zh-CN":
        "域名是人类更容易识别的网站地址，例如 docs.example.com，用来代替直接记忆服务器 IP 地址。",
    },
  },
  {
    id: "base-url",
    aliases: ["base url", "base-url", "基础 url", "基础url", "基础地址"],
    title: { en: "Base URL", "zh-CN": "基础 URL" },
    description: {
      en: "A base URL is the root address of an API. Specific endpoints are usually appended to it to form complete request addresses.",
      "zh-CN":
        "基础 URL 是接口系统的根地址。具体端点通常会拼接在它后面，组成完整请求地址。",
    },
  },
  {
    id: "provider",
    aliases: [
      "service provider",
      "model provider",
      "vendor",
      "供应商",
      "服务提供方",
    ],
    title: { en: "Provider / vendor", "zh-CN": "供应商 / 提供方" },
    description: {
      en: "A provider or vendor is the upstream service source that actually offers a model, API capability, or external resource used by this platform.",
      "zh-CN":
        "供应商或提供方，指真正提供模型、接口能力或外部资源的上游服务来源。",
    },
  },
  {
    id: "request-id",
    aliases: ["request id", "request-id", "请求 id", "请求ID", "请求id"],
    title: { en: "Request ID", "zh-CN": "请求 ID" },
    description: {
      en: "A request ID is a unique identifier assigned to a request so administrators and support staff can trace the same operation across logs and systems.",
      "zh-CN":
        "请求 ID 是分配给单次请求的唯一标识，便于管理员和支持人员在不同日志与系统之间追踪同一次操作。",
    },
  },
  {
    id: "http-status",
    aliases: [
      "http status",
      "status code",
      "http code",
      "状态码",
      "http 状态码",
      "http状态码",
    ],
    title: { en: "HTTP status code", "zh-CN": "HTTP 状态码" },
    description: {
      en: "An HTTP status code is a numeric result code such as 200, 404, or 500 that tells whether a request succeeded, failed, or needs further action.",
      "zh-CN":
        "HTTP 状态码是类似 200、404、500 这样的数字结果，用来表示请求成功、失败，或是否还需要进一步操作。",
    },
  },
  {
    id: "payload",
    aliases: [
      "payload",
      "request payload",
      "response payload",
      "载荷",
      "数据体",
    ],
    title: { en: "Payload", "zh-CN": "载荷 / 数据体" },
    description: {
      en: "Payload means the main data content sent in a request or returned in a response, excluding surrounding protocol information.",
      "zh-CN":
        "载荷或数据体，指请求发送或响应返回时的主要数据内容，不包含外围协议控制信息。",
    },
  },
  {
    id: "metadata",
    aliases: ["metadata", "元数据"],
    title: { en: "Metadata", "zh-CN": "元数据" },
    description: {
      en: "Metadata is descriptive information about data, such as time, source, header fields, status, or category, rather than the main business content itself.",
      "zh-CN":
        "元数据是“描述数据的数据”，例如时间、来源、头信息、状态或分类，而不是主要业务内容本身。",
    },
  },
  {
    id: "heartbeat",
    aliases: ["heartbeat", "health check", "心跳", "健康检查"],
    title: { en: "Heartbeat / health check", "zh-CN": "心跳 / 健康检查" },
    description: {
      en: "A heartbeat or health check is a small periodic test request used to confirm whether a service is still reachable and operating normally.",
      "zh-CN":
        "心跳或健康检查，是系统定期发出的轻量测试请求，用来确认某个服务是否仍可访问并正常工作。",
    },
  },
  {
    id: "uptime",
    aliases: ["uptime", "正常运行时间", "在线率", "可用性"],
    title: { en: "Uptime / availability", "zh-CN": "在线率 / 可用性" },
    description: {
      en: "Uptime or availability means the proportion of time a service stays usable and responsive within a measured period.",
      "zh-CN":
        "在线率或可用性，表示某个服务在统计周期内保持可使用、可响应的时间占比。",
    },
  },
  {
    id: "monitoring",
    aliases: [
      "monitoring",
      "health monitor",
      "service monitor",
      "监控",
      "监测",
    ],
    title: { en: "Monitoring", "zh-CN": "监控" },
    description: {
      en: "Monitoring means continuously observing service health, performance, errors, or security signals so issues can be detected and handled early.",
      "zh-CN":
        "监控是指持续观察服务健康、性能、错误或安全信号，以便尽早发现并处理问题。",
    },
  },
  {
    id: "queue",
    aliases: ["queue", "队列", "请求队列"],
    title: { en: "Queue", "zh-CN": "队列" },
    description: {
      en: "A queue is an ordered waiting line for tasks or requests. It is used when work cannot be processed immediately and must be handled in sequence.",
      "zh-CN":
        "队列是任务或请求按顺序等待处理的列表。当系统不能立刻处理所有工作时，通常会先进入队列。",
    },
  },
  {
    id: "timeout",
    aliases: ["timeout", "超时"],
    title: { en: "Timeout", "zh-CN": "超时" },
    description: {
      en: "A timeout means the system stopped waiting because a request or operation took too long and did not complete within the expected time.",
      "zh-CN":
        "超时表示某个请求或操作耗时过长，系统在达到预期等待上限后停止继续等待。",
    },
  },
  {
    id: "retry",
    aliases: ["retry", "重试"],
    title: { en: "Retry", "zh-CN": "重试" },
    description: {
      en: "Retry means attempting the same request or operation again after a failure, timeout, or temporary error.",
      "zh-CN":
        "重试是指在失败、超时或临时错误之后，再次尝试执行同一个请求或操作。",
    },
  },
  {
    id: "step-up-auth",
    aliases: [
      "step-up",
      "step-up authentication",
      "step-up verification",
      "步进验证",
      "step up",
    ],
    title: { en: "Step-up verification", "zh-CN": "Step-up 验证" },
    description: {
      en: "Step-up verification is an extra security check triggered for sensitive or high-risk actions, even when the user is already logged in.",
      "zh-CN":
        "Step-up 验证是针对敏感或高风险操作追加的一层安全校验，即使用户已经登录，也可能被要求再次确认身份。",
    },
  },
  {
    id: "trusted-window",
    aliases: [
      "trusted window",
      "trusted-device",
      "trusted device",
      "受信窗口",
      "受信设备",
    ],
    title: {
      en: "Trusted window / trusted device",
      "zh-CN": "受信窗口 / 受信设备",
    },
    description: {
      en: "A trusted window or trusted device period means the system temporarily remembers that a device already passed verification, reducing repeated checks for a limited time.",
      "zh-CN":
        "受信窗口或受信设备期，表示系统在一段有限时间内记住某台设备已经通过验证，从而减少重复校验。",
    },
  },
  {
    id: "totp",
    aliases: ["totp", "authenticator app", "验证器应用", "动态码"],
    title: { en: "Authenticator app / TOTP", "zh-CN": "验证器应用 / TOTP" },
    description: {
      en: "TOTP is a time-based one-time code generated by an authenticator app. It changes frequently and is commonly used for 2FA.",
      "zh-CN":
        "TOTP 是验证器应用生成的时间型一次性动态码，会频繁变化，常用于 2FA 双重验证。",
    },
  },
  {
    id: "cache",
    aliases: ["cache", "caching", "缓存", "缓存读取", "缓存创建"],
    title: { en: "Cache", "zh-CN": "缓存" },
    description: {
      en: "A cache is temporarily stored data used to speed up later access or reduce repeated work. Different cache behaviors may also affect billing rules.",
      "zh-CN":
        "缓存是为了加快后续访问或减少重复计算而临时保存的数据。不同缓存行为有时也会影响计费规则。",
    },
  },
  {
    id: "multiplier",
    aliases: ["multiplier", "倍率", "乘数"],
    title: { en: "Multiplier", "zh-CN": "倍率" },
    description: {
      en: "A multiplier is a numeric factor applied to a base price, weight, or score in order to calculate the final result.",
      "zh-CN":
        "倍率是应用在基础价格、权重或分值上的数值因子，用来计算最终结果。",
    },
  },
  {
    id: "threshold",
    aliases: ["threshold", "阈值"],
    title: { en: "Threshold", "zh-CN": "阈值" },
    description: {
      en: "A threshold is a trigger boundary. When a metric rises above or falls below it, the system may alert, block, or change behavior.",
      "zh-CN":
        "阈值是某个触发边界。当指标高于或低于该界限时，系统可能发出告警、执行限制或改变行为。",
    },
  },
  {
    id: "cooldown",
    aliases: ["cooldown", "冷却时间"],
    title: { en: "Cooldown", "zh-CN": "冷却时间" },
    description: {
      en: "Cooldown means the minimum wait period before the same action can run again, often used to avoid excessive notifications or repeated operations.",
      "zh-CN":
        "冷却时间是同一动作再次执行前需要等待的最短间隔，常用于避免通知过多或重复操作。",
    },
  },
  {
    id: "error-decay",
    aliases: ["error decay", "错误衰减", "衰减估计"],
    title: { en: "Error decay", "zh-CN": "错误衰减" },
    description: {
      en: "Error decay means previously accumulated risk or error weight gradually decreases over time if the bad behavior stops, allowing restrictions to ease naturally.",
      "zh-CN":
        "错误衰减是指当异常行为停止后，之前累计的风险分或错误权重会随着时间逐步下降，从而让限制自然缓解。",
    },
  },
  {
    id: "ip-ban",
    aliases: ["ip ban", "ip blacklist", "封禁", "封禁状态", "封禁时长"],
    title: { en: "IP ban", "zh-CN": "IP 封禁" },
    description: {
      en: "An IP ban means traffic from a specific network address is temporarily or permanently blocked because the system considers it risky, abusive, or invalid.",
      "zh-CN":
        "IP 封禁表示系统因风险、滥用或异常原因，临时或永久阻止来自某个网络地址的流量。",
    },
  },
  {
    id: "rpm-tpm",
    aliases: [
      "rpm",
      "tpm",
      "requests per minute",
      "tokens per minute",
      "每分钟请求数",
      "每分钟 token 数",
    ],
    title: { en: "RPM / TPM", "zh-CN": "RPM / TPM" },
    description: {
      en: "RPM means requests per minute, and TPM means tokens per minute. They are common throughput metrics used to observe usage intensity and capacity.",
      "zh-CN":
        "RPM 指每分钟请求数，TPM 指每分钟 Token 数。它们是观察使用强度和容量的常见吞吐指标。",
    },
  },
  {
    id: "slug",
    aliases: ["slug", "短标识", "短代码"],
    title: { en: "Slug", "zh-CN": "Slug（短标识）" },
    description: {
      en: "A slug is a short, URL-friendly identifier used in links or paths so a page or resource can be referenced in a readable way.",
      "zh-CN":
        "Slug 是用于链接或路径中的短标识，通常适合放进 URL，方便页面或资源以可读方式被引用。",
    },
  },
  {
    id: "oj",
    aliases: ["oj", "oj submitter", "在线判题", "判题"],
    title: { en: "OJ", "zh-CN": "OJ（在线判题）" },
    description: {
      en: "OJ usually stands for Online Judge. In this product, it refers to the code submission and evaluation related feature set and its supporting API, pricing, and usage modules.",
      "zh-CN":
        "OJ 通常是 Online Judge（在线判题）的缩写。在本产品里，它指与代码提交、判题评估相关的一组功能，以及配套的 API、价格和用量模块。",
    },
  },
  {
    id: "anomaly",
    aliases: ["anomaly", "异常值", "异常模式", "异常点"],
    title: { en: "Anomaly", "zh-CN": "异常" },
    description: {
      en: "An anomaly is a pattern or value that differs noticeably from normal expectations and may indicate abuse, failure, or data problems.",
      "zh-CN":
        "异常是指明显偏离正常预期的模式或数值，可能意味着滥用、故障或数据问题。",
    },
  },
  {
    id: "transaction",
    aliases: ["transaction", "交易记录", "交易"],
    title: { en: "Transaction", "zh-CN": "交易记录" },
    description: {
      en: "A transaction is a recorded balance-related operation, such as recharge, deduction, redemption, or another financial or usage-affecting change.",
      "zh-CN":
        "交易记录是一次与余额相关的已记录操作，例如充值、扣费、兑换，或其他影响费用与权益的变化。",
    },
  },
  {
    id: "incident",
    aliases: ["incident", "故障事件", "事件窗口"],
    title: { en: "Incident", "zh-CN": "故障事件" },
    description: {
      en: "An incident is an operational problem or abnormal event that affects users, service quality, or system stability and needs investigation or follow-up.",
      "zh-CN":
        "故障事件是指影响用户、服务质量或系统稳定性的运行问题或异常情况，通常需要排查与后续处理。",
    },
  },
  {
    id: "outage",
    aliases: ["outage", "服务中断", "停机"],
    title: { en: "Outage", "zh-CN": "服务中断" },
    description: {
      en: "An outage means a service becomes completely unavailable for a period of time, so requests cannot be processed normally at all.",
      "zh-CN":
        "服务中断表示某项服务在一段时间内完全不可用，请求无法被正常处理。",
    },
  },
  {
    id: "degradation",
    aliases: ["degradation", "degraded", "降级"],
    title: { en: "Degradation", "zh-CN": "降级" },
    description: {
      en: "Degradation means a service is still partially available but its quality has dropped, for example with slower speed, higher errors, or reduced capability.",
      "zh-CN":
        "降级表示服务虽然仍部分可用，但质量已经下降，例如速度更慢、错误更多，或可用能力减少。",
    },
  },
  {
    id: "event-subscription",
    aliases: [
      "event subscription",
      "notification event",
      "事件订阅",
      "通知事件",
    ],
    title: { en: "Event subscription", "zh-CN": "事件订阅" },
    description: {
      en: "An event subscription defines which system events should trigger a notification, webhook delivery, or another automated response.",
      "zh-CN":
        "事件订阅用于定义哪些系统事件会触发通知、Webhook 投递或其他自动响应。",
    },
  },
  {
    id: "error-weight",
    aliases: ["error weight", "错误权重", "风险权重"],
    title: { en: "Error weight", "zh-CN": "错误权重" },
    description: {
      en: "Error weight is a score assigned to certain bad behaviors or failures so the system can evaluate risk and decide when to warn, limit, or ban.",
      "zh-CN":
        "错误权重是分配给某些异常行为或失败情况的分值，系统会据此评估风险，并决定何时告警、限制或封禁。",
    },
  },
  {
    id: "quota-window",
    aliases: ["quota window", "validity window", "额度窗口", "有效期窗口"],
    title: { en: "Quota window", "zh-CN": "额度窗口" },
    description: {
      en: "A quota window is the time range in which a usage limit is measured and enforced, such as a daily, hourly, or custom validity period.",
      "zh-CN":
        "额度窗口是统计并执行使用限制的时间范围，例如按天、按小时或自定义有效期进行计算。",
    },
  },
  {
    id: "submitter",
    aliases: ["submitter", "oj submitter", "提交器", "oj 提交器"],
    title: { en: "Submitter", "zh-CN": "提交器" },
    description: {
      en: "A submitter is the component, tool, or workflow that sends code or tasks into the OJ-related system for processing and evaluation.",
      "zh-CN":
        "提交器是把代码或任务发送到 OJ 相关系统中进行处理和评估的组件、工具或工作流。",
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
