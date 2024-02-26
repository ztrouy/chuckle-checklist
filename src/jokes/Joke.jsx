import { changeJokeToldState, removeJokeFromDB } from "../services/jokeService.jsx"
import "./Jokes.css"

export const Joke = ({joke, refreshJokes}) => {
    const deleteButton = (element) => {
        return (
          <div>
            <button 
              className="joke-list-action-delete"
              onClick={() => {
                removeJokeFromDB(element)
                .then(refreshJokes)
              }}
            >
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        )
      }
    
      const swapToldButton = (element) => {
        return (
          <div>
            <button 
              className="joke-list-action-toggle"
              onClick={() => {
                changeJokeToldState(element)
                .then(refreshJokes)
              }}
            >
              <i className="fa-regular fa-face-laugh" />
            </button>
          </div>
        )
      }
    
    return (
        <li className="joke-list-item" key={joke.id}>
            <p className="joke-list-item-text">{joke.text}</p>
            {deleteButton(joke)}
            {swapToldButton(joke)}
        </li>
    )
}