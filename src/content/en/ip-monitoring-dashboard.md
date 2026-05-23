# IP monitoring dashboard

Use this page to review IP risk data, blacklist state, and whitelist controls.

## Page purpose

- Query current IP status.
- Inspect error weight and decay behavior.
- Maintain blacklist and whitelist records.
- Review high-risk IP trends.

## What you will see

### Overview and query tools

- Overview tab.
- IP status query.
- Ban status, error weight, current level, and thresholds.
- Decay estimate and error breakdown.

### Blacklist management

- Top banned IPs.
- Search, add, edit, and unban actions.

### Whitelist management

- Add and remove whitelist entries.
- Permission-gated actions where required.

## Common actions

1. Query a suspicious IP first.
2. Review whether the current level matches the observed behavior.
3. Add or edit blacklist entries when enforcement is needed.
4. Use the whitelist only for trusted exceptions.

## Notes

- Whitelisting should be used carefully because it can bypass protection layers.
- Error-decay estimates help determine whether a ban will naturally relax over time.
- This page is most useful when combined with logs and server-configuration rules.

## Related pages

- `server-configuration`
- `system-logs`
- `business-logs`
