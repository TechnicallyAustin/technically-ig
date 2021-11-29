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

// Using the Provided JSON data from fetchPosts(), This function uses Jquery to structure the JSON data on the Page.
function createPosts() {
    newPostUl = document.body.appendChild(document.createElement('ul-posts'))

    // Iterates over each Post Model created in Rails. Creates a Div card to house the post info
    allPosts.forEach(post => {
        console.log(post['url'])
        let divCard = document.body.appendChild(document.createElement('div.card'))
        divCard.style = 'width: 18rme;'

        // Formats Picture and Assigns attributes to the img object
        let divImage = divCard.appendChild(document.createElement('img'))
        divImage.className = 'card-img-top'
        divImage.src = post['url']
        divImage.alt = post['caption']
        divImage.width = '600'
        divImage.height = '500'

        // Adds a small div, houses Liking posts and adding Comments
        let imgNav = divCard.appendChild(document.createElement('post.div'))
        let imgOptions = imgNav.appendChild(document.createElement('post.ul'))
        let optionList = imgOptions.appendChild(document.createElement('options.li'))


        // Need to list each array element as its own evnet listening item
        optionList.innerHTML = ['Heart', 'Comment', 'Send', 'Save']

        // Block item that displays the total number of likes


        // Creates a Div to store comments
        let postCommentDiv = optionList.appendChild(document.createElement('comment.div'))

            // The caption is the first displayed comment
        postCommentDiv.innerHTML = post['caption']
        

    })
}



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

