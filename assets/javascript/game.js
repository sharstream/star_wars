/* ---- Game jQuery-JS logic ------ *
*    jQuery Star Wars RPG Game      *
*       Author: David Perez         *
*          GT bootcamps             *
* --------------------------------- */


$(document).ready(function () {


/* ------- Global variables ------- *
*                                   *
* --------------------------------- */

    var char1Count = true;
    var counterDefeated = 0;
    var darthCount = 0;
    var obiCount = 0;
    var yodaCount = 0;
    var porgCount = 0;

/* --------- Game Logics ---------- *
*                                   *
* --------------------------------- */

    function resetGame() {
        resetUI();
    }

    $('.darth_vader').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('main');
            darthCount++;
            char1Count = false;

            $('.obi_wan').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width':'200px', 
                'background-color': 'red', 'text-align': 'center'});
            $('.obi_wan p').css({'margin-left': '30px'});

            $('.yoda').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width':'200px', 
                'background-color': 'red', 'text-align': 'center'});
            $('.yoda p').css({'margin-left': '30px'});

            $('.porg').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width':'200px', 
                'background-color': 'red', 'text-align': 'center'});
            $('.porg p').css({'margin-left': '30px'});

            $('.starImage').css({'heigth': '100px', 'width':'200px', 
                                'margin-left':'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && darthCount === 0) {
            $('.darth_vader').appendTo('.defenderBox').addClass("def shake-little").css({'background-color':'black', 'color': 'white'});
            $('.darth_vader p').css({'margin-left': '30px'});
        }
    });

    $('.obi_wan').on('click', function(){
        if (char1Count === true) {
            // debugger    
            $(this).addClass('main');
            obiCount++;
            char1Count = false;

            $('.darth_vader').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.darth_vader p').css({'margin-left': '30px'});

            $('.yoda').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.yoda p').css({'margin-left': '30px'});

            $('.porg').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.porg p').css({'margin-left': '30px'});

            $('.starImage').css({'heigth': '100px', 'width': '200px',
                'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && obiCount === 0) {
            $('.obi_wan').appendTo('.defenderBox').addClass("def shake-little").css({ 'background-color': 'black', 'color': 'white' });
            $('.obi_wan p').css({'margin-left': '30px'});
        }
    });

    $('.yoda').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('main');
            yodaCount++;
            char1Count = false;

            $('.darth_vader').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.darth_vader p').css({'margin-left': '30px'});

            $('.obi_wan').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.obi_wan p').css({'margin-left': '30px'});

            $('.porg').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('porg p').css({'margin-left': '30px'});

            $('.starImage').css({'heigth': '100px', 'width': '200px',
                'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && yodaCount === 0) {
            $('.yoda').appendTo('.defenderBox').addClass("def shake-little").css({ 'background-color': 'black', 'color': 'white' });
            $('.yoda p').css({'margin-left': '30px'});
        }
    });

    $('.porg').on('click', function(){
        if (char1Count === true) {
            $(this).addClass('main');
            porgCount++;
            char1Count = false;

            $('.darth_vader').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.darth_vader p').css({'margin-left': '30px'});

            $('.obi_wan').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.obi_wan p').css({'margin-left': '30px'});

            $('.yoda').appendTo('.enemiesBox').addClass("shake-little").css({'heigth': '100px', 'width': '200px',
                'background-color': 'red', 'text-align': 'center'});
            $('.yoga p').css({'margin-left': '30px'});

            $('.starImage').css({'heigth': '100px', 'width': '200px',
                'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'});
        }
        else if (char1Count === false && porgCount === 0) {
            $('.porg').appendTo('.defenderBox').addClass("def shake-little").css({ 'background-color': 'black', 'color': 'white' });
            $('.porg p').css({'margin-left': '30px'});
        }
    });

    $('.btn-attack').on('click', function () {
        var clicked = $(this);//you can use $ obj
        // debugger
        // var counterDefeated = 0;// declared it global
        var charName = $('.def').attr('characterName');
        var healthMain = $('.main').attr('health');
        var attackMain = $('.main').attr('attack');
        var healthDefender = $('.def').attr('health');
        var counterAttack = $('.def').attr('counterAttack');

        if ($('.enemiesBox').is(':empty')){
            alert('You need to select a character to start your game');
        }
        else if ( $('.defenderBox').is(':empty') ) {
            alert('You need to select a defender to start your game');
        } else{

            var healthMainAfter = healthMain - counterAttack;
            var healthDefAfter = healthDefender - attackMain;

            var healthMain1 = $('.main').attr('health', healthMainAfter);

            var healthDef1 = $('.def').attr('health', healthDefAfter).css({'text-align': 'center'});

            $('.main p').html($('.main').attr("health"));
            $('.def p').html($('.def').attr('health'));

            $('.defeat').html('<p>' + 'You attacked ' + charName +
                            ' for ' + attackMain + ' damage ' +
                            charName + ' attacked you back for ' +
                            counterAttack + ' </p>').css({'font-size': '20px', 'text-align':'center', 'color':'red'});

            attackMain = attackMain * 2;
            var attackMain1 = $('.main').attr('attack', attackMain);
                
                if (healthMainAfter <= 0) {
                    $('.defeat').html('<p>' + 'You have been defeated...Game Over!!!' + '</p>').css({ 'font-size': '20px', 'color': 'red'});
                    $('.btn-attack').off('click');

                } else if (healthDefAfter <= 0) {
                    $('.def').remove();
                    $('.defeat').html('<p>' + ' You have been defeated ' + charName +
                                        ' choose to fight another enemy.' + '</p>').css({'font-size': '20px', 'color':'red'});
                    counterDefeated++;
                    console.log(' count during fight! '+counterDefeated);

                    if(counterDefeated === 3){
                        $('.btn-attack').off('click');
                    }
                    else{
                        $('.defeat').html('<p>' + 'You Win!!!' + '</p>').css({ 'font-size': '20px', 'color': 'red' });
                        // $('.btn-attack').off('click');
                    }
                }
            }
    });

    $('.resetBtn').on('click', resetGame);

    function resetUI() {
        $('.defenderBox').remove();
        $('.enemiesBox').remove();
        location.reload();
    }
});

