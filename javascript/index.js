
function updateTime(){
    let losAngelesElement = document.querySelector ("#los-angeles")
    if(losAngelesElement){
        let losAngelesTime = losAngelesElement.querySelector("#los-angeles .time")
        let losAngelesDate = losAngelesElement.querySelector("#los-angeles .date")
        let losAngelesNow = moment().tz("America/Los_Angeles")
        losAngelesDate.innerHTML=losAngelesNow.format("dddd, MMMM D, YYYY")
        losAngelesTime.innerHTML=losAngelesNow.format("h:mm:ss [<small>]A[</small>]")
    }

    let buenosAiresElement = document.querySelector ("#buenos-aires")
    if(buenosAiresElement){
        let buenosAiresTime = buenosAiresElement.querySelector("#buenos-aires .time")
        let buenosAiresDate = buenosAiresElement.querySelector("#buenos-aires .date")
        let buenosAiresNow = moment().tz("America/Argentina/Buenos_Aires")
        buenosAiresDate.innerHTML=buenosAiresNow.format("dddd, MMMM D, YYYY")
        buenosAiresTime.innerHTML=buenosAiresNow.format("h:mm:ss [<small>]A[</small>]")
    }

    let copenhagenElement = document.querySelector ("#copenhagen")
    if(copenhagenElement){
        let copenhagenTime = copenhagenElement.querySelector("#copenhagen .time")
        let copenhagenDate = copenhagenElement.querySelector("#copenhagen .date")
        let copenhagenNow = moment().tz("Europe/Copenhagen")
        copenhagenDate.innerHTML=copenhagenNow.format("dddd, MMMM D, YYYY")
    copenhagenTime.innerHTML=copenhagenNow.format("h:mm:ss [<small>]A[</small>]")
    }
}


let cities = document.querySelector(".cities")

let citySelectDropdown = document.querySelector("#city-dropdown")

function changeCity(event){
    if(event){
        setInterval( newCityUpdate =>{
            let timeZone = event.target.value
            if (event.target.value === 'current'){
                timeZone = moment.tz.guess()
            }
            let currentTime =moment().tz(timeZone)
            cities.innerHTML= `
                <div class="city"><div>
                    <h2>
                        ${timeZone.replace("_", " ").split("/").pop()}
                    </h2>
                    <div class="date">${currentTime.format("dddd, MMMM D, YYYY")}</div>
                </div>
                <div class="time">${currentTime.format("h:mm:ss [<small>]A[</small>]")}</div>
            </div>
            <a href="/">All cities</a>`
        }, 100)
    }
}

citySelectDropdown.addEventListener("change", changeCity)

setInterval(updateTime, 100)
