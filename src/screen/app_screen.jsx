import { useEffect } from "react";

const AppScreen = () => {
  useEffect(() => {
    window.location.href = "https://www.amin.com/app";
  }, []);

  return <h2>Redirecting...</h2>;
};

export default AppScreen;
