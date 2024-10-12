require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "debsaikia03",
    "id": 143481057,
    "node_id": "U_kgDOCI1Y4Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/143481057?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/debsaikia03",
    "html_url": "https://github.com/debsaikia03",
    "followers_url": "https://api.github.com/users/debsaikia03/followers",
    "following_url": "https://api.github.com/users/debsaikia03/following{/other_user}",
    "gists_url": "https://api.github.com/users/debsaikia03/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/debsaikia03/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/debsaikia03/subscriptions",
    "organizations_url": "https://api.github.com/users/debsaikia03/orgs",
    "repos_url": "https://api.github.com/users/debsaikia03/repos",
    "events_url": "https://api.github.com/users/debsaikia03/events{/privacy}",
    "received_events_url": "https://api.github.com/users/debsaikia03/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Debangshu Saikia",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2023-08-29T05:45:41Z",
    "updated_at": "2024-10-01T13:44:47Z"
  }



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {

  res.send('SaikiaDebangshu')
})

app.get('/login', (req, res) => {

    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {

    res.send('<h2>Backend</h2>')
})

app.get('/github', (req, res) => {

    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`)
})