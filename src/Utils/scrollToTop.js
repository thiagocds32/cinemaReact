import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Wrapper({ children }) {
  const location = useLocation();
 
  return children;
}
