import {BrowserRouter,Routes,Route} from "react-router-dom"
import Collect from "./pages/Collect";
import Login from "./pages/Login"
import Home  from "./pages/Home";
import UserManager from "./pages/UserManager";
import GoodsManager from "./pages/GoodsManager";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        
        <Route path="/home" element={<Collect />}>
          <Route index element={<Home />} />
          <Route path="user" element={<UserManager />} />
          <Route path="goods" element={<GoodsManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
