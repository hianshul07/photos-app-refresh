import { SearchBar } from "./components/SearchBar"

function App() {

  const handleSubmit = (term) => {
    console.log(`Do a search with ${term}`);
  }

  return (
    <div>
     {/* TODO  */}

      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}

export default App
