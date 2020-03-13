
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

/*function contactPage(){
    var contact, bodyHide;
    contact = document.getElementById('contactForm').classList.toggle('hide');
    bodyHide = document.getElementById('bodyHide').classList.toggle('hide');
};
*/