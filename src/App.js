import { createContext, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import MealPlanningRecipes from "./pages/MealPlanningRecipes";
import ExistingEvents from "./pages/ExistingEvents";
import PlanYourOwnEvent from "./pages/PlanYourOwnEvent";

// import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Notfound from "./pages/Notfound";
import FullRecipe from "./components/FullRecipe";
import Login from "./pages/Login_component";
import SignUp from "./pages/Signup_component";
import UserDetails from "./components/UserDetails";
import ExistingEventsLanding from "./pages/ExistingEventsLanding";
import TermsOfUse from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PlayingNavBar from "./components/NavBar";
import UserContext from "./components/UserContext";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/play" element={<PlayingNavBar />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<PlayingNavBar />}>
              <Route index element={<Index />} />
              <Route path="TermsOfUse" element={<TermsOfUse />} />
              <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route
                path="MealPlanningRecipes"
                element={<MealPlanningRecipes />}
              />
              <Route
                path="ExistingEvents/"
                element={<ExistingEventsLanding />}
              />
              <Route path="ExistingEvents/:id" element={<ExistingEvents />} />
              <Route path="PlanYourOwnEvent" element={<PlanYourOwnEvent />} />
              {/* <Route path="Dashboard" element={<Dashboard />} /> */}
              <Route path="fullrecipe/" element={<FullRecipe />} />
              <Route path="fullrecipe/:id" element={<FullRecipe />} />
              <Route path="userDetails" element={<UserDetails />} />
              <Route path="*" element={<Notfound />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
