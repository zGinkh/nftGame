import Home from "./pages/home"
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import { ConnectButton } from '@rainbow-me/rainbowkit';



function App() {
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  </BrowserRouter>
  </>);
}
export default App
