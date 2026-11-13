const apiUrl = process.env.CONTROL_API_URL;
const nodeId = process.env.NODE_ID;
const nodeToken = process.env.NODE_TOKEN;

if (!apiUrl || !nodeId || !nodeToken) {
  console.log("[THANXIEE CLOUD] Node agent is in local-check mode.");
  console.log("Configure CONTROL_API_URL, NODE_ID and NODE_TOKEN after node enrollment is implemented.");
  process.exit(0);
}

if (!apiUrl.startsWith("https://")) {
  console.error("Refusing to send node credentials over a non-HTTPS connection.");
  process.exit(1);
}

console.log("[THANXIEE CLOUD] Credentials detected; authenticated heartbeat is not enabled in this version.");
console.log("No remote commands or uploaded workloads will be executed.");
