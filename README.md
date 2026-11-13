# THANXIEE CLOUD

Community-powered, multi-user hosting control plane for WhatsApp bot workloads.

> **Status:** Early foundation (v0.1.0). This repository is the hosting platform, not the WANNA-CRY THANXIEE bot itself.

## Architecture

- **Dashboard:** static web frontend (Cloudflare Pages-compatible).
- **Control API:** Cloudflare Worker.
- **Database:** Cloudflare D1.
- **Hosting nodes:** contributor-operated Node.js agents.
- **Bot runtime:** isolated workload adapter, added only after node security and resource limits are implemented.

The control plane manages users, nodes, deployments and health. A node must never execute arbitrary uploaded code merely because a dashboard request asks it to.

## Current limitations

- Free edge hosting is suitable for the control plane, not a continuously running WhatsApp socket.
- Bot uptime depends on an online hosting node.
- This starter does not yet run WhatsApp bots, accept ZIP deployments, or provide guaranteed 24/7 uptime.
- Never commit API tokens, WhatsApp session files, passwords, or private keys.

## Repository layout

```text
apps/
  control-api/   Cloudflare Worker API
  dashboard/     Static dashboard
  node-agent/    Contributor node heartbeat agent
database/
  migrations/    D1 schema
docs/
  SECURITY.md
```

## Development

Requirements: Node.js 20+ and npm.

1. Read `docs/SECURITY.md`.
2. Install the API dependencies: `cd apps/control-api && npm install`.
3. Configure a D1 database and update `wrangler.toml`.
4. Run locally: `npm run dev`.

Node agent setup is documented in `apps/node-agent/README.md`.

## Roadmap

1. Control API and database foundation.
2. Node enrollment, heartbeat and health monitoring.
3. User authentication and dashboard integration.
4. Secure workload isolation and deployment templates.
5. Logs, quotas, backups and operational controls.

## License

Not selected yet. Do not assume this project is open-source licensed until a LICENSE file is added.
