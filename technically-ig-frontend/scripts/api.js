const BACKEND_URL = 'http://localhost:3000';
const POSTS_URL = `${BACKEND_URL}/posts`;
let newPostUl;
let newPostLi;
let ul = document.querySelector('ul');
let li = document.querySelector('li');
let allPosts;
let newProfileDiv;
let newImageDiv;
let newActionDiv;
let newCommentDiv;
let profileName;
let addImage;
let actionLinks;
let newLikesDiv;
let formatter;

/* Provides the JSON data from Rails Post Objects */
function fetchPosts() {
    return fetch(POSTS_URL).then(response => response.json()).then(
        function(postCollector){
            allPosts = postCollector;
            return allPosts;
        })
}

function createPosts() {
    newPostUl = document.body.appendChild(document.createElement('ul-posts'))

    allPosts.forEach(post => {
        console.log(post['url'])
        let divCard = document.body.appendChild(document.createElement('div.card'))
        divCard.style = 'width: 18rme;'

        let divImage = divCard.appendChild(document.createElement('img'))
        divImage.className = 'card-img-top'
        divImage.src = post['url']
        divImage.alt = post['caption']
        divImage.width = '150'
        divImage.height = '300'

        let imgCaption = divImage.appendChild(document.createElement('p.card-text'))
        imgCaption.innerHTML = post['caption']
    })
}




    /*
        //postBuilder()
        cardFormat()
        // Profile Div 
        profileName.innerText = "Profile Name"

        // Image Div
        addImage.src = post['url']
        addImage.alt = post['caption']
        addImage.width = '600'
        addImage.height = '500'

        // Comments div

        // Likes Div
        newLikesDiv.innerText = `${post['likes']} likes`
    })
    
} */

function postBuilder() {
    // Post List items
    newPostLi = newPostUl.appendChild(document.createElement('li-posts'))

    // profile div
    newProfileDiv = newPostLi.appendChild(document.createElement('div-profile'))
    profileName = newProfileDiv.appendChild(document.createElement('p'));

    // Image Div
    newImageDiv = newProfileDiv.appendChild(document.createElement('div-image'));
    addImage = newImageDiv.appendChild(document.createElement('img'));
    
    // Actions Div
    newActionDiv = newImageDiv.appendChild(document.createElement('div-action'));
    let actionController = newActionDiv.appendChild(document.createElement('p'));
    actionController.innerText = " Like | Comment | Send | Saved";
  
    // Comments Div
    newCommentDiv = newActionDiv.appendChild(document.createElement('div-comments'));

    // Likes Div
    newLikesDiv = actionController.appendChild(document.createElement('p'));
}


function cardFormat() {
    // using Jquery write a method to perform the following
    //Create <div class="card" style ="width: 18rem;">
    let divCard = document.body.appendChild(document.createElement('div.card'))
    divCard.style = 'width: 18rme;'
    // Create  <img src="post["url"] class="card-img-top" alt="post["caption"]>
    let divImage = divCard.appendChild(document.createElement('img.card-img-top'))
    divImage.src = post['url']
    divImage.alt = post['caption']
    divImage.width = '300'
    divImage.height = '200'
    //create <p class="card-text"> post["caption"]</p>
    let imgCaption = divImage.appendChild(document.createElement('p.card-text'))
    imgCaption.innerHTML = post['caption']
}


 ///Users/austinjohnson/Development/Projects/technically-ig/technically-ig-backend/assets/picture1.jpg