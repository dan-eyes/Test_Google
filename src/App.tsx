/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, createRouter, createRoute, createRootRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
import { Layout, DocsLayout } from "./components/layout"
import { Home } from "./pages/home"
import { Onboarding } from "./pages/onboarding"
import { Pricing } from "./pages/pricing"
import { Store } from "./pages/store"
import { Product } from "./pages/product"
import { Docs } from "./pages/docs"
import { DocsPage } from "./pages/docs-page"
import { Login } from "./pages/login"
import { ErrorBoundary } from "./components/error-boundary"

import { ThemeProvider } from "./components/theme-provider"

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="light" storageKey="ida-ui-theme">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </ThemeProvider>
  ),
})

const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main",
  component: Layout,
})

const docsLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "docsLayout",
  component: DocsLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: Home,
})

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/onboarding",
  component: Onboarding,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      plan: (search.plan as string) || undefined,
      billing: (search.billing as string) || undefined,
    }
  },
})

const pricingRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/pricing",
  component: Pricing,
})

const storeRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/store",
  component: Store,
})

const productRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/products/$handle",
  component: Product,
})

const docsRoute = createRoute({
  getParentRoute: () => docsLayoutRoute,
  path: "/docs",
  component: Docs,
})

const docsPageRoute = createRoute({
  getParentRoute: () => docsLayoutRoute,
  path: "/docs/$category/$slug",
  component: DocsPage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
})

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([
    indexRoute,
    pricingRoute,
    storeRoute,
    productRoute,
  ]),
  onboardingRoute,
  loginRoute,
  docsLayoutRoute.addChildren([docsRoute, docsPageRoute]),
])

const router = createRouter({ routeTree })

export default function App() {
  return <RouterProvider router={router} />
}
