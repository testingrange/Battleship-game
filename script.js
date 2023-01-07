
const fieldCont = document.querySelector(".game-field")
const actionFld = document.querySelector(".action-field")
const controllsPlace = document.querySelector(".controlls")
const infoContainer = document.querySelector(".info-container")
const shipSchema = { Battleship: [4, 1],
                    Cruiser: [3, 2],
                    Submarine: [2, 3],
                    Destroyer: [1, 4]
}

// Storing user's field 
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

// Storing computer's field
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

// PlayerField[letters[ind]]
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]


// Function for representation of the field in the console
function represent(field){
    console.log(
        `    0   1   2   3   4   5   6   7   8   9 `)
    console.log(
        `    _   _   _   _   _   _   _   _   _   _ `)
    for (let ind = 0; ind<letters.length; ind++){
    console.log(
        `${letters[ind]} |${field[letters[ind]][0]}${field[letters[ind]][1]}${field[letters[ind]][2]}${field[letters[ind]][3]}${field[letters[ind]][4]}${field[letters[ind]][5]}${field[letters[ind]][6]}${field[letters[ind]][7]}${field[letters[ind]][8]}${field[letters[ind]][9]}`
    )
}
}


represent(playerField)
const numOfShips = {
}


// Input your ship on the field (Args are 1: the field 2: numerical coordinate (0-9) 3: literal coordinate (a-j))
const setUpShip = (field, x, y) => {
    field[y][x] = "[_]|"
}


const generateFld = () => {
    // need checker for existing ships
    // refresh the game field in console
    represent(playerField)
    for (let j=0; j<=letters.length; j++) {
        for (let i=0; i<=10; i++) {
        const div = document.createElement('div')
        div.style.height = "1rem"
        div.style.width = "1rem"
        div.style.display = "inline-block"
        div.classList.add("sq")
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
            div.innerHTML = `<h6 class="vertical-headers gameFld-headers">${letters[j-1].toUpperCase()}</h6>`
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
        // div.addEventListener("click", placeShip)
        }
        fieldCont.appendChild(div)
        }
    }
    placeShip()
    const headers = document.querySelectorAll(".gameFld-headers")
    headers.forEach((header) => {
        header.style.marginTop = "0"
        header.style.marginBottom = "0"
})
}


const generateActionFld = () => {
    for (let j=0; j<=letters.length; j++) {
        for (let i=0; i<=10; i++) {
        const div = document.createElement('div')
        
        div.style.height = "1rem"
        div.style.width = "1rem"
        div.style.display = "inline-block"
        div.classList.add("sq")
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
            div.innerHTML = `<h6 class="vertical-headers gameFld-headers">${letters[j-1].toUpperCase()}</h6>`
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
        //     if (actionField[letters[j-1]][i-1] === "[_]|"){
        //         div.style.backgroundColor = "red"
        //         actionField[letters[j-1]][i-1] = "[x]|"
        //     } else if (actionField[letters[j-1]][i-1] === " _ |"){
        //         actionField[letters[j-1]][i-1] = " o |"
        //         //div.style.backgroundColor = "#635666"
        //         div.innerHTML = "<h6 style='margin: 0.2rem .3rem'>X</h6>"
        //         //setUpShip(actionField, i-1, letters[j-1])
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
const check = (field, x, y) => {
    field[letters[y]][x] = " Y |"
    represent(field)
}
const shipPlacementHandler = (event) => {
    // div, j, i
    const div = event.target
    console.log(div)
    const divId = div.id
    console.log(divId)
    const i = divId[6]
    const j = divId[4]
    if(playerField[letters[j]][i] == " _ |"){
        div.style.backgroundColor = "#635666"
        setUpShip(playerField, i, letters[j])
    } else if (playerField[letters[j]][i] == "[_]|"){
        playerField[letters[j]][i] = " _ |"
        div.style.backgroundColor = "#9ED5C5"
    }
}


const placeShip = () => {
    // Adding functionality and logic to actionField for user's interaction
    for (let j=0; j<letters.length; j++){
        for (let i=0; i<playerField[letters[j]].length; i++){
            const div = document.getElementById(`pf-j${j}i${i}`)
            div.addEventListener('click', shipPlacementHandler)
        }
    }
}


// Function for verification that cells where it is planned to situate ships are not occupied and for situating ships after that 
const situateShip = (field, lenOfShip) => {
    
    console.log("SituateShip method starts")
    console.log(field[letters[9]])
    console.log(field[letters[10]])
    // const shipPos = ["[_]"]
    console.log(field[letters[0]][0])
    console.log(field[letters[0]][9])

    const xPos = Math.floor(Math.random()*(field[letters[0]].length-(lenOfShip-1)))
    const yPos = Math.floor(Math.random()*(field[letters[0]].length-(lenOfShip-1)))
    //const yPos = y
    console.log(xPos, yPos)
    // const vertical = (Math.random()>=0.5)? 1:0
    //console.log("vertical", vertical )
    const ranNum = Math.floor(Math.random()*field[letters[0]].length)
    if (Math.random()>0.5) {
        if (yPos === 0) {
            if (ranNum === 0) {
                
                for (let i=yPos; i<(yPos + lenOfShip+1); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum+1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }


            } else if (ranNum === 9) {
                for (let i=yPos; i<(yPos + lenOfShip+1); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum-1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum-1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            } else {
                for (let i=yPos; i<(yPos + lenOfShip+1); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum-1] !== " _ |" || field[letters[i]][ranNum+1] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum-1]}, ${field[letters[i]][ranNum+1]}`)
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
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum+1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            // If ship is situated close to "10" line of the field
            } else if (ranNum === 9) {
                for (let i=yPos-1; i<(yPos + lenOfShip); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum-1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum-1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            // If ship is situated somewhere between line "1" and "10" not inclusive.
            } else {
                for (let i=yPos-1; i<(yPos + lenOfShip); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum-1] !== " _ |" || field[letters[i]][ranNum+1] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum-1]}, ${field[letters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }

        // Check if there are no ships when ship is planned to be situated in the middle of the field  between "A" and "J" field 

        console.log(yPos + lenOfShip)
        console.log(field[letters[yPos + lenOfShip]])

        if (yPos > 0 && (yPos + lenOfShip) <= 9) {
            console.log("Third condition")
            if (ranNum === 0) {
                for (let i=yPos-1; i<(yPos + lenOfShip+1); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum+1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            } else if (ranNum === 9) {
                for (let i=yPos-1; i<(yPos + lenOfShip+1); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum-1] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum-1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }

            } else {
                for (let i=yPos-1; i<(yPos + lenOfShip+1); i++){
                    if(field[letters[i]][ranNum] !== " _ |" || field[letters[i]][ranNum-1] !== " _ |" || field[letters[i]][ranNum+1] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[i]][ranNum]}, ${field[letters[i]][ranNum-1]}, ${field[letters[i]][ranNum+1]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }


        // Positioning process if all the checks passed
        for (let i=yPos; i<(yPos + lenOfShip); i++){
            field[letters[i]][ranNum] = "[_]|"
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
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }else if(xPos + lenOfShip === 9){
                for (let i = (xPos-1); i < (xPos + lenOfShip+1); i++){
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                        }
                }
            } else {
                for (let i = (xPos-1); i < (xPos + lenOfShip +1); i++){
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum+1]][i]}`)
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
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum-1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum-1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }else if((xPos + lenOfShip+1) === 9){
                    for (let i = xPos-1; i < xPos + lenOfShip +1; i++){
                        if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum-1]][i] !== " _ |"){
                            console.log("Cells are not empty. Try positioning again.")
                            console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum-1]][i]}`)
                            return situateShip(field, lenOfShip)
                            }
                    }
            } else {
                for (let i = (xPos-1); i < (xPos + lenOfShip +1); i++){
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum-1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum-1]][i]}`)
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
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum-1]][i] !== " _ |" || field[letters[ranNum+1]][i] !== " _ |"){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum-1]][i]}, ${field[letters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }else if((xPos + lenOfShip) === 9){
                    for (let i = (xPos-1); i < (xPos + lenOfShip+1); i++){
                        if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum-1]][i] !== " _ |" || field[letters[ranNum+1]][i] !== " _ |"){
                            console.log("Cells are not empty. Try positioning again.")
                            console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum-1]][i]}, ${field[letters[ranNum+1]][i]}`)
                            return situateShip(field, lenOfShip)
                            }
                    }
            } else {
                console.log("when ship is situated in the middle")
                for (let i = (xPos-1); i < (xPos + lenOfShip +1); i++){
                    if(field[letters[ranNum]][i] !== " _ |" || field[letters[ranNum-1]][i] !== " _ |" || field[letters[ranNum+1]][i] !== " _ |" ){
                        console.log("Cells are not empty. Try positioning again.")
                        console.log(`${field[letters[ranNum]][i]}, ${field[letters[ranNum-1]][i]}, ${field[letters[ranNum+1]][i]}`)
                        return situateShip(field, lenOfShip)
                    }
                }
            }
        }
        console.log("It's horizontal")
        for (let i=xPos; i<(xPos + lenOfShip); i++){
             field[letters[ranNum]][i] = "[_]|"
        }
    }
    represent(field)
}


// Check that field is empty
const fieldEmpty = (field) => {
    for (let i=0; i<letters.length; i++){
        for (let j=0; j<field[letters[i]].length; j++){
            if (field[letters[i]][j] !== " _ |") return false
        }
    }
    return true
}


// Check that at least one opponent's ship exist
const shipsExist = (field) => {
    for (let i=0; i<letters.length; i++){
        for (let j=0; j<field[letters[i]].length; j++){
            if (field[letters[i]][j] === "[_]|") return true
        }
    }
    return false
}


// Check that field is empty if true -> place ships
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


// Render the fields
const render = (field) => {
    let selector
    if (field === playerField) {
        selector = "pf"
    } else {
        selector = "af"
    }
    for (let j=0; j<letters.length; j++){
        for (let i=0; i<field[letters[j]].length; i++){
            if (field[letters[j]][i] === "[x]|"){
                document.getElementById(`${selector}-j${j}i${i}`).style.backgroundColor = "red"
            } else if (field[letters[j]][i] === " O |"){
                document.getElementById(`${selector}-j${j}i${i}`).innerHTML = "<h6 style='margin: 0.2rem .3rem'>X</h6>"
            }
        }
    }
}


// Info message which turn is it now
const turn = (player) => {
    if (document.querySelector("h3")){
        document.querySelector("h3").remove()
    }
    const infoField2 = document.querySelector(".info-message2")
    const turn = document.createElement("h3") 
    turn.innerText = `${player} turn`
    infoField2.appendChild(turn)
}



// Need function for computer's shooting


const shoot = (field) => {
    turn("Computer's")
    stopUserActions()
    setTimeout(() => {
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        // Create function to verify that
        if (field[letters[y]][x] === " _ |"){
            field[letters[y]][x] = " O |"
            // if check for last ship passed
            lastHit = undefined
            turn("User's")
            userShoot()
        } else if(field[letters[y]][x] === "[_]|"){
            field[letters[y]][x] = "[x]|"
            // If that wasn't the last ship's cell
            lastHit = field[letters[y]][x]
            if (shipsExist(playerField)){
                shoot(field)
            }else{
                console.log("Game over")
                gameover("Computer")
            }
        } else {
            shoot(field)
        }
        represent(field)
        render(field)
        shipsExist(playerField)
    }, 300)
}



const fieldReset = (field) => {
    for (let i=0; i<letters.length; i++){
        for (let j=0; j<field[letters[i]].length; j++){
            if (field[letters[i]][j] != " _ |"){
                field[letters[i]][j] = " _ |"
            }
        }
    }
}

// Actual functionality to be added to actionField active elements
const userActionHandler = (event) => {
    const div = event.target
    const divId = div.id
    const i = divId[6]
    const j = divId[4]

    if (actionField[letters[j]][i] === "[_]|"){
        div.style.backgroundColor = "red"
        actionField[letters[j]][i] = "[x]|"
        if (!shipsExist(actionField)){
            console.log("Game over")
            gameover("User")
        }
        represent(actionField)
    } else if (actionField[letters[j]][i] === " _ |"){
        actionField[letters[j]][i] = " o |"
        div.innerHTML = "<h6 style='margin: 0.2rem .3rem'>X</h6>"
        represent(actionField)
        shoot(playerField)
    }
}

const stopUserActions = () => {
    // Stop accepting user action signals
    // Removing event Listeners from all the actionField active pieces
    for (let j=0; j<letters.length; j++){
        for (let i=0; i<actionField[letters[j]].length; i++){
            const div = document.getElementById(`af-j${j}i${i}`)
            div.removeEventListener('click', userActionHandler)
        }
    }
}

const gameover = (player) => {
    if (document.querySelector("h3")){
        document.querySelector("h3").remove()
    }
    const infoField = document.querySelector(".info-messages")
    const information = document.createElement('h3') 
    information.innerText = "Game Over"
    infoField.appendChild(information)
    const infoField2 = document.querySelector(".info-message2")
    const winner = document.createElement('h3') 
    winner.innerText = `${player} wins!`
    infoField2.appendChild(winner)
    stopUserActions()
    const button = document.querySelector('ul')
    const buttonRestart = document.createElement('li')
    buttonRestart.style.height = "1.5rem"
    buttonRestart.style.width = "3rem"
    buttonRestart.style.border = "black solid 1px"
    buttonRestart.style.borderRadius = "10%"
    buttonRestart.style.textAlign = "center"
    buttonRestart.style.backgroundColor = "orange"
    buttonRestart.style.display = "inline-block"
    buttonRestart.innerText = "Restart"
    buttonRestart.addEventListener('click', () => {
        buttonRestart.classList.add("switch-off")
        const elems = document.querySelectorAll('.sq')
        elems.forEach(element => element.remove())
        fieldReset(actionField)
        fieldReset(playerField)
        document.querySelector('ul').remove()
        const elements = document.querySelectorAll('h3')
        elements.forEach(el => el.remove())
        game()
    })
    button.appendChild(buttonRestart)
    return true
}



const userShoot = () => {
    // Adding functionality and logic to actionField for user's interaction
    for (let j=0; j<letters.length; j++){
        for (let i=0; i<actionField[letters[j]].length; i++){
            const div = document.getElementById(`af-j${j}i${i}`)
            div.addEventListener('click', userActionHandler)
        }
    }
}



// battle function for deciding who is starting first
const battle = () => {
    if (Math.random()>0.5){
        shoot(playerField)
    } else{
        turn("User")        
    }
    userShoot()
}

const removeEvntListenerFromActField = () => {
    for (let j=0; j<letters.length; j++){
        for (let i=0; i<playerField[letters[j]].length; i++){
            const div = document.getElementById(`pf-j${j}i${i}`)
            div.removeEventListener('click', shipPlacementHandler)
        }
    }
}

// Check that around hit ship there are other cells containing ship if not message destroyed should appear
const readyForBattle = () => {
    const button = document.createElement('ul')
    const buttonReady = document.createElement('li')
    buttonReady.classList.add("ready")
    buttonReady.style.height = "1.5rem"
    buttonReady.style.width = "3rem"
    buttonReady.style.border = "black solid 1px"
    buttonReady.style.borderRadius = "10%"
    buttonReady.style.textAlign = "center"
    buttonReady.style.backgroundColor = "orange"
    buttonReady.style.display = "inline-block"
    buttonReady.innerText = "Ready"
    buttonReady.addEventListener('click', () => {
        document.querySelector(".ready").remove()
        removeEvntListenerFromActField()
        battle()
    })
    button.appendChild(buttonReady)
    controllsPlace.appendChild(button)
}

const showMessage2 = (message, timeOut) => {
    setTimeout(() => {
        if (document.querySelector("h3")){
            document.querySelector("h3").remove()
        }
        const infoField = document.querySelector(".info-messages")
        const information = document.createElement('h3') 
        information.innerText = `${message}`
        infoField.appendChild(information)
    }, timeOut)
}

const placeYourShipsMessage = () => {
        showMessage2("Place your ships", 1000)
        showMessage2("1 x Battleship 4 cells", 3000)
        showMessage2("2 x Cruisers 3 cells", 6000)
        showMessage2("3 x Submarines 2 cells", 9000)
        showMessage2("4 x Destroyers 1 cell", 12000)
        showMessage2("Good luck!", 15000)
}

const game = () => {
    placeYourShipsMessage()
    generateFld()
    generateActionFld()
    placeShips(actionField)
    readyForBattle()
}

game()
