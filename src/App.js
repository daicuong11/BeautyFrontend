import './index.css';
import React, { Fragment } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import { publicRoutes, privateRoutes } from './routes';
import NotFoundPage from './pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Import component PrivateRoute
import AdminLayout from './layouts/AdminLayout/AdminLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = HomeLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>}
            />
          })}
          {privateRoutes.map((route, index) => {
            let Layout = AdminLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return <Route key={index} path={route.path}
              element={
                <PrivateRoute
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              }
            />
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
