import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

// project imports
import ErrorPage from "../views/errorpage/ErrorPage";
import SignIn from "../views/sign-in/SignIn";
import SignUp from "../views/sign-up/SignUp";
import Profile from "../views/profile/Profile";
import SignLayout from "../layout/SignLayout";
import Home from "../views/home/Home";
import Feed from "../components/feed/Feed";
import ProfileDetails from "../components/profiledetails/ProfileDetails";
import PrivateRoutes from "../utils/PrivateRoutes";
import PublicRoutes from "../utils/PublicRoutes";
const routes = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicRoutes />,
        children: [
          {
            element: <SignLayout />,
            children: [
              {
                path: "/signup",
                element: <SignUp />,
              },
              {
                path: "/signin",
                element: <SignIn />,
              },
            ],
          },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            element: <Home />,
            children: [
              {
                path: "/",
                element: <Feed />,
              },
            ],
          },
          {
            element: <Profile />,
            children: [
              {
                path: "/profile",
                element: <ProfileDetails />,
              },
              {
                path: "/profile/:username",
                element: <ProfileDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
];
const router = createHashRouter(routes);
// createRoutesFromElements(
//   <Route errorElement={<ErrorPage />}>
//     <Route element={<PublicRoutes />}>
//       <Route element={<SignLayout />}>
//         <Route index path="signup" element={<SignUp />} />
//         <Route path="signin" element={<SignIn />} />
//       </Route>
//     </Route>
//     <Route element={<PrivateRoutes />}>
//       <Route element={<Home />}>
//         <Route path="/" element={<Feed />} />
//       </Route>
//       <Route element={<Profile />}>
//         <Route path="/profile" element={<ProfileDetails />} />
//         <Route path="/profile/:username" element={<ProfileDetails />} />
//       </Route>
//     </Route>
//   </Route>
// )

export default router;
