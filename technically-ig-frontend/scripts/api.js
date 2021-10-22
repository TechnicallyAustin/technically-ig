const BACKEND_URL = 'http://localhost:3000';
const POSTS_URL = `${BACKEND_URL}/posts`;
let allPosts;

function fetchPosts() {
    return fetch(POSTS_URL).then(response => response.json()).then(
        function(postCollector){
            allPosts = postCollector
            return allPosts
        })
}

