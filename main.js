const bodyElement = document.querySelector("body")

const buttonElement = document.createElement("button")
bodyElement.append(buttonElement)
buttonElement.append(" remove ")

const mainElement = document.createElement("main")
bodyElement.append(mainElement)
const imageElement = document.createElement("img")
imageElement.src = "https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png"
imageElement.alt = "Boston Celtics"
mainElement.append(imageElement)

const linkElement = document.createElement("a")
linkElement.href = "https://www.nba.com/celtics/video/originals/filmstudy-walker-uconn-061220"
linkElement.target = "_blank"
linkElement.append(" Boston Celtics")
mainElement.append(linkElement)

buttonElement.addEventListener("click", function() {
    mainElement.remove()
})

const input = document.createElement("input")
input.id = "input"
input.type = "text"
input.placeholder = "CSS ID"
bodyElement.append(input)
const cssButton = document.createElement("button")
cssButton.append("Remove CSS")
bodyElement.append(cssButton)
cssButton.addEventListener("click", function () {
    const inputValue = document.getElementById("input").value
    const removedElement = document.querySelector(inputValue)
    removedElement.remove()
})

const textInput = document.createElement("input")
textInput.id = "textInput"
textInput.type = "text"
textInput.placeholder = "text input"
bodyElement.append(textInput)
const createButton = document.createElement("button")
createButton.append("Create")
bodyElement.append(createButton)
createButton.addEventListener("click", function() {
    const textInputValue = document.getElementById("textInput").value
    const addedElement = document.createElement("p")
    bodyElement.append(addedElement)
    addedElement.append(textInputValue)
})

