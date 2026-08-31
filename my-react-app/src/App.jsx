import Usercontext from "./context/useContext"
import User from "./components/User"

function App(){
  const username = "wasim faris";

  return(
    <Usercontext.Provider value={username}>
      <User/>
    </Usercontext.Provider>
  )
}

export default App;