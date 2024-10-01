import { BrowserRouter } from "react-router-dom"
import { NavBar, ShopRoutes } from "./shared"

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
