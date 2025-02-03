import { useEffect } from "react";

const AppScreen = () => {
  useEffect(() => {
    window.location.href = "/app";
  }, []);

  return <h2>Redirecting...</h2>;
};

export default AppScreen;
