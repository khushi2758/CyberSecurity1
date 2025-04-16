import { Outlet } from "react-router-dom"

import MainNavigation from "../components/MainNavigation";

function RootLayout(){
   return <>
<MainNavigation/>
<main>
<div className="animated-bg">
  <Outlet />
</div>
</main>

   </>


}
export default RootLayout