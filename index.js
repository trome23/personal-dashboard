fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=S1b4bEGNT4tRS7aoerHUBbn7USA2bUiSHZ475KDWtlc')
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.full);
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.querySelector('#author-name').textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNjIwNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzIyNjU1NDU&ixlib=rb-1.2.1&q=85')`
        document.querySelector('#author-name').textContent = "By: Jay Mantri"
    })

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('#crypto').innerHTML = `<img src = "${data.image.small}"> <span>${data.name}</span>`
    })
    .catch(err => console.error(err))