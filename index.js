// document.getElementById("count-el").innerText = 5
// comment ctrl + k + c


// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// initialize count as 0
// listen for clicks on button using onclick
// increment for count when button is clicked
// change the count-el in html to reflect new count
let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let addToString = " " + count + " - "
    saveEl.textContent += addToString
    countEl.textContent = 0
    count = 0
}
// to fix spaces can use textContent instead of innerText