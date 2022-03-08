// Selecting Elements 

let searchInput=document.querySelector("#search")
let searchButton=document.querySelector("#searchButton")
let description=document.querySelector("#description")

let temp=document.querySelector("#temparature")
let cityName= document.querySelector('#cityName')



let getData={
    apiKey:"2d0ce929b4bb32e24bcac0deb1fd9e09",
    url:`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${this.apiKey}`,
    fetchData:async function(city="Hyderabad"){
        try{
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
            .then(async(response)=>response.json())
            .then(async(data)=>{
            await updateUi(data.main.temp,data.name,data.weather[0].description,data.main.humidity)
        })
          
        }
        catch(error){
            console.log("oops")
            console.log(error)
        }
    }
}

getData.fetchData("Hyderabad")

searchButton.addEventListener("click",()=>{
    console.log(getData.url)
    let regEx=/([a-zA-Z]){3,10}/
    if(regEx.test(searchInput.value)){
        getData.fetchData(searchInput.value)
    }

})

function updateUi(temps,citys,descriptions,humiditys){
    temp.innerHTML=Math.round((parseFloat(temps)-273.17),2)+'°C'
    cityName.innerHTML="CityName:"+citys
    description.innerHTML="Description:" +descriptions

}
