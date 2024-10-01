import { BrowserRouter } from "react-router-dom"
import { ShopRoutes } from "./core/ShopRoutes"


function App() {
  return (
    <BrowserRouter>    
      <div className="page">
        <ShopRoutes></ShopRoutes>
      </div>
    </BrowserRouter>
  )
}

export default App
