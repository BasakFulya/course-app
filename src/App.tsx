//   /=> <Home />
//   /about => <About />
//   /courses => <Courses />

import {createBrowserRouter, 
         //createRoutesFromElements,
         //Route, 
         RouterProvider, 
       } from "react-router";

import HomePage from "./pages/help/Home";
import AboutPage from "./pages/help/About";
import CoursesPage, { coursesLoader } from "./pages/help/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailPage from "./pages/help/CourseDetailPage";

// localhost:3000/
// localhost:3000/home
// localhost:3000/about
// localhost:3000/courses


const router = createBrowserRouter(
  [
    { 
      path: "/", 
      element: <MainLayout />,
      children: [
        { index: true , element:<HomePage /> },
        { path: "home", element:<HomePage /> },
        { path: "about", element:<AboutPage /> },
        { path: "courses", element:<CoursesPage />, loader: coursesLoader },
        { path: "courses/:courseid", element: <CourseDetailPage />},
        {
          path: "help",
          element: <HelpLayout />,
          children: [
            { path: "contact",element: <ContactPage />},
            { path:"faq", element: <FaqPage />},
          ],
        },
      ],
    },
  ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
