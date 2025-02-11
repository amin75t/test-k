import AppScreen from "./screen/app_screen";
import PwaSplash from "./screen/PwaSplash";



export const routes = [
  { path: "", element: <AppScreen /> },
  { path: "pwa/splash", element: <PwaSplash /> },
  { path: "/app", element: <></> },
];