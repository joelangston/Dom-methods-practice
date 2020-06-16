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






