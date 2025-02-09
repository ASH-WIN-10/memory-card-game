import characters from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"

function App() {
    if (!characters) throw new Error("Failed to fetch characters")
    return (
        <div>
            <Header />
            <Cards characters={characters} />
        </div>
    )
}

export default App
