import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"



function App() {
  return (
    <div className="container">

      <SideBar />
      <div className="narrow">
        <TopBar />
      </div>
      
    </div>
  )
}

export default App
