import { useEffect, useState } from "react"
import { JokeList } from "./JokeList.jsx"
import "./Lists.css"

export const JokesList = ({ allJokes, refreshJokes }) => {
    const [untoldJokes, setUntoldJokes] = useState([])
    const [toldJokes, setToldJokes] = useState([])
    
    useEffect(() => {
        const currentUntoldJokes = allJokes.filter(joke => joke.told === false)
        setUntoldJokes(currentUntoldJokes)

        const currentToldJokes = allJokes.filter(joke => joke.told === true)
        setToldJokes(currentToldJokes)
    }, [allJokes])

    return (
        <div className="joke-lists-container">
            <JokeList jokesArray={untoldJokes} title={"Untold"} refreshJokes={refreshJokes} key={1} />
            <JokeList jokesArray={toldJokes} title={"Told"} refreshJokes={refreshJokes} key={2} />
        </div>
    )
}