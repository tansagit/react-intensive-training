import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "./Header";
import Footer from "./Footer";

export const ProtectedLayout = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
