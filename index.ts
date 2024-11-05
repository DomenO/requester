import { serve } from "bun";

serve({
  idleTimeout: 0,
  fetch(req) {
    const url = new URL(req.url);
    const params = url.searchParams;

    // Получаем параметры
    const pending = parseInt(params.get("pending") || "0", 10);
    const status = parseInt(params.get("status") || "200", 10);
    const body = params.get("body") || "";
    
    // Заголовки
    const headers = new Headers();

    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "*");
    headers.set("Access-Control-Allow-Headers", "*");

    params.forEach((value, key) => {
      if (key.startsWith("_")) {
        headers.set(key.substring(1), value);
      }
    });

    // Ответ с задержкой
    return new Promise<Response>((resolve) => {
      setTimeout(() => {
        resolve(new Response(body, { status, headers }));
      }, pending);
    });
  },
  port: 3000,
});

console.log("Server running on port 3000");