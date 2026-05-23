# Server configuration

Use this page to maintain global server-side settings.

## Page purpose

- Configure registration behavior.
- Maintain billing settings.
- Manage SMTP and email delivery configuration.
- Tune error-decay and IP-ban thresholds.

## What you will see

### Configuration sections

- Registration settings.
- Billing settings.
- SMTP settings.
- Error-decay settings.
- IP-ban thresholds and ban durations.

### Editing tools

- Collapsible per-section layout.
- Editable weight tables.
- Save button for each section.

## Common actions

1. Expand the section you need to adjust.
2. Edit only the values relevant to the current task.
3. Save section by section.
4. Re-check related monitoring after major rule changes.

## Notes

- Small changes here can affect login, billing, mail delivery, and abuse controls across the whole system.
- SMTP mistakes often surface later in notification or recovery flows.
- IP-ban and decay changes should be coordinated with monitoring data.

## Related pages

- `ip-monitoring-dashboard`
- `notification-settings`
- `relay-settings`
