const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "content-type,authorization"
    }
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") return new Response(null, { headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "content-type,authorization"
    }});

    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({ ok: true, service: "thanxiee-cloud-control-api", version: "0.1.0" });
    }

    if (url.pathname === "/api/v1" && request.method === "GET") {
      return json({
        name: "THANXIEE CLOUD API",
        version: "0.1.0",
        status: "foundation",
        endpoints: ["/api/health", "/api/v1"]
      });
    }

    return json({ error: "Not found" }, 404);
  }
};
