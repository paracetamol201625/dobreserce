

const targetDiv = document.getElementById("myDropdownoth");
const btn = document.getElementById("dropbtnoth");
btn.onclick = function () {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};

const targetDiv1 = document.getElementById("myDropdown3");
const btn1 = document.getElementById("dropbtn3");
btn1.onclick = function () {
  if (targetDiv1.style.display !== "block") {
    targetDiv1.style.display = "block";
  } else {
    targetDiv1.style.display = "none";
  }
};

const targetDiv2 = document.getElementById("myDropdownoth2");
const btn2 = document.getElementById("dropbtnoth2");
btn2.onclick = function () {
  if (targetDiv2.style.display !== "block") {
    targetDiv2.style.display = "block";
  } else {
    targetDiv2.style.display = "none";
  }
};

const targetDiv3 = document.getElementById("myDropdownoth4");
const btn3 = document.getElementById("dropbtnoth4");
btn3.onclick = function () {
  if (targetDiv3.style.display !== "block") {
    targetDiv3.style.display = "block";
  } else {
    targetDiv3.style.display = "none";
  }
};



    var buttonA = document.querySelector('#buttonA');
    var buttonB = document.querySelector('#buttonB');
    var text1 = document.querySelector('#text1');
    var text2 = document.querySelector('#text2');

    var changeColour = function (e) {

        if (e.target === buttonA) {
            buttonA.style.backgroundColor = '#363b5d';
            text1.style.color = "white"
            buttonB.style.backgroundColor = 'white';
            text2.style.color = "#363b5d";
        }

        if (e.target === buttonB) {
            buttonB.style.backgroundColor = '#363b5d';
            text2.style.color = "white";
            buttonA.style.backgroundColor = 'white';
            text1.style.color = "#363b5d";
            
        }

    };

    buttonA.addEventListener('click', changeColour, false);
    text1.addEventListener('click', changeColour, false);
    text2.addEventListener('click', changeColour, false);
    buttonB.addEventListener('click', changeColour, false); 


function TestsFunction() { TestsDiv.style.display = 'block', Bilshe.style.height ='1600px' };
function TestsFunction1() { TestsDiv.style.display = 'none', Bilshe.style.height ='1300px'};


document.getElementById("dropbtnoth").onClick= function (){ 
document.getElementByClass("box1_1").style.color= "red"; 
} 

var modal = document.getElementById('myModal');


var but = document.getElementById("myBtnf");


var span = document.getElementsByClassName("closef")[0];


but.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
  // Объявить переменные
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      ul.style.display = "flex";
    } else {
      ul.style.display = "none";
    }
  }};
  const buttons = document.querySelectorAll("button");

[...buttons].forEach((button) => {

    button.addEventListener("click", () => {
        const path = button.querySelector("path");
        path.style.fill = "white";
    });
});

var modal20 = document.getElementById('myModal20');


var btn20 = document.getElementById("myBtn20");


var span20 = document.getElementsByClassName("close20")[0];


btn20.onclick = function() {
    modal.style.display = "block";
}


span20.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal20.style.display = "none";
    }
}