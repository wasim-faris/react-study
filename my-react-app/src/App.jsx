import { useContext, createContext } from "react";


 const themeContext = createContext();

 
function App(){
  const theme = "dark"
  return (
    <themeContext.Provider value = {theme}>
      <Home/>
    </themeContext.Provider>
  )
}

function Home(){
  return <Profile/>
}

function Profile(){
  return <Theme/>
}

function Theme(){
  const theme = useContext(themeContext)
  return (
    <h1>theme is {theme}</h1>
  )
}
export default App;