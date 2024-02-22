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