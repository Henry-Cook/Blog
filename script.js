
function postsPage(){
    var removeHeading, showPosts, lowerPx, footer;

    removeHeading = document.getElementById('mainHeading').classList.toggle('hide');
    showPosts = document.getElementById('wrapper').classList.toggle('hide');
    lowerPx = document.getElementById('nav').classList.toggle('navPaddingLowerPx');
    footer = document.getElementById('foot').classList.toggle('hide');
};

function middleBtn(){
    removeHeading = document.getElementById('mainHeading').classList.toggle('hide');
    showPosts = document.getElementById('wrapper').classList.toggle('hide');
    lowerPx = document.getElementById('nav').classList.toggle('navPaddingLowerPx');
    footer = document.getElementById('foot').classList.toggle('hide');
};


//var likeBtn = document.getElementById('likeButton');
//var likes = document.getElementById('score');
var count = 0;

function likeCounter(){
    var likes = document.getElementById('likes');
    count =+ 1;
    likes.innerHTML = count;
}