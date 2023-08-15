const discordProject = document.querySelector(".Project_links div.discord a")
const twitterProject = document.querySelector(".Project_links div.twitter a")

const discordDivProject = document.querySelector(".Project_links div.discord")
const twitterDivProject = document.querySelector(".Project_links div.twitter")


discordDivProject.addEventListener("click",()=>{
    discordProject.click()
})

twitterDivProject.addEventListener("click",()=>{
    twitterProject.click()
})



const AmbushTwitter = document.querySelector(".Ambush_links div.twitter a")
const AmbushDiscord = document.querySelector(".Ambush_links div.discord a")
const AmbushEmail = document.querySelector(".Ambush_links div.email a")

const AmbushTwitterdiv = document.querySelector(".Ambush_links div.twitter")
const AmbushDiscorddiv = document.querySelector(".Ambush_links div.discord")
const AmbushEmaildiv = document.querySelector(".Ambush_links div.email")

AmbushTwitterdiv.addEventListener("click",()=>{
    AmbushTwitter.click()
})

AmbushDiscorddiv.addEventListener("click",()=>{
    AmbushDiscord.click()
})

AmbushEmaildiv.addEventListener("click",()=>{
    AmbushEmail.click()
})


