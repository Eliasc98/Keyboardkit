// var names = ["Angela", "Paulina", "Godwin", "Matthew"];
// var inputNames = prompt("What's is your name?");

var password =["1234"];
var passwordInput = prompt("what's the password?");
password.includes(passwordInput) ?
    document.querySelector(".cover").classList.remove("cover") :  alert("Incorrect Password! ⛔");


//=====Keyboard-Activitation=========

document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
});

//====== Sounds =========

function sound(key){

    switch (key) {
        case "c":
            var cSound = new Audio("sounds/c-major.wav");
            cSound.play();
        break;

        case "d":
            var dSound = new Audio("sounds/d-major.wav");
            dSound.play();
            break;

        case "e": 
            var eSound = new Audio("sounds/e-major.wav");
            eSound.play();
            break;

        case "f":
            var fSound = new Audio("sounds/f-major.wav");
            fSound.play();
            break;

        case "g":
            var gSound = new Audio("sounds/g-major.wav");
            gSound.play();
            break;

        case "a":
            var aSound = new Audio("sounds/a-major.wav");
            aSound.play();
            break;

        case "b": 
            var bSound = new Audio("sounds/b-major.wav");
            bSound.play();
            break;

        case "s":
            var sSound = new Audio("sounds/c-high-note.wav");
            sSound.play();
            break;

        case "l":
            var lSound = new Audio("sounds/d-high-note.wav");
            lSound.play();
            break;

        case "h":
            var hSound = new Audio("sounds/cs-major.wav");
            hSound.play();
            break;

        case "i":
            var iSound = new Audio("sounds/ds-major.wav");
            iSound.play();
            break;

        case "j":
            var jSound = new Audio("sounds/fs-major.wav");
            jSound.play();
            break;

        case "k":
            var kSound = new Audio("sounds/gs-major.wav");
            kSound.play();
            break;

        case "m":
            var mSound = new Audio("sounds/as-major.wav");
            mSound.play();
            break;

        case "n":
            var nSound = new Audio("sounds/cs-high.wav");
            nSound.play();
            break;
        
        default: console.log(keyButton);
        break;
    };
    
}

//======Animation when Clicked-on======

function animation(key){
    var act = document.querySelector("."+key);
    act.classList.add("pressed");

    setTimeout(function(){
        act.classList.remove("pressed");
    }, 100)
}

//=====Mouse Click ============

for (var i = 0; i < 16; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function (){
        var keyButton = this.innerHTML;
        sound(keyButton);
        animation(keyButton);
    })
};

