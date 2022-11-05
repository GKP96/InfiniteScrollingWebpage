
import './App.css';
import Navbar from './components/navbar';
import { useState } from 'react';
import useBookSearch from './components/useBookSearch';
function App() {
  const [query,setQuery] = useState('');
  const [pageNumber,setPageNumber] = useState(1);
  const {loading,error,books,hasMore}=useBookSearch(query,pageNumber);
function handleSearch(e){
  setQuery(e.target.value);
  setPageNumber(1);
}
  return (
    <div>
     <Navbar/>
     <h5 id='srh'>Search bar</h5>
     <input id='gau' type='text' value={query} onChange={handleSearch}></input>
     {books.map(book=>{
      return <div key={book}>{book}</div>

     })}
     <div>{loading && 'loading ...'}</div>
     <div>{error && 'error'}</div>
    </div>
  );
}

export default App;
