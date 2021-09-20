fetch('https://api.unsplash.com/photos/random?client_id=S1b4bEGNT4tRS7aoerHUBbn7USA2bUiSHZ475KDWtlc')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
    })