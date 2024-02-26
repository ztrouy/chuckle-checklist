import { Joke } from "../../jokes/Joke.jsx"
import "./Lists.css"

export const JokeList = ({ jokesArray, title, refreshJokes }) => {
    
    return (
        <div className="joke-list-container">
            <h2>
                {title}
                <span className={(title === "Untold" ? "untold-count" : "told-count")}>
                    {jokesArray.length}
                </span>
            </h2>
            <hr color="#ea3788"></hr>
            <ul>
                {jokesArray.map(jokeObj => {
                    return <Joke joke={jokeObj} refreshJokes={refreshJokes} key={jokeObj.id}/>
                })}
            </ul>
        </div>
    )
}