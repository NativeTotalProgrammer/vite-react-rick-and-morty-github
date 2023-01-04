export default function CharacterComponent(propsData) {
  const { character } = propsData;

  return(
    <>
      <div className="text-center p-5">
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
        <p>{character.origin.name}</p>
      </div>
    </>
  );
};