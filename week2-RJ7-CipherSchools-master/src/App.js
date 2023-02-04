import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignUpform from "./components/signUpform";
import Header from "./components/header";
import Sumnumbers from "./components/Sumnumbers";
import Taskscreen from "./components/taskcreen";
import Testcom from "./components/countercomponent";
import Photos from "./components/photos";
import Highordercomponent from "./components/HOC";
import Samplerenderprops from "./components/samplerenderprops";
const App =()=>{
  const Testapp =Highordercomponent(()=>{
    return <div>Test App</div>
  });
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<h1>This is on Home page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact page</h1>} />
          <Route path={"/about"} element={<h1>This is on About page</h1>} />
          <Route path={"/signup"} element={<SignUpform />}>
            <Route path={"sum"} element={<Sumnumbers />} />
          </Route>
          <Route path={"/task"} element={<Taskscreen />} />
          <Route path={"/count"} element={<Testcom />} />
          <Route path={"/photo"} element={<Photos />} />
          <Route path={"/test"} element={<Testapp />} />
          <Route path={"/sample"} element={<Samplerenderprops />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

