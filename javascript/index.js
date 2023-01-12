
function updateTime(){
let losAngelesTime = document.querySelector("#los-angeles .time")
let losAngelesDate = document.querySelector("#los-angeles .date")
let losAngelesNow = moment().tz("America/Los_Angeles")
losAngelesDate.innerHTML=losAngelesNow.format("dddd, MMMM D, YYYY")
losAngelesTime.innerHTML=losAngelesNow.format("h:mm:ss [<small>]A[</small>]")

let buenosAiresTime = document.querySelector("#buenos-aires .time")
let buenosAiresDate = document.querySelector("#buenos-aires .date")
let buenosAiresNow = moment().tz("America/Argentina/Buenos_Aires")
buenosAiresDate.innerHTML=buenosAiresNow.format("dddd, MMMM D, YYYY")
buenosAiresTime.innerHTML=buenosAiresNow.format("h:mm:ss [<small>]A[</small>]")

let copenhagenTime = document.querySelector("#copenhagen .time")
let copenhagenDate = document.querySelector("#copenhagen .date")
let copenhagenNow = moment().tz("Europe/Copenhagen")
copenhagenDate.innerHTML=copenhagenNow.format("dddd, MMMM D, YYYY")
copenhagenTime.innerHTML=copenhagenNow.format("h:mm:ss [<small>]A[</small>]")
}

setInterval(updateTime, 1000)