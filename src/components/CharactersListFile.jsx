import { useState, useEffect } from "react";
import CharacterComponent from "./CharacterFile";

function NavPage(propsData) {
  const { page, setPage } = propsData;

  return(
    <header className="d-flex justify-content-between align-items-center">
      {page > 1 &&  
        <button 
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page - 1)}
        >
          Page {page - 1}
        </button>
      }
      <p>Page: {page}</p>
      <button 
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
        >
        Page {page + 1}
      </button>
    </header>
  );
};

export default function CharacterListComponent() {
  const [characters, setCharactesrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharactesrs(data.results);
    };

    fetchData();  
  }, [page]);

  return(
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {
        loading ? <h1>Loading...</h1> : <div className="row">
        {
          characters.map((character) => {
            return(
              <div className="col-md-4" key={character.id} >
                <CharacterComponent character={character} />
             </div>
            );
          })
        }
       </div>
      }
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};