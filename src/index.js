console.log('%c HI', 'color: firebrick')

//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// 1. connect to server and pass it to json using fetch
function getAllAnimals(){
  console.log ('getAllAnimals1')
    fetch("https://dog.ceo/api/breeds/image/random/4")
     .then((response) => response.json())
     .then((animalPic => animalPic.message.forEach(dogURL => renderOneAnimal(dogURL))));
}
function getAllBreeds(){
  console.log ('getAllBreeds')
    fetch('https://dog.ceo/api/breeds/list/all')
     .then((res) => res.json())
     .then((animalBreed => Object.keys(animalBreed.message).map(dogBreed => renderBreedAnimal (dogBreed)))); 
}
//2. Create the card where the animals will show.

function renderOneAnimal (dogURL){
    console.log ("render1 animal has been hit")
    let animalCard = document.createElement ('li')
    animalCard.class = 'card'
    animalCard.innerHTML= `<img src= ${dogURL}>`
    
    //3. Add animal card to the DOM
    document.querySelector ('#dog-image-container').appendChild(animalCard);    
}
function renderBreedAnimal (dogBreed){
    //console.log ("render breed animal has hit")
    let breedCard = document.createElement ('li')
    breedCard.class = 'breedCard'
    breedCard.textContent = `${dogBreed}`
    let sectionText= document.querySelector('#dog-breeds').appendChild(breedCard)
    breedCard.addEventListener('click', (e) => {
      e.target.style.color='red';
    })
    console.log (sectionText)
}



//challenge4


//1. get dropDown and remove the default names when we click it. 

const dropDown = document.querySelector('#breed-dropdown');

function hideWordsDropClicked (){

  dropDown.addEventListener('change', (e) => {
  removeAllChildNodes(document.querySelector('#dog-breeds')); 
  console.log ('hideWordsDropClicked hit')
  console.log (breedCard)
  wordBreedFirstLetter()

  document.querySelector ('#dog-image-container').appendChild.innerHTML;
})}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }}
//2. select the words in the array, and grab the first letter
//Object.keys(animalBreed.message).map(dogBreed => renderBreedAnimal (dogBreed)
let breedCard = document.createElement ('li')
function wordBreedFirstLetter () {
  fetch('https://dog.ceo/api/breeds/list/all')
     .then((res) => res.json())
     .then((animalBreed => Object.keys(animalBreed.message).map(dogBreed => {
      if (dogBreed.startsWith(dropDown.value)){
        console.log (`${dogBreed}`)
      
      let breedCard = document.createElement ('li')
      breedCard.class = 'breedCard'
      breedCard.textContent = `${dogBreed}`
      document.querySelector('#dog-breeds').appendChild(breedCard)
  
      }
     }))); 
  

}
// 
//4. Add that result to the Dom with query selector
//5. initialize render by calling the function initialize. 






//figure our a way to remove everything from the UL 
//add an event listener to the dropdown (change)
//grab event.target.value and filter by the letter (startsWith()) breeds.filter(breed => breed.startsWith(event.target.value)));
//append this new list dogs to the page (loop)

//4. initial render:get data and render the animals to the dom

function initialize(){
  getAllAnimals()
  getAllBreeds()
  hideWordsDropClicked ()
  wordBreedFirstLetter ()
 }
 initialize()