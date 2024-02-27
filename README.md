# Chuckle Checklist

A web app that allows you to keep track of jokes that you have and haven't told, built in React, and using json-server to host the data. 

### Steps to Run

This web app requires the use of the [json-server](https://github.com/typicode/json-server) package, and is known to work with version 0.17.4
- To install that version specifically, you can use `npm install -g json-server@0.17.4` in the terminal

The JSON database for this web app can be found at [chuckle-api](https://github.com/ztrouy/chuckle-api). By default, this database is expected to be found at localhost on port 8088.
- When in the directory of this file in the terminal, you can use `json-server database.json -p 8088` to host the database with json-server

After hosting the json-server
- (On first use) When in the directory of this app in the terminal, use `npm install`
- When in the directory of this app in the terminal, use `npm run dev`
- Navigate to the link produced by the terminal in your browser

### Adding a Joke

To add a joke, simply type a new joke into the text input field, then click the Submit button. Newly added jokes will default to being untold.

### Choosing if a Joke was Told or Not

To move a joke between untold and told, click the smiley face icon next to the text of the joke. You can swtich a joke from untold to told, or told to untold

### Deleting a Joke

To remove a joke from the list, click the trash can icon next to the text of the joke. This cannot be undone

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
