import CharacterComponent from "./components/CharacterFile";
import CharacterListComponent from "./components/CharactersListFile";

export default function App() {
  return(
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <CharacterListComponent />
    </div>
  );
};

