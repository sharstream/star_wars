/* ---- Game jQuery-JS logic ------ *
*    jQuery Start Wars RPG Game     *
*       Author: David Perez         *
*          GT bootcamps             *
* --------------------------------- */

/* ------- Global variables ------- *
*                                   *
* --------------------------------- */
// display a message with your defeat scores
var message = $("#defeat");
var numberOptions = [10, 5, 3, 7];

/* ---------- Objects ------------- *
*                                   *
* --------------------------------- */

var character = {
    health_points: 200,
    attack_power: 0,
    counter_attack_power: 0,
    targetNumber: Math.floor(Math.random()),
    chooseCharacter: function() {
        return this;
    },
    increasePower: increaseAttack(numberOptions),
    win: function win() { alert('You win!'); resetGame(); },
    lose: function lose() { alert('Oh no, you lose!'); resetGame(); }
}

/* ----- StartWars Game rules ----- *
*                                   *
* --------------------------------- */

function increaseAttack(numberOptions) {
    for (var i = 0; i < numberOptions.length; i++) {

    }
}

function resetGame() {
    resetUI();
    character.health_points = 200
    character.attack_power = 0;
    character.counter_attack_power = 0;
}

/* ----- Browser Interactions ----- *
*                                   *
* --------------------------------- */

// $('.row').each(function () {
//     var wrap = $(this);
//     var hi = wrap.closest('#character').find('.row');
//     wrap.find('img').each(function () {
//         var img = $(this);
//         img.remove().appendTo(hi);
//     });
// });

$("#character").click(function () {

    // var clicked = $(this);
    var imagesClass = ['first', 'second', 'third', 'four'];
    
    if ($('.row').hasClass('first')) {
        $(".first").appendTo(".your_character");
        console.log('what is clicked here: ' + $(".first").appendTo(".your_character"));
    }

    else if ($('.row').hasClass('second')) {
        $(".second").appendTo(".your_character");
    } 
    
    else if ($('.row').hasClass('third')) {
        $(".third").appendTo(".your_character");
    } 
    
    else if ($('.row').hasClass('four')) {
        $(".four").appendTo(".your_character");
    }
});

$(document).ready(function () {
    $('.btn-attack').click(function () {
        var attackPower = ($(this).attr(""));
        character.attack_power = parseInt(attackPower);
        character.counter_attack_power += character.attack_power;

        if (character.counter_attack_power  === character.targetNumber) {
            character.win();
        }

        else if (character.counter_attack_power >= character.targetNumber) {
            character.lose();
        }
        console.log("Increased power: " + character.attack_power);
        console.log("Increased power: " + character.counter_attack_power);
        console.log("Increased power: " + character.targetNumber);
        console.log("Increased power: " + character.increasePower);
    })
});

function resetUI() {
    $('.selected_character').remove();
    $('.enemy_character').remove();

    var images = ['dark vader.jpg', 'obi wan.jpg', 'yoda.jpg', 'porg plush.jpg'];
    for (var i = 0; i < images.length; i++) {

        var imageCharacter = $("<img>");
        imageCharacter.addClass("character-image");
        //select a character
        imageCharacter.attr("src", "assets/images/"+images[i]);
        imageCharacter.attr(".character-image", images[i]);
        message.append(imageCharacter);
    }
}