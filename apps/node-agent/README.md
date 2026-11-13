# THANXIEE CLOUD Node Agent

The node agent is a lightweight process installed by a hosting-node contributor.

## Current stage

This is a safe connectivity/heartbeat foundation only. It does not execute user-supplied code, download bot bundles, or expose a remote shell.

## Configuration

Set these environment variables:

- `CONTROL_API_URL`: HTTPS base URL of the deployed control API.
- `NODE_ID`: node identifier issued during enrollment.
- `NODE_TOKEN`: secret node credential (never share or commit it).

Start with:

```bash
npm start
```

The agent requires a future authenticated heartbeat endpoint before it can register as online. Until then it runs in safe local-check mode and reports that remote enrollment is not configured.
