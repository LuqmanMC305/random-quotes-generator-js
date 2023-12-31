const apiURL = "https://api.quotable.io/random";


const button = document.getElementById('quoteButton');
const quotes = document.getElementById('quote');
const authors = document.getElementById('author')

let randomQuote;
let author;


function createQuote()
{

  fetch(apiURL)
    .then((response) =>
    {
        if(response.status === 200)
        {
            return response.json();
        }
        else
        {
            throw new Error("Failed to fetch a random quote. Code: " + response.status);
        }
    })
    .then((data) =>
    {
        randomQuote = data.content;
        author = data.author;

        quotes.innerHTML = randomQuote;
        authors.innerHTML = "-" + author + "-";
        

    
    })

    .catch((error) =>
    {
        console.error("Error: " + error.message);
    })

    

}


button.addEventListener('click', createQuote);

createQuote();


