//Fetch request to get random background image of nature 
fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=S1b4bEGNT4tRS7aoerHUBbn7USA2bUiSHZ475KDWtlc')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.querySelector('#author-name').textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        //default image set in case of failed request
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNjIwNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzIyNjU1NDU&ixlib=rb-1.2.1&q=85')`
        document.querySelector('#author-name').textContent = "By: Jay Mantri"
    })

//Fetch request to get Dogecoin info
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#crypto-top').innerHTML = `<img src = "${data.image.small}"> <span>${data.name}</span>` //<==creating html elements to hold crypto data
        document.querySelector('#crypto').innerHTML += `
            <p class="crypto-numbers">💰: $${data.market_data.current_price.usd}</p>
            <p class="crypto-numbers">☝️: $${data.market_data.high_24h.usd}</p>
            <p class="crypto-numbers">👇: $${data.market_data.low_24h.usd}</p>
        `
        })
    .catch(err => console.error(err))

function dynamicTime() {
    let date = new Date()
    let currentTime = date.toLocaleString("en-us", {timeStyle:'short'})
    document.querySelector("#time").textContent = currentTime
}

setInterval(dynamicTime, 1000)

const APIkey = keys.API_key

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=` + APIkey)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data);
            const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.querySelector("#weather").innerHTML = `
                <img src = ${iconURL}>
                <p class = "weather-temp">${Math.round(data.main.temp)}°</p>
                <p class = "weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});

// http://openweathermap.org/img/wn/{weathericonID}@2x.png

