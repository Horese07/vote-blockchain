// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import VotePage from "views/Auth/VotePage.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/elections",
    name: "Gestion des Elections",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/candidats",
    name: "Gestion des Candidats",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  
  {
    path: "/vote",
    //name: "Voter",
    rtlName: "لوحة القيادة",
    //icon: <RocketIcon color="inherit" />,
    secondaryNavbar: true,
    component: VotePage,
    layout: "/auth",
  },
  {
    name: "PAGES DE CONNEXION",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/signup",
        name: "Voter",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
      {
        path: "/signin",
        name: "Déconnecter",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      
    ],
  },
];
export default dashRoutes;
