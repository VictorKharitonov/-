import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { Member, SignUp, Team } from '../pages';
import { AuthLayout, Layout } from './layout';
import Auth from './Auth.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Auth>
                <Team />
              </Auth>
            }
          />
          <Route
            path="*"
            element={
              <Auth>
                <Team />
              </Auth>
            }
          />
          <Route
            path="/team/:id"
            element={
              <Auth>
                <Member />
              </Auth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
