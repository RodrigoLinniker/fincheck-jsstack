import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface AuthGuardaProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardaProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to={"/login"} replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}
