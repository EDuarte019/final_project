var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await response.json();
    monster = data.results[0].name
    const [...monsters] = data.results;
    // .then(res=>res.json())
    // .then(data => console.log(data))
    // jokeData = await jokeResponse.json();
    
    console.log(monsters);
    res.render('index', 
    { 
      title: 'Home',
      data: monsters
    }
    );
    
  } catch (error) {
    console.log(error);
  }
  

});
router.get('/', async function(req, res, next) {
  try {
    const response = await fetch("https://swapi.co/api/people/1")
    const datas = await response.json();
    star = datas.results[1].name
    const [...star] = data.results;
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

router.get('/:id', (req, res) => {
  // req.params.id
  console.log();
});

module.exports = router;
