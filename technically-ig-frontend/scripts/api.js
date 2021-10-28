const BACKEND_URL = 'http://localhost:3000';
const POSTS_URL = `${BACKEND_URL}/posts`;
let allPosts;

/* Provides the JSON data from Rails Post Objects */0-00
function fetchPosts() {
    return fetch(POSTS_URL).then(response => response.json()).then(
        function(postCollector){
            allPosts = postCollector;
            return allPosts;
        })
}

function createPosts() {
    /* Provides the url for each post as li in an Ul */
    let newUl = document.body.appendChild(document.createElement('ul'));
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    allPosts.forEach(post => {
        let newLi = ul.appendChild(document.createElement('li'))
        newLi.innerText = "Account Name"
        let newImg = newLi.appendChild(document.createElement('img'))
        newImg.src = post['url']
    })
}

/* Function to take post URL's and embed them as images */