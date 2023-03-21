const getBackgroundImage = () => {
    axios(
      "https://api.unsplash.com/photos/OzfD79w8ptA?client_id=S6DxpAPoeI8DKpklD1dZiCRCQYIpVN99pOzwcG_I8Uc"
    )
      .then(function (data) {
        return data;
      })
      .then(function (jsonData) {
      
        document.getElementById("imgCreator").innerText = `The background image is made by ${jsonData.data.user.name}`
        document.body.style.backgroundImage = `url(${jsonData.data.urls.regular})`;
      })
      .catch(function (error) {
        console.error(error);
        document.body.style.backgroundColor = "red";
      });
  };
getBackgroundImage()

setInterval(function timeCounter() {
    const dateObj = new Date();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let time =
      "Time: " + hours + ":" + minutes + ":" + seconds + " " + "Date:" + date + "/" + month + "/" + year;
    document.getElementById("timer").textContent = time;
  }, 1000);


function weatherApi() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
    function getWeather(position) {
      axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=074cad748f31de4caf9d02f53d0268e9&units=metric`
      )
        .then(function (data) {
          return data;
        })
        .then(function (jsonData) {
            document.getElementById("areaName").textContent = "Area: " + jsonData.data.name;
            document.getElementById("weatherType").textContent = "Weather: " + jsonData.data.weather[0].description;
            document.getElementById("temperature").textContent = "Temperature: " + jsonData.data.main.temp.toFixed(0) + "°C" 
        })
        .catch(function (error) {
            document.getElementById("areaName").textContent = "An error occured (" + error.response.status + ")"
        });
    }
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
weatherApi()

function getRandomRecipe(){
    axios.get(
    "https://api.spoonacular.com/recipes/random?apiKey=dc06f45fe9ec4b0a9525a19997a5589c&number=1"
    ).then(function(data){
        return data
        }).then(function (jsonData){
            document.getElementById("foodApi").innerHTML = `<img src=${jsonData.data.recipes[0].image}>` + jsonData.data.recipes[0].instructions;
        }).catch(function(error){
            document.getElementById("foodApi").textContent = "An error occured (" + error.response.status + ")"
        })
     
}
getRandomRecipe()

function boredApi(){
    axios.get(
        "https://www.boredapi.com/api/activity"
    ).then(function(data){
        return data
    }).then(function(jsonData){
        document.getElementById("activity").textContent = jsonData.data.activity
    }).catch(function(error){
        document.getElementById("activity").textContent = "An error occured (" + error.response.status + ")"
    })
}
boredApi()


function getName(){
    const name = "Caspar";
    return name;
}