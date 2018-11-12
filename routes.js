import Heros from "./components/Heros";
import Dashboard from "./components/Dashboard";
import HeroDetails from "./components/Hero-detail";

export default [
  { path: "/", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
  { path: "/heros", component: Heros },
  { path: "/detail/:id", component: HeroDetails }
];
