var elMsg = document.getElementById('feedback');  //declare variables and assign them
var elOne = document.getElementById('box1');
elOne.addEventListener('mouseover', feedBackOn1, false);  //when user hovers on the div

var elTwo = document.getElementById('box2');   //show this message when user hovers on box2
elTwo.addEventListener('mouseover', feedBackOn2, false);

var elThree = document.getElementById('box3');
elThree.addEventListener('mouseover', feedBackOn3, false);

/*show these messages depending on the box hovered*/
function feedBackOn1() {  
    elMsg.innerHTML = "We must never forget the explorer’s spirit."
}


function feedBackOn2() {
    elMsg.innerHTML = "Life is just a bowl of cherries!"
}


function feedBackOn3() {
    elMsg.innerHTML = "Exploring new places is a great way to relax and clear your mind.";
}


var elSearchGo;  //declare variables

function search() {

    var elSearchBar = document.querySelector('input').value;
    var elSearchFeedBack = document.getElementById('searchFeedBack');

    if (elSearchBar.length === 0 ) {
        elSearchFeedBack.textContent = 'No location entered';
    } else {
        elSearchFeedBack.textContent = '';
    }

}

elSearchGo = document.getElementById('go');
elSearchGo.addEventListener('click', search, false);














