import { BrowserRouter } from "react-router-dom"
import { ShopRoutes } from "./shared/ShopRoutes"
import { NavBar } from "./shared/components/core/NavBar"


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <hr />
      <div className="page">
        <ShopRoutes></ShopRoutes>
      </div>
    </BrowserRouter>
  )
}

export default App
