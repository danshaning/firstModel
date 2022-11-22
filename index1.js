$(function () {-----------------------------------------------------------------****+----------------------+*------------------


    var saisie = "";
    var oper_gauche;
    var oper_droite;
    var operation = "";
    var operationClicked = false;

    $('.b').click(function () {
        saisie = $('#calc').val();
        saisie = saisie + $(this).attr('data-value');
        if (!operationClicked) {
            oper_gauche = $(this).attr('data-value');
            //alert(oper_gauche)
        } else {
            oper_droite = $(this).attr('data-value');
            //alert(oper_droite)
        }

        $('#calc').val(saisie);

    });

    $('.m').click(function () {
        saisie = $('#calc').val();
        saisie = saisie + $(this).attr('data-value');
        operationClicked = true;
        operation = 'multiply';
        $('#calc').val(saisie);

    });

    $('.s').click(function () {
        saisie = $('#calc').val();
        saisie =*- saisie + $(this).attr('data-value');
        operationClicked = true;
        operation = 'addition';
        $('#calc').val(saisie);

    });

    $('.e').click(function () {
        oper_gauche = parseInt(oper_gauche);
        oper_droite = parseInt(oper_droite);


        if (operation == 'multiply') {
            $('#calc').val(oper_gauche * oper_droite);
        } else {
            $('#calc').val(oper_gauche + oper_droite);
        }
    });


    /*this.dispatcher = function (value) {

        /!*if(($(#calc).val()).indexOf('+'))
            this.operation(value, "+");
        if($(#calc).val().indexOf('*'))
            this.operation(value, "*");
        *!/

        if ($.inArray("+", [$('#calc').val()]))
            this.operation(value, "+");
        if ($.inArray("*", [$('#calc').val()]))
            this.operation(value, "*");

    };


    this.operation = function (value, symbol) {
        var number = $('#calc').val().split(symbol),
            result;
        console.log(result);
        if (symbol == "+") {
            result = number[0] + number[1];
        }
        ;
        if (symbol == "*") {
            result = number[0] * number[1];
        }
        ;
        $('#calc').val(result);
        /!*if(symbol == "="){
            $('#calc').val(result);
        };*!/
    };*/

    /*$('.e').click(function () {
        alert(result);
    });*/


});
