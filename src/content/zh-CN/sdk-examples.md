# SDK 与示例

这个入口页用于帮助接入方快速选择最合适的模板，而不是把所有内容堆在同一页里。

## 如何选择

### `Node SDK`

适合：

- Node.js 服务端
- TypeScript / JavaScript API 集成
- 需要快速接入业务 API 的后端项目

你会看到：

- 直接调用 API 的最小 Node 示例
- Node 环境变量建议
- 服务端调用注意事项

### `Python SDK`

适合：

- Python 后端
- 脚本工具
- 内部自动化服务

你会看到：

- 直接调用 API 的最小 Python 示例
- `requests` 调用模板
- Python 集成时的超时与错误处理建议

### `OAuth Demo`

适合：

- 第三方登录
- OAuth 账号绑定
- 需要完整授权码流程示例的项目

你会看到：

- OAuth 时序图
- OAuth 流程图
- Node 最小 OAuth Demo
- Python 最小 OAuth Demo

## 推荐阅读顺序

1. 先看 `OAuth App Management`，完成应用创建与回调地址登记。
2. 再看 `OAuth Demo`，跑通授权码流程。
3. 如果你只是调业务接口，则直接看 `Node SDK` 或 `Python SDK`。
4. 最后回到 `API Documentation` 和 Swagger 查具体字段与接口约束。

## 最小接入清单

1. 确认环境地址与 Swagger 文档地址。
2. 选定认证方式：JWT、Access Key 或 OAuth。
3. 先用 `curl` 验证接口可达。
4. 再选择对应语言模板落地。
5. 若是第三方登录，先创建 OAuth 应用并登记回调地址。

## 推荐联动阅读

- `Node SDK`
- `Python SDK`
- `OAuth Demo`
- `API Documentation`
- `OAuth App Management`
