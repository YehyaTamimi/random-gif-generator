const loadGif = (src) =>{
    const gif = document.querySelector(".gif");
    gif.src = src;
}

const getGif = () => {
    let url = "https://api.giphy.com/v1/gifs/random?api_key=efbQJ2FVk77f5z9vAPWHQfz5JAp9x2eH&tag=&rating=pg-13"
    fetch(url)
    .then(response => {
        if (response.ok) {
            console.log(response)
            loadGif("");
            return response.json();
        }
        return new Error("error loading gif");
    })
    .then(data => {
        return data["data"]["images"]["original"]["url"]
    })
    .then(image => {
        const container = document.querySelector(".container");
        container.classList.add("add");
        loadGif(image);
    })
    .catch(error => {
        console.log(error)
    });
}


let btn = document.querySelector(".generate")

btn.addEventListener('click', getGif);