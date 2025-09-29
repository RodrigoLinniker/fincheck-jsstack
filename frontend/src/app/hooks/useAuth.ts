import { useContext } from "react";
import { Authcontext } from "../contexts/AuthContext";

export function useAuth() {
  return useContext(Authcontext);
}
