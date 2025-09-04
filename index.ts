import { serve } from "bun";

const landingHTML = await Bun.file("landing.html").text();

serve({
  idleTimeout: 0,
  fetch(req) {
    const url = new URL(req.url);
    const params = url.searchParams;

    if (url.pathname === "/" && params.toString() === "") {
      return new Response(landingHTML, {
        headers: {
          "Content-Type": "text/html; charset=utf-8"
        },
      });
    }

    const pending = parseInt(params.get("pending") || "0", 10);
    const status = parseInt(params.get("status") || "200", 10);
    const body = params.get("body") || "";

    const headers = new Headers();

    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "*");
    headers.set("Access-Control-Allow-Headers", "*");

    params.forEach((value, key) => {
      if (key.startsWith("_")) {
        headers.set(key.substring(1), value);
      }
    });

    return new Promise<Response>((resolve) => {
      setTimeout(() => {
        resolve(new Response(body, { status, headers }));
      }, pending);
    });
  },
  port: 3000,
});

console.log("Server running on port 3000");