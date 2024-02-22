import { useState } from "react"
import "./App.css"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  
  return <div className="joke-add-form"> 
  <input
    className="joke-input"
    type="text"
    placeholder="New One Liner"
    onChange={event => {
      setNewJoke(event.target.value)
    }}
  />
  </div>
}
