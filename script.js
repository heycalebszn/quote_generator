const quote = document.getElementById("quote");
const author = document.getElementById("author");
const category = document.getElementById("category")
/* fetching the quote api */
const api_url = "https://api.quotable.io/random";

// Applying the api 
async function getquote(url){
    const response = await fetch(url)
    var data = await response.json();
    console.log(data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    category.innerHTML = data.tags;
}

// Calling the api function
getquote(api_url);

// for the tweet to work

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --by " + author.innerHTML, "Tweet Window", "width=600", "height=300");
}