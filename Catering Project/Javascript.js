
$(document).ready(function() {
    document.getElementById("all-food").classList.add("side-navbar-menu-active");

    document.getElementById("main-food").classList.remove("side-navbar-menu-active");

    document.getElementById("pork-food").classList.remove("side-navbar-menu-active");
    document.getElementById("poultry-food").classList.remove("side-navbar-menu-active");
    document.getElementById("beef-food").classList.remove("side-navbar-menu-active");
    document.getElementById("vegetables-food").classList.remove("side-navbar-menu-active");

    document.getElementById("soup-food").classList.remove("side-navbar-menu-active");
    document.getElementById("dessert-food").classList.remove("side-navbar-menu-active");

    document.getElementById('pork-food').style.color='#747474';
    document.getElementById('poultry-food').style.color='#747474';
    document.getElementById('beef-food').style.color='#747474';
    document.getElementById('vegetables-food').style.color='#747474';
    document.getElementById('main-food').style.color='#646464';
    document.getElementById('soup-food').style.color='#646464';
    document.getElementById('dessert-food').style.color='#646464';
    document.getElementById('all-food').style.color='black';

    var view = localStorage.getItem('viewMenu');
    if (view == 'soup') {
        SoupDishFunction();
        localStorage.clear();
    }
    if (view == 'main') {
        MainDishFunction();
        localStorage.clear();
    }
    if (view == 'dessert') {
        DessertDishFunction();
        localStorage.clear();
    }
});

const mainDish = document.getElementsByClassName("main-dish-div");
const mainPorkDish = document.getElementsByClassName("pork-dish-div");
const mainPoultryDish = document.getElementsByClassName("poultry-dish-div");
const mainBeefDish = document.getElementsByClassName("beef-dish-div");
const mainVegetablesDish = document.getElementsByClassName("vegetables-dish-div");
// ---
const soupDish = document.getElementsByClassName("soup-dish-div");
const dessertDish = document.getElementsByClassName("dessert-dish-div");
// --

function DateFunction() {
    var DateCheckBox = document.getElementById("date-unset");
    var dateInput = document.getElementById('date');
    if (DateCheckBox.checked == true) {
        dateInput.disabled = true;
        dateInput.removeAttribute('required');
        dateInput.classList.add('date-color');
    } else {
        dateInput.disabled = false;
        dateInput.setAttribute('required', true);
        dateInput.classList.remove('date-color');
    }
}

function MainDishFunction() {
    menuFunction();
    document.getElementById("main-food").classList.add("side-navbar-menu-active");
    document.getElementById('main-food').style.color='black';
    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < mainPorkDish.length; i++){
        mainPorkDish[i].style.display = "grid"; 
    }
    for(var i = 0; i < mainPoultryDish.length; i++){
        mainPoultryDish[i].style.display = "grid"; 
    }
    for(var i = 0; i < mainBeefDish.length; i++){
        mainBeefDish[i].style.display = "grid"; 
    }
    for(var i = 0; i < mainVegetablesDish.length; i++){
        mainVegetablesDish[i].style.display = "grid"; 
    }
}

function PorkDishFunction() {
    menuFunction();
    document.getElementById("pork-food").classList.add("side-navbar-menu-active");
    document.getElementById('pork-food').style.color='black';
    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < mainPorkDish.length; i++){
        mainPorkDish[i].style.display = "grid"; 
    }
}


function PoultryDishFunction() {
    menuFunction();
    document.getElementById("poultry-food").classList.add("side-navbar-menu-active");
    document.getElementById('poultry-food').style.color='black';
    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < mainPoultryDish.length; i++){
        mainPoultryDish[i].style.display = "grid"; 
    }
}

function BeefDishFunction() {
    menuFunction();
    document.getElementById("beef-food").classList.add("side-navbar-menu-active");
    document.getElementById('beef-food').style.color='black';
    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < mainBeefDish.length; i++){
        mainBeefDish[i].style.display = "grid"; 
    }
}

function VegetablesDishFunction() {
    menuFunction();
    document.getElementById("vegetables-food").classList.add("side-navbar-menu-active");
    document.getElementById('vegetables-food').style.color='black';
    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < mainVegetablesDish.length; i++){
        mainVegetablesDish[i].style.display = "grid"; 
    }
}

function SoupDishFunction() {
    menuFunction();
    document.getElementById("soup-food").classList.add("side-navbar-menu-active");
    document.getElementById('soup-food').style.color='black';
    for(var i = 0; i < soupDish.length; i++){
        soupDish[i].style.display = "flex"; 
    }
}

function DessertDishFunction() {
    menuFunction();
    document.getElementById("dessert-food").classList.add("side-navbar-menu-active");
    document.getElementById('dessert-food').style.color='black';
    for(var i = 0; i < dessertDish.length; i++){
        dessertDish[i].style.display = "flex"; 
    }
}

function AllDishFunction() {
    document.getElementById("all-food").classList.add("side-navbar-menu-active");

    document.getElementById("main-food").classList.remove("side-navbar-menu-active");

    document.getElementById("pork-food").classList.remove("side-navbar-menu-active");
    document.getElementById("poultry-food").classList.remove("side-navbar-menu-active");
    document.getElementById("beef-food").classList.remove("side-navbar-menu-active");
    document.getElementById("vegetables-food").classList.remove("side-navbar-menu-active");

    document.getElementById("soup-food").classList.remove("side-navbar-menu-active");
    document.getElementById("dessert-food").classList.remove("side-navbar-menu-active");

    document.getElementById('pork-food').style.color='#747474';
    document.getElementById('poultry-food').style.color='#747474';
    document.getElementById('beef-food').style.color='#747474';
    document.getElementById('vegetables-food').style.color='#747474';
    document.getElementById('main-food').style.color='#747474';
    document.getElementById('soup-food').style.color='#646464';
    document.getElementById('dessert-food').style.color='#646464';
    document.getElementById('all-food').style.color='black';

    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < mainPorkDish.length; i++){
        mainPorkDish[i].style.display = "grid"; 
    }
    for(var i = 0; i < mainPoultryDish.length; i++){
        mainPoultryDish[i].style.display = "grid"; 
    }
    for(var i = 0; i < mainBeefDish.length; i++){
        mainBeefDish[i].style.display = "grid"; 
    }
    for(var i = 0; i < mainVegetablesDish.length; i++){
        mainVegetablesDish[i].style.display = "grid"; 
    }

    for(var i = 0; i < soupDish.length; i++){
        soupDish[i].style.display = "flex"; 
    }
    for(var i = 0; i < dessertDish.length; i++){
        dessertDish[i].style.display = "flex"; 
    }
}


function menuFunction() {
    for(var i = 0; i < mainDish.length; i++){
        mainDish[i].style.display = "none"; 
    }
    for(var i = 0; i < mainPorkDish.length; i++){
        mainPorkDish[i].style.display = "none"; 
    }
    for(var i = 0; i < mainPoultryDish.length; i++){
        mainPoultryDish[i].style.display = "none"; 
    }
    for(var i = 0; i < mainBeefDish.length; i++){
        mainBeefDish[i].style.display = "none"; 
    }
    for(var i = 0; i < mainVegetablesDish.length; i++){
        mainVegetablesDish[i].style.display = "none"; 
    }

    for(var i = 0; i < soupDish.length; i++){
        soupDish[i].style.display = "none"; 
    }
    for(var i = 0; i < dessertDish.length; i++){
        dessertDish[i].style.display = "none"; 
    }

    document.getElementById("all-food").classList.remove("side-navbar-menu-active");

    document.getElementById("main-food").classList.remove("side-navbar-menu-active");

    document.getElementById("pork-food").classList.remove("side-navbar-menu-active");
    document.getElementById("poultry-food").classList.remove("side-navbar-menu-active");
    document.getElementById("beef-food").classList.remove("side-navbar-menu-active");
    document.getElementById("vegetables-food").classList.remove("side-navbar-menu-active");

    document.getElementById("soup-food").classList.remove("side-navbar-menu-active");
    document.getElementById("dessert-food").classList.remove("side-navbar-menu-active");

    document.getElementById('pork-food').style.color='#747474';
    document.getElementById('poultry-food').style.color='#747474';
    document.getElementById('beef-food').style.color='#747474';
    document.getElementById('vegetables-food').style.color='#747474';
    document.getElementById('main-food').style.color='#646464';
    document.getElementById('soup-food').style.color='#646464';
    document.getElementById('dessert-food').style.color='#646464';
    document.getElementById('all-food').style.color='#646464';
}

function viewSoup() {
    localStorage.setItem('viewMenu', 'soup');
    window.location.href = "Menu.html";
}
function viewMain() {
    localStorage.setItem('viewMenu', 'main');
    window.location.href = "Menu.html";
}
function viewDessert() {
    localStorage.setItem('viewMenu', 'dessert');
    window.location.href = "Menu.html";
}

function requestPage() {
    window.location.href = "Reservation.html";
}

function contactPage() {
    window.location.href = "Contacts.html";
}