import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
 

function App() {
  return (
    <>
      <header>
        <MyNav fixedTop />
      </header>
      <main>
        <Welcome marginTop="80px" />
        <AllTheBooks marginTop="20px" />
      </main>
      <MyFooter />
    </>
  )
}

export default App
