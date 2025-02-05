import { useContext } from "react"
import { DBContext } from "../context"
import { Navigate, Outlet } from "react-router-dom";

const RedirectRoutes = () => {    
  const { session } = useContext(DBContext);
  return (
   !session ? <Outlet/> : <Navigate to='/'/>
  )
}

export default RedirectRoutes