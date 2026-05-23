# Relay token management

Use this page to manage relay tokens, channel routing, quotas, and failover behavior.

## Page purpose

- Create and maintain relay tokens.
- Review token usage, expiry, and quota windows.
- Control channel ordering and failover strategy.
- Enable or disable tokens without deleting them immediately.

## What you will see

### Token list

- Token name and searchable token details.
- Request count and total token usage.
- Expiry, status, and quota usage.
- Paged or show-all display modes.

### Channel and failover data

- Ordered channel list.
- Failover summary.
- Quota-window details.

### Management actions

- Create token.
- Edit token.
- Copy token.
- Enable or disable token.
- Delete token.
- Export or open more actions.

## Common actions

1. Create a token with a recognizable name.
2. Configure channel order and failover behavior.
3. Review quota usage regularly to avoid unexpected throttling.
4. Disable a token first if you want to stop traffic without losing the record.
5. Delete tokens only after confirming they are no longer referenced.

## Notes

- Show-all mode is useful for audits but can be heavier to scan.
- Quota-window details help explain short-term request failures.
- Relay token usage often relates directly to balance and upstream status pages.

## Related pages

- `api-documentation`
- `relay-settings`
- `upstream-status`
