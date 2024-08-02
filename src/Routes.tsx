import {
  BrowserRouter,
  Route,
  Routes as ReactRoutes,
  Outlet,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("./pages/Auth/Login"));
const ProtectedPage = lazy(() => import("./Layout/ProtectedPage"));
const JobCategory = lazy(() => import("./pages/job-category/job-category"));
const ActionCategory = lazy(
  () => import("./pages/job-category/action-category")
);
const ShopCategory = lazy(() => import("./pages/shop-category/shop-category"));
const AddShopCategory = lazy(
  () => import("./pages/shop-category/action-shop-category")
);
const EditShopCategory = lazy(
  () => import("./pages/shop-category/action-shop-category")
);
const ReportTypes = lazy(() => import("./pages/report-type/report-type"));
const EditReportTypes = lazy(
  () => import("./pages/report-type/action-type-report")
);
const AddReportTypes = lazy(
  () => import("./pages/report-type/action-type-report")
);

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<SuspenseLayout />}>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedPage />}>
            <Route path="/" element={<></>} />
            <Route path="/jop-category" element={<JobCategory />} />
            <Route path="/edit-job-category/:id" element={<ActionCategory />} />
            <Route path="/add-job-category" element={<ActionCategory />} />
            <Route path="/shop-category" element={<ShopCategory />} />
            <Route path="/add-shop-category" element={<AddShopCategory />} />
            <Route
              path="/edit-shop-category/:id"
              element={<EditShopCategory />}
            />
            <Route path="/report-type" element={<ReportTypes />} />
            <Route path="/edit-report-type/:id" element={<EditReportTypes />} />
            <Route path="/add-report-type" element={<AddReportTypes />} />
          </Route>
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<></>}>
      <Outlet />
    </Suspense>
  );
};
