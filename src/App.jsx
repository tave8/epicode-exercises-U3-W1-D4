import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList" 
import booksList from "./data/books-scifi.json"


function App() {
  return (
    <>
      <header>
        <MyNav fixedTop />
      </header>
      <main>
        <Welcome marginTop="80px" />
        <BookList books={booksList} marginTop="20px" />
      </main>
      <MyFooter />
    </>
  )
}

export default App
