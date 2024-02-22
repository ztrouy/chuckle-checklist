import { useEffect, useState } from "react"
import "./App.css"
import { addNewJokeToDB, editJoke, getAllJokes } from "./services/jokeService.jsx"
import stevePic from "./assets/steve.png"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

  const refreshJokes = () => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
    })
  }
  
  const submitJoke = async () => {
    await addNewJokeToDB(newJoke)
    setNewJoke("")
    refreshJokes()
  }

  useEffect(() => {
    refreshJokes()
  }, [])

  useEffect(() => {
    const currentUntoldJokes = allJokes.filter(joke => joke.told === false)
    setUntoldJokes(currentUntoldJokes)

    const currentToldJokes = allJokes.filter(joke => joke.told === true)
    setToldJokes(currentToldJokes)
  }, [allJokes])
  
  return (
  <div className="app-container">
    <div className="app-heading">
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
      <h1 className="app-heading-text">
        Chuckle Checklist
      </h1>
    </div>
    <h2>Add Joke</h2>
    <hr color="#ea3788"></hr>
    <div className="joke-add-form"> 
      <input
        className="joke-input"
        type="text"
        placeholder="New One Liner"
        value={newJoke}
        onChange={event => {
          setNewJoke(event.target.value)
        }}
      />
      <button
        className="joke-input-submit"
        onClick={submitJoke}
      >
        Submit
      </button>
    </div>
    <div className="joke-lists-container">
      <div className="joke-list-container">
        <h2>
          Untold
          <span className="untold-count">
            {untoldJokes.length}
          </span>
        </h2>
        <hr color="#ea3788"></hr>
        <ul>
          {untoldJokes.map(joke => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
                <div>
                  <button 
                    className="joke-list-action-toggle"
                    onClick={() => {
                      joke.told = true
                      editJoke(joke).then(refreshJokes)
                    }}
                  >
                    <i className="fa-regular fa-face-laugh" />
                  </button>
                </div>
              </li>)
          })}
        </ul>
      </div>
      <div className="joke-list-container">
        <h2>
          Told
          <span className="told-count">
            {toldJokes.length}
          </span>
        </h2>
        <hr color="#ea3788"></hr>
        <ul>
          {toldJokes.map(joke => {
            return (
            <li className="joke-list-item" key={joke.id}>
              <p className="joke-list-item-text">{joke.text}</p>
              <div>
                  <button 
                    className="joke-list-action-toggle"
                    onClick={() => {
                      joke.told = false
                      editJoke(joke).then(refreshJokes)
                    }}
                  >
                    <i className="fa-regular fa-face-meh" />
                  </button>
                </div>
            </li>)
          })}
        </ul>
      </div>
    </div>
  </div>
  )
}
