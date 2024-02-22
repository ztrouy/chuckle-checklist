import { useEffect, useState } from "react"
import "./App.css"
import { addNewJokeToDB, getAllJokes } from "./services/jokeService.jsx"
import stevePic from "./assets/steve.png"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

  const submitJoke = async () => {
    await addNewJokeToDB(newJoke)
    setNewJoke("")
  }

  useEffect(() => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
      
      const currentUntoldJokes = jokesArray.filter(joke => joke.told === false)
      setUntoldJokes(currentUntoldJokes)

      const currentToldJokes = jokesArray.filter(joke => joke.told === true)
      setToldJokes(currentToldJokes)
    })

  }, [submitJoke])
  
  return (
  <div className="app-container">
    <div className="app-heading">
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
    </div>
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
  </div>
  )
}
