import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/Tweeter-2.0-Project/" replace />;

  return <>{children}</>;
}
