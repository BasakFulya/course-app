import {createBrowserRouter, 
         //createRoutesFromElements,
         //Route, 
         RouterProvider, 
       } from "react-router";

import HomePage from "./pages/help/Home";
import AboutPage from "./pages/help/About";
import CoursesPage, { coursesLoader } from "./pages/course/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailPage, { 
  courseDetailsLoader,
} from "./pages/course/CourseDetailPage";
import CourseLayout from "./layouts/CourseLayout";

const router = createBrowserRouter(
  [
    { 
      path: "/", 
      element: <MainLayout />,
      children: [
        { index: true , element:<HomePage /> },
        { path: "home", element:<HomePage /> },
        { path: "about", element:<AboutPage /> },
        { 
          path: "courses", 
          element: <CourseLayout />, 
          children: [
            { index: true, element: <CoursesPage/>, loader:coursesLoader },
            {
              path:"courseid",
              element: <CourseDetailPage/>,
              loader: courseDetailsLoader,

            },
          ],
        },
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
