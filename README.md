# API app example

A basic API access point written in Node JS using Express.<br>
Description: an app that sends stored data when recieving a web request.

<details>
  <summary><h3>Content</h3></summary>
  
- [Installation](#installation)
- [Behaviour](#behaviour)
- [Usage Ideas](#usage-ideas)

</details>
<hr>

# Installation

1. Replace the mock data in `data.json` with your data.
2. Run `npm i`.
3. Start `index.js`.

# Behaviour

1. A user accesses the `/api` path of the app. (for example `http://localhost:8080/api`)
2. The app sends the data from `data.json` to the user in JSON format.

# Usage Ideas

- Check for a key or authentication password in the parameters of the url to limit access to the API.
- Add more paths based on your needs. (Might need to move the route handling (`router.get`) to separate files or folders)
- Add more JSON files based on your needs, or store data in variables as needed.

> [!TIP]
> For an example of a full API app with multiple paths, parameters, files and folders feel free to check out my [Url shortener](https://github.com/ElenaChes/Express-Js--URL-shortener).
