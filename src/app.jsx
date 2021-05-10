import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskListPage from "./pages/task-list-page";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import ProfilePage from "./pages/profile-page";
import Navbar from "./components/navbar";
import AuthProvider from "./components/auth-provider";
import PrivateRoute from "./components/private-route";
import NotificationProvider from "./components/notification-provider";

function App() {
  return (
    <Router>
      <NotificationProvider>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/profile">
              <ProfilePage />
            </PrivateRoute>
            <PrivateRoute path="/tasks">
              <TaskListPage />
            </PrivateRoute>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </AuthProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
