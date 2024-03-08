import { BrowserRouter as Router,Routes,Route, Navigate  } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Register from "./pages/Register";

function App() {


  return (
     <Router>
         <Routes>
             <Route path="/" element={<Layouts>hello</Layouts>}/>
             <Route path="/search" element={<Layouts>search page...</Layouts>}/>
             <Route path="/register" element={<Layouts><Register/></Layouts>} />
             <Route path="*" element={<Navigate to={'/'}/>}/>
         </Routes>
     </Router>
  )
}

export default App
