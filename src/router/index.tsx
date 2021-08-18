import { authCtx } from "index";
import {
  CreateSurvey,
  AdminDashBoard,
  EditSurvey,
  Login,
  SignUp,
  UserDashBoard,
  UserSurvey,
  ViewSurvey,
  AdminSurvey,
  SurveyResponse,
  ViewSurveyResponse,
} from "pages";
import { Profile } from "pages/Profile";
import React from "react";
import { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./ProtectedRoutes";

export function Router() {
  const auth = useContext(authCtx);
  console.log(auth.state);
  return (
    <div className="bg-gray-50 w-full h-full min-w-screen min-h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/web/login">
            <Login />
          </Route>
          <Route path="/web/signup">
            <SignUp />
          </Route>
          <ProtectedRoute
            authenticationPath="/web/"
            component={Profile}
            exact
            isAuthenticated={Boolean(
              (auth.state.token && auth.state.role === "Admin") ||
                auth.state.role === "User"
            )}
            path="/web/profile"
          />
          <ProtectedRoute
            authenticationPath="/web/login"
            component={
              auth.state.token && auth.state.role === "Admin"
                ? AdminDashBoard
                : UserDashBoard
            }
            exact
            isAuthenticated={Boolean(auth.state.token)}
            path="/web/"
          />
          <ProtectedRoute
            authenticationPath="/web/"
            component={CreateSurvey}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role === "Admin"
            )}
            path="/web/createSurvey"
          />

          <ProtectedRoute
            authenticationPath="/web/"
            component={AdminSurvey}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role === "Admin"
            )}
            path="/web/adminsurvey"
          />

          <ProtectedRoute
            authenticationPath="/web/"
            component={SurveyResponse}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role === "Admin"
            )}
            path="/web/surveyresponse"
          />

          <ProtectedRoute
            authenticationPath="/web/"
            component={ViewSurveyResponse}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role === "Admin"
            )}
            path="/web/viewresponse/:surveyId"
          />

          <ProtectedRoute
            authenticationPath="/web/"
            component={UserSurvey}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role === "User"
            )}
            path="/web/usersurvey"
          />

          <ProtectedRoute
            authenticationPath="/web/"
            component={EditSurvey}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role === "Admin"
            )}
            path="/web/editSurvey/:surveyId"
          />

          <ProtectedRoute
            authenticationPath="/web/"
            component={ViewSurvey}
            isAuthenticated={Boolean(
              auth.state.token && auth.state.role == "User"
            )}
            path="/web/attend/:surveyId"
          />
          <Redirect to="/web/" />
        </Switch>
      </BrowserRouter>

      <ToastContainer
        autoClose={5000}
        closeOnClick
        hideProgressBar
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-left"
      />
    </div>
  );
}
