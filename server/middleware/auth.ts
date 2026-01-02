import { auth } from "~~/lib/auth";

export default defineEventHandler(async (event) => {
  if (event.path.startsWith("/game/" || event.path.startsWith("/account"))) {
    const session = await auth.api.getSession({
      headers: event.headers,
    });

    if (!session) {
      return sendRedirect(event, "/login", 302);
    }
  }
});
