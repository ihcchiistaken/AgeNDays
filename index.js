 let birthYear = prompt("Enter Year")


function displayText(){

    let years = 2021 - parseInt(birthYear)

    let days = years * 365

    let message = "You are " + days + " days old"

    let p = document.getElementById("text")

    p.textContent = message
}

function clearText(){
    let p = document.getElementById("text")

    p.textContent = ""

}