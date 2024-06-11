import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import OuterLayoutRouter from "next/dist/client/components/layout-router";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
