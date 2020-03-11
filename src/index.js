document.addEventListener('DOMContentLoaded', function() {

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(res) { return res.json() })
        .then(function(imgsArray) {
            showImages(imgsArray.message)
        })
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(res) { return res.json() })
        .then(function(breedsArray) {

            showBreeds(Object.keys(breedsArray.message))
        })

    filter()


})

function showImages(array) {
    array.map(img => {
        addimg(img);
    })
}

function addimg(img) {
    let div = document.getElementById('dog-image-container')
    let image = document.createElement('img')
    image.src = img
    div.append(image)
}


function showBreeds(array) {
    array.map(breed => {
        addbreed(breed);
    })
}

function addbreed(breed) {
    let ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')

    li.innerText = breed
    ul.append(li)
    li.addEventListener('click', function() {
        li.style.color = "red"
    })
}


function filter() {
    let dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', function(e) {

        let letter = e.target.value
        let breedul = Array.from(document.getElementById('dog-breeds').children)
        for (let breed of breedul) {
            // debugger
            if (breed.innerText[0] !== letter) {
                breed.style = "display:none"
            }
        }
    })
}