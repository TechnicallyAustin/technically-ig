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
        postBuilder()

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

}

function postBuilder() {

    // Post List items
    newPostLi = newPostUl.appendChild(document.createElement('li-posts'))

    // profile div
    newProfileDiv = newPostLi.appendChild(document.createElement('div-profile'))
    profileName = newProfileDiv.appendChild(document.createElement('p'));

    // Image Div
    newImageDiv = newProfileDiv.appendChild(document.createElement('div-image'))
    addImage = newImageDiv.appendChild(document.createElement('img'))
    
    // Actions Div
    newActionDiv = newImageDiv.appendChild(document.createElement('div-action'))
    let actionController = newActionDiv.appendChild(document.createElement('p'))
    actionController.innerText = " Like | Comment | Send | Saved"
  
    // Comments Div
    newCommentDiv = newActionDiv.appendChild(document.createElement('div-comments'))
    

    // Likes Div
    newLikesDiv = actionController.appendChild(document.createElement('p'))
    

}














/*
function createPosts() {
 // Provides the url for each post as li in an Ul 
 let newUl = document.body.appendChild(document.createElement('ul'));
 let ul = document.querySelector('ul');
 let li = document.querySelector('li');


 allPosts.forEach(post => {
     newPostLi = ul.appendChild(document.createElement('li'));
     

     // Create a div for the user profile image source and account name 
       let newDiv = newLi.appendChild(document.createElement('div-card'))
       let title = newDiv.appendChild(document.createElement('p'))
       title.innerText = "Profile Name"
         

     // Img importing and Formatting 
     let newImg = newDiv.appendChild(document.createElement('img'));
     newImg.src = post['url'];
     newImg.alt = post['caption'];
     newImg.width = "600";
     newImg.height = "500";

     // Create a Div to hold likes, comments, sending, and Saving 
     let newPostDiv = newDiv.appendChild(document.createElement('div-post'))

     let newPostActions = newDiv.appendChild(document.createElement('div-actions'))

     newPostActions.innerText = "Like | Comment | Send"

     let newCommentDiv = newPostDiv.appendChild(document.createElement('div-comments'))

     newCommentDiv.innerText = "Comments Section"
 })
}
*/


/* Function to take post URL's and embed them as images, Also Formats images.*/

/* Function */