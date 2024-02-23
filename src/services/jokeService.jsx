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

export const changeJokeToldState = async (jokeToChange) => {
    if (jokeToChange.told === true) {
        jokeToChange.told = false
    } else {
        jokeToChange.told = true
    }

    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeToChange)
    }

    await fetch(`http://localhost:8088/jokes/${jokeToChange.id}`, putOptions)
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