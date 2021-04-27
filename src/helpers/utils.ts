import { ContextType } from "react";
import { Routes } from "../router/AppRouter";
import { UserContext } from "../state/UserContext";

type GetActiveRoute = {
  routes: Routes;
  userContext: ContextType<typeof UserContext>;
};
export function getActiveRoute({ routes, userContext }: GetActiveRoute) {
  return routes.filter((el) => {
    if (el.isProtected && !userContext.user) {
      return false;
    }
    return true;
  });
}
