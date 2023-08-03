
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Create from "./pages/Create";
import List from "./pages/List";
import Update from "./pages/Update";
function App() {
  return (
    <div className="">
       
        <Routes>
          <Route exact path="/" element={<><Navbar/></>}/>
          <Route exact path="/tasks/list" element={<><Navbar/><List/></>}/>
          <Route exact path="/tasks/create" element={<><Navbar/><Create/></>}/>
          <Route
                    path="/tasks/update/:id"
                    exact
                   element={<><Navbar/><Update/></>}
                   
                />
        </Routes>
    </div>
  );
}

export default App;
