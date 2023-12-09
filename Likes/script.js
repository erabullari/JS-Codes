
var likeCounts = []; 

function like(idjaPostit) {
    var currentLikes= parseInt(document.getElementById(idjaPostit).innerText)  

    currentLikes++;
    
    likeCounts[idjaPostit] = currentLikes;
   
    document.getElementById(idjaPostit).innerText = currentLikes;
}

