import {createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/course/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/Contact";
import FaqPage from "./pages/help/Faq";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailPage, { 
  courseDetailsLoader,
} from "./pages/course/CourseDetails";
import CourseLayout from "./layouts/CourseLayout";
import CourseCreate from "./pages/course/CourseCreate";
import CourseCreatePage from "./pages/course/CourseCreate";
import CourseEditPage from "./pages/course/CourseEdit";

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
            { path: "create",element: <CourseCreatePage />},
            { path: ":courseid/edit",element: <CourseEditPage />}
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
