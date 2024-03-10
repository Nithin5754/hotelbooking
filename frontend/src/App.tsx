import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotels from "./pages/AddHotels";
import { useAppContext } from "./context/AppContext";
import MyHotels from "./pages/MyHotels";


function App() {
  const {isLoggedIn}=useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts>hello</Layouts>} />
        <Route path="/search" element={<Layouts>search page...</Layouts>} />
        <Route
          path="/register"
          element={
            <Layouts>
              <Register />
            </Layouts>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layouts>
              <SignIn />
            </Layouts>
          }
        />
        {
          isLoggedIn && <>
          <Route path="/add-hotel" element={<Layouts>
            <AddHotels/>
          </Layouts>}/>

          <Route path="/my-hotels" element={<Layouts>
            <MyHotels/>
          </Layouts>}/>
          </>
        }
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
