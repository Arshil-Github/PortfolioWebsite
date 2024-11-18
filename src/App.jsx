import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import NavigationBar from "./components/NavigationBar";
import ControlPanel from "./pages/Administrator/ControlPanel";
import ExperiencePage from "./pages/ExperiencePage";
const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Use AppLayout for routes to include NavBar
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/admin",
        element: <ControlPanel />,
      },
    ],
  },
]);

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/blogs",
      element: <BlogPage />,
    },
    {
      path: "/projects",
      element: <ProjectPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
