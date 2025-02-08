import characters from "./fetchCharacters"

function App() {
    return (
        <div>
            <h1>Top 12 Anime Characters</h1>
            <ul>
                {characters?.map((character) => (
                    <li key={character.mal_id}>
                        <img src={character.image_url} alt={character.name} />
                        <p>{character.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
