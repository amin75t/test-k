import { useEffect } from "react";

const AppScreen = () => {
  useEffect(() => {
    window.location.href = "https://test-k-beige.vercel.app/app";
  }, []);

  return <h2>Redirecting...</h2>;
};

export default AppScreen;
