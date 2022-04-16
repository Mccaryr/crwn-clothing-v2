import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import {Routes, Route} from "react-router-dom";
import SignIn from "./routes/SignIn/SignIn";


const Shop =() => {
  return(
    <div>
      <div>
        <h1>Shop Component</h1>
      </div>
    </div>
  )
}

const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='SignIn' element={<SignIn />} />
    </Route>  
  </Routes>
  ) 
}

export default App;