/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, createRouter, createRoute, createRootRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
import { Layout, DocsLayout } from "@/components/layouts/layout"
import { Home } from "@/pages/home"
import { Onboarding } from "@/pages/onboarding"
import { Pricing } from "@/pages/pricing"
import { Store } from "@/pages/store"
import { Product } from "@/pages/product"
import { Docs } from "@/pages/docs"
import { DocsPage } from "@/pages/docs-page"
import { Login } from "@/pages/login"
import { PaymentProcessing } from "@/pages/payment-processing"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { DashboardOverview } from "@/pages/dashboard/overview"
import { DashboardOrders } from "@/pages/dashboard/orders"
import { DashboardProducts } from "@/pages/dashboard/products"
import { DashboardCustomers } from "@/pages/dashboard/customers"
import { DashboardInventory } from "@/pages/dashboard/inventory"
import { DashboardDiscounts } from "@/pages/dashboard/discounts"
import { DashboardGiftCards } from "@/pages/dashboard/gift-cards"
import { DashboardPricing } from "@/pages/dashboard/pricing"
import { DashboardSettings } from "@/pages/dashboard/settings"
import { VendorLayout } from "@/components/layouts/vendor-layout"
import { VendorOverview } from "@/pages/vendor/vendor-overview"
import { ErrorBoundary } from "@/components/ui/error-boundary"

import { ThemeProvider } from "@/components/ui/theme-provider"

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

const paymentProcessingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment-processing",
  component: PaymentProcessing,
})

// --- DASHBOARD ROUTES ---
const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardLayout,
})

const dashboardOverviewRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/",
  component: DashboardOverview,
})

const dashboardOrdersRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/orders",
  component: DashboardOrders,
})

const dashboardProductsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/products",
  component: DashboardProducts,
})

const dashboardCustomersRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/customers",
  component: DashboardCustomers,
})

const dashboardInventoryRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/inventory",
  component: DashboardInventory,
})

const dashboardDiscountsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/discounts",
  component: DashboardDiscounts,
})

const dashboardGiftCardsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/gift-cards",
  component: DashboardGiftCards,
})

const dashboardPricingRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/pricing",
  component: DashboardPricing,
})

const dashboardSettingsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/settings",
  component: DashboardSettings,
})

// --- VENDOR ROUTES ---
const vendorLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vendor",
  component: VendorLayout,
})

const vendorOverviewRoute = createRoute({
  getParentRoute: () => vendorLayoutRoute,
  path: "/",
  component: VendorOverview,
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
  paymentProcessingRoute,
  dashboardLayoutRoute.addChildren([
    dashboardOverviewRoute,
    dashboardOrdersRoute,
    dashboardProductsRoute,
    dashboardCustomersRoute,
    dashboardInventoryRoute,
    dashboardDiscountsRoute,
    dashboardGiftCardsRoute,
    dashboardPricingRoute,
    dashboardSettingsRoute,
  ]),
  vendorLayoutRoute.addChildren([
    vendorOverviewRoute,
  ]),
  loginRoute,
  docsLayoutRoute.addChildren([docsRoute, docsPageRoute]),
])

const router = createRouter({ routeTree })

export default function App() {
  return <RouterProvider router={router} />
}
