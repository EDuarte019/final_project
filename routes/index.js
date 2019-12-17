var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    monster = data.results[0].name
    const [...monsters] = data.results;
  
    
    console.log(monsters);
    res.render('index', 
    { 
      title: 'Evelyn Duarte',
      name: "Name of Pokemons",
      data: monsters
    }
    );
    
  } catch (error) {
    console.log(error);
  }
});
router.get('/star', async function(req, res, next) {
  try {
    const response = await fetch("https://swapi.co/api/people")
    const data = await response.json();
    star = data.results[1].name;
    const [...star] = data.results;
    console.log(data);
   
    
    console.log(star);
    res.render('index', 
    { 
      title: 'Home',
      data: star
    }
    );
    
  } catch (error) {
    console.log(error);
  }
  

});
router.get('/', async function(req, res, next) {
  try {
    const response = await fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme")
    const datass = await response.json();
    meme = datass.results[1].name;
    const [...meme] = data.results;
    // .then(res=>res.json())
    // .then(data => console.log(data))
    // jokeData = await jokeResponse.json();
    
    console.log(star);
    res.render('index', 
    { 
      title: 'Home',
      data: star
    }
    );
    
  } catch (error) {
    console.log(error);
  }
  

});


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });

router.get('/:id', (req, res) => {
  // req.params.id
  console.log();
});

module.exports = router;
