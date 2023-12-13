function removeCookie(element){
    document.getElementById('cookie').remove();
}
function message(element){
    alert('Loading wather report')
}



function toFehratOnChange(selectedOption) {
    // Check if the selected option is 'F'
    if (selectedOption === 'F') {
        // aksesoj temperaturen nepermjet clasave
        //per cdo loop qe behet ndryshon nje klase,i perfaqson indeksin e klases ,
        var kuqeElements = document.getElementsByClassName('kuqe');
        for (var i = 0; i < kuqeElements.length; i++) {             
            var numriGradeve = parseInt(kuqeElements[i].innerHTML);  //aksesohen klasat nepermjet indeksit 
            var numriFefrat = Math.round((numriGradeve * 1.8) + 32);
            kuqeElements[i].innerHTML = numriFefrat + ' F';
        }
    }
    // Check if the selected option is 'C'
    else if (selectedOption=== 'C'){
        var kuqeElements = document.getElementsByClassName('kuqe');
        for (var i = 0; i < kuqeElements.length; i++) {
            var numriGradeve = parseInt(kuqeElements[i].innerHTML);
            var numriFefrat = Math.round((numriGradeve -32) /1.8);
            kuqeElements[i].innerHTML = numriFefrat;
        }
    }
}





