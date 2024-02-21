import { Route, Routes, Navigate } from "react-router-dom"
import { Suspense, lazy } from "react"
import Grade from "./views/01students/grade/grade"
const Student = lazy(() => import("./views/01students/student/student"))
const Emrollment = lazy(() => import("./views/01students/enrollment/emrollment"))
const Quit = lazy(() => import("./views/01students/quit/quit"))
const Adjust = lazy(() => import("./views/02schedul/adjust/adjust"))
const Scheduling = lazy(() => import("./views/02schedul/scheduling/scheduling"))
const Teacher = lazy(() => import("./views/03teacher/teacher/teacher"))
const SalaryList = lazy(() => import("./views/03teacher/salaryList/salaryList"))
const FundList = lazy(() => import("./views/04fundList/fundList"))
const CourseManagement = lazy(() => import("./views/05base/courseManagement/courseManagement"))
const ClassRoom = lazy(() => import("./views/05base/classRoom/classRoom"))
const UserAdmin = lazy(() => import("./views/06system/userAdmin/userAdmin"))
const UserLogs = lazy(() => import("./views/06system/userLogs/userLogs"))
const Setting = lazy(() => import("./views/06system/setting/setting"))
const routers = [
  {
    path: "/",
    element: <Navigate to="/grade" />,
  },
  {
    path: "/grade",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Grade />
      </Suspense>
    ),
  },
  {
    path: "/student",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Student />
      </Suspense>
    ),
  },
  {
    path: "/enrollment",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Emrollment />
      </Suspense>
    ),
  },
  {
    path: "/quit",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Quit />
      </Suspense>
    ),
  },
  {
    path: "/adjust",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Adjust />
      </Suspense>
    ),
  },
  {
    path: "/scheduling",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Scheduling />
      </Suspense>
    ),
  },
  {
    path: "/teacher",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Teacher />
      </Suspense>
    ),
  },
  {
    path: "/salaryList",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SalaryList />
      </Suspense>
    ),
  },
  {
    path: "/fundList",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <FundList />
      </Suspense>
    ),
  },
  {
    path: "/courseManagement",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CourseManagement />
      </Suspense>
    ),
  },
  {
    path: "/classRoom",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ClassRoom />
      </Suspense>
    ),
  },
  {
    path: "/userAdmin",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UserAdmin />
      </Suspense>
    ),
  },
  {
    path: "/userLogs",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UserLogs />
      </Suspense>
    ),
  },
  {
    path: "/setting",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Setting />
      </Suspense>
    ),
  },
]
const AppRoute = () => {
  return (
    <Routes>
      {routers.map(item => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  )
}
export default AppRoute
