import "./lib/error-capture";
import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

const handler = createStartHandler(defaultStreamHandler);

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    if (payload.unhandled === true && payload.message === "HTTPError") {
      const captured = consumeLastCapturedError();
      console.error(captured ?? new Error(`h3 swallowed SSR error: ${body}`));
      return new Response(renderErrorPage(captured ?? `h3 swallowed SSR error: ${body}`), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  } catch {}

  return response;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(error), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};


