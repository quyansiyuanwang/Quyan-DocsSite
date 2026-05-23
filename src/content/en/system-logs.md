# System logs

Use this page to inspect API logs and server log files.

## Page purpose

- Filter and review API request logs.
- Inspect request and response details.
- Browse server log files and search inside them.
- Support troubleshooting for backend and infrastructure problems.

## What you will see

### API logs tab

- Filters by method, path, status, user, request ID, IP, and date.
- Log rows with expandable detail.
- Request and response payloads.
- Headers and metadata.
- Pagination.

### Server logs tab

- Server log file list.
- File content viewer.
- Search within the file.
- Line-limit controls.

## Common actions

1. Use filters to narrow down the target request or time window.
2. Expand a log row to inspect payloads and headers.
3. Search server files when the issue is deeper than a single API request.
4. Compare request IDs across tools when correlating incidents.

## Notes

- Request and response payloads can contain sensitive operational data.
- Log expansion is useful for trace analysis, but file search is better for recurring patterns.
- This page is central for diagnosing relay, auth, billing, or monitoring issues.

## Related pages

- `business-logs`
- `upstream-status`
- `ip-monitoring-dashboard`
