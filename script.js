const DOMAIN = "https://comicvine.gamespot.com/api/";
const API_KEY = "35b9fcfad8457fe14de0144d69c23c67219e8fc3";
const baseURL = `${DOMAIN}?apikey=${API_KEY}&format=json`;


const superheroDesc = [
  {
    name: "Wonder Woman", description:"Princess Diana"
  },
  {
    name: "Flash", description:"Fastest Man Alive"
  },
  {
    name: "Superman", description:"Strongest man alive"
  },
  {
    name: "Mr. Fantastic", description:"Genius Intellect"
  },
  {
    name: "Harley Quinn", description:"Joker partner"
  },
  {
    name: "Wolverine", description:"Logan"
  },
  {
    name: "Spider-Man", description:"Web Slinger"
  },
  {
    name: "Doctor Strange", description:"Mystic Arts"
  },
  {
    name: "Captain America", description:"Americas Pride"
  },
  {
    name: "Batman", description:"Worlds Greatest Detective"
  },
  {
    name: "Hal Jordan", description:"Green Lantern"
  },
]

// const search = document.querySelector("form")

// search.addEventListener("submit", () => {

// })

// fetch(`${DOMAIN}?apikey=${API_KEY}&`)
//   .then((response) => {
//     console.log(response);
  
const showHero = (name) => {
  fetch(`${DOMAIN}?apikey=${API_KEY}&format=json`)