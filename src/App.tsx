import { useState } from "react"
import characters from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"

function App() {
    const [score, setScore] = useState(0)

    if (!characters) throw new Error("Failed to fetch characters")
    return (
        <div>
            <Header score={score} />
            <Cards characters={characters} score={score} setScore={setScore} />
        </div>
    )
}

export default App
