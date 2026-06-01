# OAuth app management

Use this page to register OAuth 2.0 client applications for third-party integrations.

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

### Management actions

- Create a new OAuth app.
- Edit redirect URIs, scopes, and URLs.
- Rotate the client secret.
- Delete an unused app.

## Common actions

1. Create an app and choose the correct client type.
2. Add every allowed redirect URI exactly as your integration will use it.
3. Copy the client secret immediately if one is issued.
4. Rotate the secret if it may have been exposed.

## Notes

- Public clients do not use a client secret.
- Confidential client secrets are sensitive and may only be shown once in full.
- Redirect URIs must match exactly during OAuth authorization.

## Related pages

- `account-settings`
- `api-documentation`