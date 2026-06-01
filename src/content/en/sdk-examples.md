# SDK & Examples

This hub page helps integrators pick the right template without mixing all examples into one long document.

## How to choose

### `Node SDK`

Best for:

- Node.js backends
- TypeScript / JavaScript API integrations
- Server-side business API calls

Includes:

- Minimal direct API example for Node
- Suggested environment variables
- Small server-side calling patterns

### `Python SDK`

Best for:

- Python backends
- automation scripts
- internal integration services

Includes:

- Minimal direct API example for Python
- `requests` template
- timeout and error-handling suggestions

### `OAuth Demo`

Best for:

- third-party login
- OAuth account linking
- teams that need a full authorization-code demo

Includes:

- OAuth sequence diagram
- OAuth flowchart
- minimal Node OAuth demo
- minimal Python OAuth demo

## Suggested reading order

1. Start with `OAuth App Management` to create the app and register redirect URIs.
2. Continue with `OAuth Demo` to run the authorization-code flow end to end.
3. If you only need business API access, go directly to `Node SDK` or `Python SDK`.
4. Use `API Documentation` and Swagger for exact field-level details.

## Minimum integration checklist

1. Confirm the environment base URL and Swagger URL.
2. Choose the auth method: JWT, Access Key, or OAuth.
3. Test one endpoint with `curl` first.
4. Then implement the matching language template.
5. If using third-party login, create the OAuth app and register the redirect URI first.

## Recommended follow-up reading

- `Node SDK`
- `Python SDK`
- `OAuth Demo`
- `API Documentation`
- `OAuth App Management`
