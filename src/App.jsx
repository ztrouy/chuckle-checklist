import { useEffect, useState } from "react"
import "./App.css"
import { addNewJokeToDB } from "./services/jokeService.jsx"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")

  const submitJoke = async () => {
    await addNewJokeToDB(newJoke)
  }
  
  return <div className="joke-add-form"> 
  <input
    className="joke-input"
    type="text"
    placeholder="New One Liner"
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
}
