# OAuth app management

Use this page to register OAuth 2.0 client applications for third-party integrations.

## What OAuth is

OAuth 2.0 is an **authorization protocol**. It allows a third-party application to access part of a user's account data or capabilities **without receiving the user's password directly**.

In practical terms:

- You create an OAuth app in this system.
- A third-party app sends the user here for authorization.
- The user approves a set of scopes.
- This system returns the authorization result to the third-party app.
- The app only receives the approved access, not the user's login credentials.

This page is where you control which external apps may request access, which redirect URIs are allowed, and what scopes they can ask for.

## Page purpose

- Create OAuth applications for external websites or tools.
- Configure redirect URIs and basic app metadata.
- Review client IDs, scopes, and secret status.
- Rotate or delete credentials when an integration changes.

## What you will see

### Application list

- Application name and client ID.
- Client type: confidential or public.
- Redirect URI count and recent usage time.
- Secret preview for confidential clients.

### Create / edit dialog

The dialog normally includes:

- **Application name** for identification.
- **Description** for business context.
- **Client type** to decide whether a secret can be safely stored.
- **Redirect URIs** for allowed post-authorization return targets.
- **OAuth scopes** for requested permissions.
- **Homepage / Logo / Policy / ToS URLs** for app identity and compliance.

### Management actions

- Create a new OAuth app.
- Edit redirect URIs, scopes, and URLs.
- Rotate the client secret.
- Delete an unused app.

## Client type: confidential vs public

The client type decides whether the application can safely keep credentials secret.

### Confidential client

Use this for:

- Websites with their own backend
- Server-rendered apps
- Systems that can keep secrets in server-side environment variables

Characteristics:

- The system issues a **client secret**.
- The app is expected to use that secret only on the server side.
- If the secret leaks, another party may impersonate the app in OAuth flows.

Recommendations:

- Store the secret only on the backend.
- Never ship it in browser code, mobile apps, desktop bundles, or public repositories.
- Rotate it immediately if exposure is suspected.

### Public client

Use this for:

- Single-page applications (SPA)
- Mobile apps
- Desktop clients
- Browser extensions

Characteristics:

- A public client must **not rely on a client secret as a security boundary**.
- Any secret embedded in software distributed to end users may be extracted.
- Security depends more on correct redirect URI control, safer authorization flow handling, and narrower scopes.

Simple rule:

- **Confidential client**: can safely store a secret.
- **Public client**: cannot safely store a secret.

## Field and behavior details

### Application name

- Used in management views and may also affect how the app is recognized in the authorization flow.
- Prefer a real product or integration name so users can identify it.

### Description

- Adds context for operators and reviewers.
- Use it to explain what the integration does and who uses it.

### Redirect URI

This is one of the most important OAuth settings.

- After the user approves access, the system only redirects to a **registered redirect URI**.
- The redirect URI in the OAuth request must **match exactly**.
- Differences in protocol, host, port, path, or trailing slash can cause authorization failure.

Recommendations:

- Register separate URIs for development, staging, and production.
- Avoid broad or uncontrolled callback targets.
- Remove old URIs when they are no longer needed.

### Client secret (confidential clients only)

- The full secret may only be shown once after creation or rotation.
- The list normally shows only a preview, not the full plaintext value.
- If the integration loses the secret, the correct action is to rotate it and store the new value securely.

### Homepage, Logo, Policy, and ToS URLs

These fields provide app identity metadata:

- **Homepage URL**: app home page
- **Logo URL**: app icon or logo
- **Policy URL**: privacy policy
- **ToS URL**: terms of service

Typical uses:

- Help users recognize the app during authorization
- Expose compliance and legal information
- Improve trust and clarity in management or consent views

## What OAuth scopes are

OAuth scopes define **which capabilities the third-party app wants to access**.

Core principles:

- **Request only what is needed**
- **Use least privilege**
- **Make the authorization intent understandable**

A scope does not mean “full access after login.” It means “access only to the capabilities approved for that scope.”

## How to read the OAuth Scope reference table

The **OAuth Scope reference table** at the top of the page helps administrators understand each available scope. It normally includes:

- **Scope**: the identifier used directly in authorization requests
- **Description**: a short meaning summary
- **Access**: the kind of data or capability granted
- **Notes**: extra caveats, sensitivity notes, or usage guidance

This table helps answer questions such as:

- Which scopes are safe for common integrations?
- Which scopes are sensitive and should be granted carefully?
- Does a given app actually need the scope it is requesting?

## Common scope meanings

| Scope | Typical meaning | Risk note |
| --- | --- | --- |
| `profile` | Read basic profile data | Usually low-risk baseline access |
| `email` | Read email-related information | Contains personal identity data |
| `notification` | Access notification-related features | May affect notification flows |
| `oauth_client` | Access OAuth client management capabilities | May approach app-level administration |
| `accesskey` | Access access-key related features | May affect programmatic access, higher risk |
| `passkey` | Access passkey-related features | Touches authentication management |
| `two_factor` | Access two-factor related features | High-sensitivity security scope |

Scopes such as `email` and `two_factor` should usually be treated as more sensitive and granted with extra care.

## Recommended setup strategy

### If your integration has a backend

- Prefer a **confidential client**.
- Store the client secret only on the server.
- Register only the redirect URIs you truly use.
- Request only the scopes the business flow requires.

### If your integration is frontend-only or runs on user devices

- Prefer a **public client**.
- Do not assume a client secret can remain private.
- Control redirect URIs and scope selection more strictly.
- Avoid high-sensitivity scopes unless they are truly required.

## Common issues and checks

### Redirect URI mismatch during authorization

Check whether:

- the request URI exactly matches the registered value
- a trailing slash differs
- the port differs
- the wrong environment URI was used

### Full client secret is no longer visible

This is usually expected.

- Full secrets are often shown only once.
- If the value was not saved, rotate the secret and store the new one securely.

### Not sure whether to choose confidential or public

The key question is not feature size. It is:

- **Can the application keep the secret only on a trusted server and never expose it to end users?**

If not, treat it as a public client.

## Common actions

1. Create an app and choose the correct client type.
2. Add every allowed redirect URI exactly as your integration will use it.
3. Copy the client secret immediately if one is issued.
4. Rotate the secret if it may have been exposed.

## Notes

- Public clients do not use a client secret.
- Confidential client secrets are sensitive and may only be shown once in full.
- Redirect URIs must match exactly during OAuth authorization.
- Scopes should follow the least-privilege principle.
- High-sensitivity scopes should only be granted to trusted integrations with a clear need.

## Related pages

- `account-settings`
- `api-documentation`
