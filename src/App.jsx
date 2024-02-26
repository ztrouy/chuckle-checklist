import { useEffect, useState } from "react"
import "./App.css"
import { getAllJokes } from "./services/jokeService.jsx"
import { JokesList } from "./components/lists/JokesList.jsx"
import { Header } from "./components/header/Header.jsx"
import { AddJoke } from "./components/input/AddJoke.jsx"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])


  useEffect(() => {
    refreshJokes()
  }, [])


  const refreshJokes = () => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
    })
  }
  

  return (
    <div className="app-container">
      <Header />
      <AddJoke newJoke={newJoke} setNewJoke={setNewJoke} refreshJokes={refreshJokes} />
      <JokesList allJokes={allJokes} refreshJokes={refreshJokes} />
    </div>
  )
}
