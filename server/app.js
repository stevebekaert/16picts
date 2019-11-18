const http = require('http');
const express = require('express');
const path = require('path');
const https = require('https')
const app = express();


const axios = require('axios')

const server = http.createServer(app);
let reactPath = path.join(__dirname, '../');
let nodePath = path.join(__dirname, '/')
const fetch = require("node-fetch");

server.listen(8080);

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    next();
});



/* characters : https://www.giantbomb.com/api/characters/?api_key=dce469af616144d408b3299fbc5084e8980edabd&limit=100&field_list=name,image&format=json */

app.get('/api/get', function(req, res) {
     https.get('https://www.giantbomb.com/api/games/?api_key=dce469af616144d408b3299fbc5084e8980edabd&limit=100&field_list=name,image,number_of_user_reviews&fitler=number_of_user_reviewsgt100&sort=number_of_user_reviews:asc&format=json', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data+=chunk;
        });

        resp.on('end', () => {
            console.log(data)
            res.send(data)
        });

    });

/****** END OF */
})

/** Class API Answer to create objects of Answers to push into an array */
class APIAnswer {
  constructor(name) {
    this.url = 'https://www.giantbomb.com/api/search/?api_key=dce469af616144d408b3299fbc5084e8980edabd&format=json&query="' + name + '"&resources=franchise'
    this.name = name;
  }

   getGame = (name) => {
     https.get(this.url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => { data+=chunk; });
      resp.on('end', () => {
        console.log()
        const JSONParsed = JSON.parse(data)
        const resultat = JSONParsed.results.filter(result => result.name === name);
          return resultat
      });
      resp.on('error', (error) => console.log(error))
    })
  }

  formatAnswer = (name, JSONAnswer) => {
    console.log("name", name)
    console.log("JSONAnswer", JSONAnswer)
    const JSONParsed = JSON.parse(JSONAnswer)
    const resultat = JSONParsed.results.filter(result => result.name === name);
    return resultat;
  }

}

app.get('/api/getGame', (req, res) => {
  const gameList = ["Mario", "Zelda", "Tomb Raider", "Tetris", "Mega man", "Mario Kart", "Snake", "Minecraft"]
  let newArray = []
  gameList.forEach(async game => {
    console.log("game", game)
    let gameObject = new APIAnswer(game);
    let result = await gameObject.getGame(game)
   /* let resultFiltered = gameObject.formatAnswer(game, result);*/
    newArray.push(result);
  })
  console.log(newArray)
  return newArray;
});




//Asynchronous fonction to get games.
async function getGames(game) {
  let response = await fetch('https://www.giantbomb.com/api/search/?api_key=dce469af616144d408b3299fbc5084e8980edabd&field_list=name,deck,image&format=json&query="' + game + '"&resources=franchise');
  let dataTemp = await response.json();
  let result = dataTemp.results.filter(result => result.name === game)
  /*console.log("result trouvé: ", result)
  console.log("data retournée:", data)
  console.log("Objet simple en position 0 :", result[0]) */
  return result;
};


app.get('/api/getAxios', async (req, res) => {
  
  const gameList = ["Mario", "The Legend of Zelda", "Tomb Raider", "Tetris", "Mega Man", "Mario Kart", "Snake", "Minecraft", "The Witcher", "Final Fantasy", "Halo"]

  const test = await gameList.map(async (game, key) => {
    //const element = {}
    const objetofElement = await getGames(game)
      /*.then(data => console.log(data))*/
      .then(data => {   
        return data[0] 
      })
      .catch(error => console.log(error))

      return await objetofElement
  })
  Promise.all(test).then((completed) => console.log(res.send(completed)))
});


let myGrid = ''

app.get('api/buildGrid', (req, res) => {
  myGrid = req.body
})

app.get('api/updateGrid', (req, res) => {
  myGrid = req.body;
  console.log('body', req.body)
  res.send(myGrid)
})


app.get('/api/getIGBD', function(req, res) {
axios({
  url: "https://api-v3.igdb.com/games",
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'user-key': '967190ce9370da2e8e6c06498f9baa13'
  },
  data: "fields name, involved_companies; search \"Halo\""
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });

})


app.get('/api/createGrid/', (req, res) => {
    const grid = () => {
        let grid = [];
        for (let x = 0; x < 40; x++){
          grid[x]= []
          for (let y = 0; y < 40; y++){
            grid[x][y] = 0;
          }
        }
        return grid
     }
     let myGrid = { grid : grid() }
     res.send(JSON.stringify(myGrid))
})


app.get('/api/updateGrid/:lat&:lng&:color', (req, res) => {
    
    const grid = () => {
        let grid = [];
        for (let x = 0; x < 40; x++){
          grid[x]= []
          for (let y = 0; y < 40; y++){
            grid[x][y] = 0;
          }
        }
        return grid
     }
     let lat = req.params.lat;
    let lng = req.params.lng;
    let color = req.params.lat;
    let myGrid = { grid: grid() }
    myGrid[lat][lng] = color;
    res.send(JSON.stringify(myGrid))
})

console.log(nodePath)