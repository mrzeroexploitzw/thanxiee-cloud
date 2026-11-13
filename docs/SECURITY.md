# Security baseline

1. Never store WhatsApp session data, API tokens or passwords in Git.
2. All node communication must use HTTPS and authenticated, revocable credentials.
3. Treat every uploaded repository or archive as untrusted code.
4. Do not execute user workloads inside the control API or dashboard runtime.
5. Before enabling workloads, implement per-user isolation, CPU/memory/process limits, filesystem boundaries and network egress controls.
6. Node owners must explicitly consent to each workload and its resource allocation.
7. Never expose a node's local management port directly to the public internet.
8. Log administrative actions without logging secrets or message contents.
9. Implement credential rotation, node revocation and deployment termination before public onboarding.
10. Do not claim 24/7 uptime: availability depends on the hosting node and the underlying free provider.
