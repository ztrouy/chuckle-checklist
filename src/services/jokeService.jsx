export const addNewJokeToDB = async (newJoke) => {
    const jokeObject = {
        text: newJoke,
        told: false
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObject)
    }

    await fetch("http://localhost:8088/jokes", postOptions)
}

export const getAllJokes = async () => {
    const response = await fetch("http://localhost:8088/jokes")
    const jokes = await response.json()

    return jokes
}

export const editJoke = async (editedJoke) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedJoke)
    }

    await fetch(`http://localhost:8088/jokes/${editedJoke.id}`, putOptions)
}

export const removeJokeFromDB = async (jokeToDelete) => {
    const deleteOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeToDelete)
    }

    await fetch(`http://localhost:8088/jokes/${jokeToDelete.id}`, deleteOptions)
}