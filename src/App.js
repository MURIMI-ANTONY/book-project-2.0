//importing necessary library, hooks and components'
import React ,{useState}from "react"
import './App.css';
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Display from "./Display";

function App() {
  //State to store the query search and the books returned by fetch
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  //function to fetch books's data from the public API
  const handleSearch = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBnqmLNDyOL2tU1oTTq2tFpNatcCdmh0IM`)
      .then(response => {
        
        return response.json();
      })
      .then(data => {
        
        setBooks(data.items)
      })
      .catch(error => console.error('Error fetching books'));
  };
   //Parent component rendering necessary children components' with props passed.
  return (

    <main className="App">
      <Nav/>
      <Header/>
      <Search books={books} setQuery={setQuery} query={query} handleSearch={handleSearch} />
      <Display books={books}/>
      <Footer/>
    </main>
  );
}

export default App;
