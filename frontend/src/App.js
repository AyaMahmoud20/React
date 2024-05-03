import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Shop from "./Pages/Shop";
import Women from "./Women/Women"; // Import the Women component
import Categories from "./Categories/Categories";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import Profile from "./Pages/Profile";

// Create a context for your app
const MyContext = React.createContext();

// Create a provider component
function MyProvider(props) {
  // Define your context state and methods here
  const [someState, setSomeState] = React.useState(/* initial value */);

  return (
    <MyContext.Provider value={{ someState, setSomeState }}>
      {props.children}
    </MyContext.Provider>
  );
}

function App() {
  return (
    <MyProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/women' element={<Women />} /> // Add route for Women component
            <Route path='/mens' element={<Categories category='mens' />} />
            <Route path='/womens' element={<Categories category='womens' />} />
            <Route path='/kids' element={<Categories category='kids' />} />

            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/saved' element={<Saved />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
