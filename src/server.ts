import { createServer } from "node:http";
import { parse } from "node:url";
import next from "next";

(async () => {
  const dev = process.env.NODE_ENV !== "production";
  const hostname = "localhost";
  const port = parseInt(process.env.PORT ?? "8000", 10);

  const app = next({ dev, hostname, port });

  await app.prepare();

  createServer((req, res) => {
    app.getRequestHandler()(req, res, parse(req.url as string, true));
  }).listen(port);

  console.log(`Server listening on http://${hostname}:${port} (${dev ? "development" : "production"})`);
})();
