import { lazy, Suspense, useState } from "react";

import Home from "./components/Home";

const About = lazy(()=> import("./components/About"));

const Profile = lazy(()=> import("./components/Profile"));

function App(){
  const [page, setPage] = useState("home");

  return (
    <div>
        <button onClick={()=> setPage("home")}>home</button>
          <button onClick={()=> setPage("about")}>about</button>
          <button onClick={()=> setPage("profile")}>profiile</button>

          {page=="home" && <Home/>}
          <Suspense fallback={<h1>loading</h1>}>
          {page=="about" && <About/>}
          {page =="profile" && <Profile/>}
          </Suspense>
    </div>

  )
}

export default App;