import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/parts/Header/Header";
import Footer from "../components/parts/Footer/Footer";

import { initialEvents as ivt } from "../data/events";
import { loadLocalStorage } from "../lib/eventsfunctions";
const STORAGE_KEY = "events";
if (!localStorage.events) loadLocalStorage(STORAGE_KEY, ivt);
const eventsStorage = JSON.parse(localStorage.events);
const eventsChoice = eventsStorage ? eventsStorage : ivt;

console.log("App Started ....");

const RootLayout = () => (
  <>
    <Header />
    <hr />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
