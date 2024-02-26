import { useState } from "react"
import { addNewJokeToDB } from "../../services/jokeService.jsx"
import "./AddJoke.css"

export const AddJoke = ({ refreshJokes }) => {
    const [newJoke, setNewJoke] = useState("")

    const submitJoke = async () => {
        await addNewJokeToDB(newJoke)
        setNewJoke("")
        refreshJokes()
    }
    
    return (<>
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
    </>)
}