//initialize the game
//situate the ships on the map
//start game
//while situating the ships need to check that they have at least 1 square space between them
//When situating the ships need to set them up one by one
//When one ship is situated user press button and goes to the next one untill all the ships are done
//Need to generate computer's ships on the map
//Need to put link on fontawesome for missing fire sign
const fieldCont = document.querySelector(".game-field")
const actionFld = document.querySelector(".action-field")
const controllsPlace = document.querySelector(".controlls")
const infoContainer = document.querySelector(".info-container")
const shipSchema = {Battleship: [4, 1],
                    Cruiser: [3, 2],
                    Submarine: [2, 3],
                    Destroyer: [1, 4]

}
// Variable for storing last successful hit
let lastHit


const playerField = {
a: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
b: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
c: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
d: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
e: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
f: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
g: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
h: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
i: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
j: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"]
} 

const actionField = {
    a: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    b: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    c: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    d: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    e: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    f: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    g: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    h: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    i: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"],
    j: [" _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |", " _ |"]
    } 

//playerField[liters[ind]]

const liters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

function represent(field){
    //console.clear()

    console.log(
        `    0   1   2   3   4   5   6   7   8   9 `)

    console.log(
        `    _   _   _   _   _   _   _   _   _   _ `)

    for (let ind = 0; ind<liters.length; ind++){
    console.log(
        `${liters[ind]} |${field[liters[ind]][0]}${field[liters[ind]][1]}${field[liters[ind]][2]}${field[liters[ind]][3]}${field[liters[ind]][4]}${field[liters[ind]][5]}${field[liters[ind]][6]}${field[liters[ind]][7]}${field[liters[ind]][8]}${field[liters[ind]][9]}`
    )
}
}


represent(playerField)

const numOfShips = {

}

console.log(playerField)

//input your ship on the field (Args are 1: the field 2: numerical coordinate (0-9) 3: literal coordinate (a-j))
const setUpShip = (field, x, y) => {
    field[y][x] = "[_]|"
}

// setUpShip(playerField, 5, "d")
// setUpShip(playerField, 5, "e")
// setUpShip(playerField, 5, "f")
// represent(playerField)


// const hit = (field, x, y) => {

//     if (field[y][x] == "[_]|"){
//         field[y][x] = "[x]|"
//     } else if (field[y][x] == " _ |"){
//         field[y][x] = " O |"
//     } else {
//         console.log("Not valid input!")
//     }
// }

// hit(playerField, 5, "d")
// hit(playerField, 5, "d")
// hit(playerField, 6, "g")
// hit(playerField, 6, "j")
// hit(playerField, 6, "g")
// represent(playerField)


const generateFld = () => {

    const placeShip = function(div, j, i) {

        if(playerField[liters[j-1]][i-1] == " _ |"){
            div.style.backgroundColor = "#635666"
            setUpShip(playerField, i-1, liters[j-1])
        }
    }


    // need checker for existing ships
    // refresh the game field in console
    represent(playerField)

    for (let j=0; j<=liters.length; j++) {
        for (let i=0; i<=10; i++) {
        const div = document.createElement('div')
        
        div.style.height = "1rem"
        div.style.width = "1rem"
        div.style.display = "inline-block"
        if (j==0) {
            if (i !==0){
            div.innerHTML = `<h6 class="horizontal-headers gameFld-headers">${i}</h6>`
            div.style.display = "flex"
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            // div.style.border = "solid 1px black"
            div.style.marginRight = "2px"
            div.style.marginLeft = "1px"
            }
            
        }
        else if (i==0) {
            div.innerHTML = `<h6 class="vertical-headers gameFld-headers">${liters[j-1].toUpperCase()}</h6>`
            div.style.display = "flex"
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
        } else {
        div.style.border = "solid 1px black"
        div.style.marginRight = "1px"
        div.style.backgroundColor = "#9ED5C5"
        div.classList.add("square-pf")
        div.setAttribute('id', `pf-j${j-1}i${i-1}`)
        //event listener for situating the ships



        // div.addEventListener('click', () => {
        //     if (playerField[liters[j-1]][i-1] == " _ |"){
        //         div.style.backgroundColor = "#635666"
        //         setUpShip(playerField, i-1, liters[j-1])
        //     }
        

        //     // need checker for existing ships
        //     // refresh the game field in console
        //     represent(playerField)
        // })


        div.addEventListener("click", function(){
            placeShip(div, j, i)
        })




        }
        fieldCont.appendChild(div)
        }
    }
    const headers = document.querySelectorAll(".gameFld-headers")
    headers.forEach((header) => {
        header.style.marginTop = "0"
        header.style.marginBottom = "0"
})
}


const generateActionFld = () => {
    for (let j=0; j<=liters.length; j++) {
        for (let i=0; i<=10; i++) {
        const div = document.createElement('div')
        
        div.style.height = "1rem"
        div.style.width = "1rem"
        div.style.display = "inline-block"
        if (j==0) {
            if (i !==0){
            div.innerHTML = `<h6 class="horizontal-headers gameFld-headers">${i}</h6>`
            div.style.display = "flex"
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            // div.style.border = "solid 1px black"
            div.style.marginRight = "2px"
            div.style.marginLeft = "1px"
            }
            
        }
        else if (i==0) {
            div.innerHTML = `<h6 class="vertical-headers gameFld-headers">${liters[j-1].toUpperCase()}</h6>`
            div.style.display = "flex"
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
        } else {
        div.style.border = "solid 1px black"
        div.style.marginRight = "1px"
        div.style.backgroundColor = "#9ED5C5"
        div.setAttribute('id', `af-j${j-1}i${i-1}`)
        div.classList.add("square-af")
        //event listener for situating the ships
        // div.addEventListener('click', () => {
        //     if (actionField[liters[j-1]][i-1] === "[_]|"){
        //         div.style.backgroundColor = "red"
        //         actionField[liters[j-1]][i-1] = "[x]|"
        //     } else if (actionField[liters[j-1]][i-1] === " _ |"){
        //         actionField[liters[j-1]][i-1] = " o |"
        //         //div.style.backgroundColor = "#635666"
        //         div.innerHTML = "<h6 style='margin: 0.2rem .3rem'>X</h6>"
        //         //setUpShip(actionField, i-1, liters[j-1])
        //     }
        

        //     // need checker for existing ships
        //     // refresh the game field in console
        //     represent(actionField)
        // })
        }
        actionFld.appendChild(div)
        }
    }
    const headers = document.querySelectorAll(".gameFld-headers")
    headers.forEach((header) => {
        header.style.marginTop = "0"
        header.style.marginBottom = "0"
})
}
// const check = (field, x, y) => {
//     field[liters[y]][x] = " Y |"
//     represent(field)
// }
const situateShip = (field, lenOfShip) => {
    // Function for verification that cells where it is planned to situate ships are not occupied and for situating ships after that 
    console.log("SituateShip method starts")
    console.log(field[liters[9]])
    console.log(field[liters[10]])
    // const shipPos = ["[_]"]
    console.log(field[liters[0]][0])
    console.log(field[liters[0]][9])

    const xPos = Math.floor(Math.random()*(field[liters[0]].length-(lenOfShip-1)))
    const yPos = Math.floor(Math.random()*(field[liters[0]].length-(lenOfShip-1)))
    //const yPos = y
    console.log(xPos, yPos)
    // const vertical = (Math.random()>=0.5)? 1:0
    //console.log("vertical", vertical )
    const ranNum = Math.floor(Math.random()*field[liters[0]].length)
    if (Math.random()>0.5) {
        // setUpShip = (field, x, y)
        // create a check for empty cells and space around
        // go ahead and check if the initial cell of the ship is empty
        // check if the cell prior to the initial cell is empty if the initial cell not the edge of the field
        // check cells on the right and on the left from the cell where the ship is to be placed to be empty if they're not situated on the edge of the game field. 
        console.log(`ranNum = ${ranNum}`)
        console.log(`yPos = ${yPos}`)
        // Checking there are no ships when ship is positioned close to "1" line
        if (yPos === 0) {
            console.log("First condition")
            if (ranNum === 0) {
                
                for (let i=yPos; i<(yPos + lenOfShip+1); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum+1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }


            } else if (ranNum === 9) {
                for (let i=yPos; i<(yPos + lenOfShip+1); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum-1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum-1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            } else {
                for (let i=yPos; i<(yPos + lenOfShip+1); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum-1] !== " _ |" || field[liters[i]][ranNum+1] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum-1]}, ${field[liters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            }
        } 
        // Checking that there are no ships in case when ship is situated close to "10" line of the field
        if ((yPos + lenOfShip) === 10) {
            console.log("Second condition")
            // If ship is situated close to "1" line of the field
            if (ranNum === 0) {
                for (let i=yPos-1; i<(yPos + lenOfShip); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum+1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            // If ship is situated close to "10" line of the field
            } else if (ranNum === 9) {
                for (let i=yPos-1; i<(yPos + lenOfShip); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum-1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum-1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            // If ship is situated somewhere between line "1" and "10" not inclusive.
            } else {
                for (let i=yPos-1; i<(yPos + lenOfShip); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum-1] !== " _ |" || field[liters[i]][ranNum+1] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum-1]}, ${field[liters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }

        // Check if there are no ships when ship is planned to be situated in the middle of the field  between "A" and "J" field 

        console.log(yPos + lenOfShip)
        console.log(field[liters[yPos + lenOfShip]])

        if (yPos > 0 && (yPos + lenOfShip) <= 9) {
            console.log("Third condition")
            if (ranNum === 0) {
                for (let i=yPos-1; i<(yPos + lenOfShip+1); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum+1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            } else if (ranNum === 9) {
                for (let i=yPos-1; i<(yPos + lenOfShip+1); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum-1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum-1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            } else {
                for (let i=yPos-1; i<(yPos + lenOfShip+1); i++){
                    if(field[liters[i]][ranNum] !== " _ |" || field[liters[i]][ranNum-1] !== " _ |" || field[liters[i]][ranNum+1] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[i]][ranNum]}, ${field[liters[i]][ranNum-1]}, ${field[liters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }


        // Positioning process if all the checks passed
        for (let i=yPos; i<(yPos + lenOfShip); i++){
            field[liters[i]][ranNum] = "[_]|"
        }

    } else {

        // Checks when ships positioned horizontally
        console.log(`ranNum = ${ranNum}`)
        console.log(`xPos = ${xPos}`)

        // Check for empty cells when ships positioned on line "A"
 
        if(ranNum === 0){
            console.log("Technical message function line 0")

            if(xPos === 0) {
                for (let i = xPos; i < (xPos + lenOfShip +1); i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }else if(xPos + lenOfShip === 9){
                for (let i = (xPos-1); i < (xPos + lenOfShip+1); i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                        }
                }
            } else {
                for (let i = (xPos-1); i < (xPos + lenOfShip +1); i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }

        // Check for empty cells when ships positioned on line "J"

        if(ranNum === 9){
            console.log("Technical message function line 9")

            if(xPos === 0) {
                for (let i = xPos; i < xPos + lenOfShip +1; i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum-1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum-1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }else if((xPos + lenOfShip+1) === 9){
                    for (let i = xPos-1; i < xPos + lenOfShip +1; i++){
                        if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum-1]][i] !== " _ |"){
                            console.log("Cells are not empty. Try positioning again.")
                            console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum-1]][i]}`)
                            return situateShip(field, lenOfShip)
                            }
                    }
            } else {
                for (let i = (xPos-1); i < (xPos + lenOfShip +1); i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum-1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum-1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }

        // Check for empty cells when ships positioned between lines "A" and "J" not inclusive

        if(ranNum > 0 && ranNum < 9){
            console.log("Technical message function lines between 0 and 9")

            if(xPos === 0) {
                for (let i = xPos; i < (xPos + lenOfShip +1); i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum-1]][i] !== " _ |" || field[liters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum-1]][i]}, ${field[liters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }else if((xPos + lenOfShip) === 9){
                    for (let i = (xPos-1); i < (xPos + lenOfShip+1); i++){
                        if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum-1]][i] !== " _ |" || field[liters[ranNum+1]][i] !== " _ |"){
                            console.log("Cells are not empty. Try positioning again.")
                            console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum-1]][i]}, ${field[liters[ranNum+1]][i]}`)
                            return situateShip(field, lenOfShip)
                            }
                    }
            } else {
                console.log("when ship is situated in the middle")
                for (let i = (xPos-1); i < (xPos + lenOfShip +1); i++){
                    if(field[liters[ranNum]][i] !== " _ |" || field[liters[ranNum-1]][i] !== " _ |" || field[liters[ranNum+1]][i] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[liters[ranNum]][i]}, ${field[liters[ranNum-1]][i]}, ${field[liters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }

        console.log("It's horizontal")
        for (let i=xPos; i<(xPos + lenOfShip); i++){
             field[liters[ranNum]][i] = "[_]|"
        }
    }
    represent(field)
}

// Check that field is empty

const fieldEmpty = (field) => {
    for (let i=0; i<liters.length; i++){
        for (let j=0; j<field[liters[i]].length; j++){
            if (field[liters[i]][j] !== " _ |") return false
        }
    }
    return true
}


// Check that at least one opponent's ship exist

const shipsExist = (field) => {
    for (let i=0; i<liters.length; i++){
        for (let j=0; j<field[liters[i]].length; j++){
            if (field[liters[i]][j] === "[_]|") return true
        }
    }
    return false
}


const placeShips = (field) => {
    if (fieldEmpty(field)){
        for (let key in shipSchema){
            for (let i = 0; i<shipSchema[key][1];i++){
                situateShip(field, shipSchema[key][0])
            }
        }
    } else {
        console.log("Field is not empty")
        return false
    }

}



const initGame = () => {
    //Here user should be prompted to situate ships
    //number of ships will be checked and whole correctness of ship situation is checked here
    //Computer's ships situation is generated here as well
}


// game
// game field for user's action
// when user click


//Need function for positioning user's ships and storing them in the varialbe after pressing the button - start placing ships on the screen

// Need function for 

// Need function for verifying that ships are exists that takes params field to check after each other's turn



// Render the fields

const render = (field) => {
    let selector
    if (field === playerField) {
        selector = "pf"
    } else {
        selector = "af"
    }
    for (let j=0; j<liters.length; j++){
        for (let i=0; i<field[liters[j]].length; i++){
            if (field[liters[j]][i] === "[x]|"){
                document.getElementById(`${selector}-j${j}i${i}`).style.backgroundColor = "red"
            } else if (field[liters[j]][i] === " O |"){
                document.getElementById(`${selector}-j${j}i${i}`).innerHTML = "<h6 style='margin: 0.2rem .3rem'>X</h6>"
            }
        }
    }

}



// Need function for computer's shooting


const shoot = (field) => {
    setTimeout(3000)
    const x = Math.floor(Math.random() * 10)
    const y = Math.floor(Math.random() * 10)

    // Create function to verify that 
    if (field[liters[y]][x] === " _ |"){
        field[liters[y]][x] = " O |"
        // if check for last ship passed
        lastHit = undefined
    } else if(field[liters[y]][x] === "[_]|"){
        field[liters[y]][x] = "[x]|"
        // If that wasn't the last ship's cell
        lastHit = field[liters[y]][x]
        if (shipsExist(playerField)){
            shoot(field)
        }else{
            console.log("Game over")
            gameover()
        }
    } else {
        shoot(field)
    }
    represent(field)
    render(field)
    shipsExist(playerField)
}

const gameOn = true

const gameover = () => {
    const infoField = document.querySelector(".info-messages")
    const information = document.createElement('h1') 
    information.classList

    information.innerText = "Game Over"
    infoField.appendChild(information)
    infoContainer.appendChild(infoField)
    //remove event listener from action field
    // const actionFieldElements = document.querySelectorAll(".square-af")
    // actionFieldElements.forEach(el => el.removeEventListener("click", userActionHandler))
        // for (let j=0; j<liters.length; j++){
        //     for (let i=0; i<actionField[liters[j]].length; i++){
        //         const div = document.getElementById(`af-j${j}i${i}`)
        //         div.removeEventListener('click', function(){
        //             userActionHandler(div, j, i)
        //         })
        //     }
        // }
    return true
}


const userShoot = () => {
    // Adding functionality and logic to actionField for user's interaction

    const userActionHandler = (div, j, i) => {
        if (actionField[liters[j]][i] === "[_]|"){
            div.style.backgroundColor = "red"
            actionField[liters[j]][i] = "[x]|"
            if (!shipsExist(actionField)){
                console.log("Game over")
                gameover()
            } else {
                console.log("Keep on playing!")
            }
            represent(actionField)
        } else if (actionField[liters[j]][i] === " _ |"){
            actionField[liters[j]][i] = " o |"
            div.innerHTML = "<h6 style='margin: 0.2rem .3rem'>X</h6>"
            represent(actionField)
            shoot(playerField)
        }
    }
 
    for (let j=0; j<liters.length; j++){
        for (let i=0; i<actionField[liters[j]].length; i++){
            const div = document.getElementById(`af-j${j}i${i}`)
            div.addEventListener('click', function(){
                userActionHandler(div, j, i)
            })
        }
    }
}




const battle = () => {
    if (Math.random()>0.5){
        shoot(playerField)
    }
    userShoot()
}



// Check that around hit ship there are other cells containing ship if not message destroyed should appear
const readyForBattle = () => {
    const button = document.createElement('ul')
    const buttonReady = document.createElement('li')
    buttonReady.style.height = "1.5rem"
    buttonReady.style.width = "3rem"
    buttonReady.style.border = "black solid 1px"
    buttonReady.style.borderRadius = "10%"
    buttonReady.style.textAlign = "center"
    buttonReady.style.backgroundColor = "orange"
    buttonReady.style.display = "inline-block"

    buttonReady.innerText = "Ready"
    buttonReady.addEventListener('click', () => {
        buttonReady.classList.add("switch-off")
        battle()
        
    })
    button.appendChild(buttonReady)
    controllsPlace.appendChild(button)
}

const game = () => {

    generateFld()
    generateActionFld()
    placeShips(actionField)
    readyForBattle()


}
game()

//Check for ships -> store them to an object with coordinates Then run check for those coordinates and if ship is destroyed give out message that ship is destroyed and put crosses around it.