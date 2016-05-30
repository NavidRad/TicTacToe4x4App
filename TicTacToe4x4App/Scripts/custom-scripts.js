//box1 to box16 values
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;

var playerOne = 'x';
var pc = 'o';
var turn = 0;
var xIsWinner = false;
var oIsWinner = false;

$(document).ready(function () {
    gameClick();
});

//On game table click
var gameClick = function () {
    $('td').on('click', function (event) {
        if (turn == 0 && $(this).text() == "") {
            $(this).text(playerOne);
            gameStatus();
            isWin();
            turn == 1;
            pcTurn();
            gameStatus();
            isWin();
        }
    });
};

var pcTurn = function () {

    //Number of x in the game
    var xCount = 0;
    $(".td").each(function (i, val) {
        if ($(this).html() == 'x') {
            xCount++;
        }
    });

    //PC first move..
    if (xCount == 1) {
        if (box6 == "") {
            $('#box6').text("o");
            turn = 0;
        } else if (box6 == "x" && box1 == "" && box2 == "" && box3 == "" && box5 == "" && box7 == "" && box9 == "" && box10 == "" && box11 == "") {
            $('#box1').text("o");
            turn = 0;
        }
    }

    //Special cases
    if (xCount == 4) {
        if (box1 == "o" && box3 == "x" && box5 == "x" && box6 == "x" && box7 == "o" && box9 == "o" && box11 == "x" && box10 == "") {
            $('#box10').text("o");
            turn = 0;
        }
    }

    //PC aggressive moves
    if (xCount != 1) {
        if (box1 == "o" && box2 == "o" && box3 == "") {
            $('#box3').text("o");
            turn = 0;
        } else if (box2 == "o" && box3 == "o" && box1 == "") {
            $('#box1').text("o");
            turn = 0;
        } else if (box1 == "o" && box5 == "o" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box5 == "o" && box9 == "o" && box1 == "") {
            $('#box1').text("o");
            turn = 0;
        } else if (box2 == "o" && box3 == "o" && box1 == "") {
            $('#box1').text("o");
            turn = 0;
        } else if (box3 == "o" && box7 == "o" && box11 == "") {
            $('#box11').text("o");
            turn = 0;
        } else if (box7 == "o" && box11 == "o" && box3 == "") {
            $('#box3').text("o");
            turn = 0;
        } else if (box9 == "o" && box10 == "o" && box11 == "") {
            $('#box11').text("o");
            turn = 0;
        } else if (box10 == "o" && box11 == "o" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box1 == "o" && box3 == "o" && box2 == "") {
            $('#box2').text("o");
            turn = 0;
        } else if (box3 == "o" && box11 == "o" && box7 == "") {
            $('#box7').text("o");
            turn = 0;
        } else if (box11 == "o" && box9 == "o" && box10 == "") {
            $('#box10').text("o");
            turn = 0;
        } else if (box1 == "o" && box9 == "o" && box5 == "") {
            $('#box5').text("o");
            turn = 0;
        } else if (box1 == "o" && box6 == "o" && box11 == "") {
            $('#box11').text("o");
            turn = 0;
        } else if (box6 == "o" && box11 == "o" && box1 == "") {
            $('#box1').text("o");
            turn = 0;
        } else if (box1 == "o" && box11 == "o" && box6 == "") {
            $('#box6').text("o");
            turn = 0;
        } else if (box3 == "o" && box6 == "o" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box6 == "o" && box9 == "o" && box3 == "") {
            $('#box3').text("o");
            turn = 0;
        } else if (box3 == "o" && box9 == "o" && box6 == "") {
            $('#box6').text("o");
            turn = 0;
        } else if (box2 == "o" && box6 == "o" && box10 == "") {
            $('#box10').text("o");
            turn = 0;
        } else if (box6 == "o" && box10 == "o" && box2 == "") {
            $('#box2').text("o");
            turn = 0;
        } else if (box2 == "o" && box10 == "o" && box6 == "") {
            $('#box6').text("o");
            turn = 0;
        } else if (box5 == "o" && box6 == "o" && box7 == "") {
            $('#box7').text("o");
            turn = 0;
        } else if (box6 == "o" && box7 == "o" && box5 == "") {
            $('#box5').text("o");
            turn = 0;
        } else if (box5 == "o" && box7 == "o" && box6 == "") {
            $('#box6').text("o");
            turn = 0;
        } else if (box6 == "x" && box2 == "x" && box10 == "") { //PC defensive moves
            $('#box10').text("o");
            turn = 0;
        } else if (box6 == "x" && box3 == "x" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box6 == "x" && box5 == "x" && box7 == "") {
            $('#box7').text("o");
            turn = 0;
        } else if (box6 == "x" && box7 == "x" && box5 == "") {
            $('#box5').text("o");
            turn = 0;
        } else if (box6 == "x" && box9 == "x" && box3 == "") {
            $('#box3').text("o");
            turn = 0;
        } else if (box6 == "x" && box10 == "x" && box2 == "") {
            $('#box2').text("o");
            turn = 0;
        } else if (box6 == "x" && box11 == "x" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box6 == "x" && box11 == "x" && box3 == "x") {
            $('#box7').text("o");
            turn = 0;
        } else if (box6 == "x" && box9 == "x" && box11 == "x") {
            $('#box10').text("o");
            turn = 0;
        } else if (box6 == "o" && box1 == "x" && box2 == "x" && box3 == "") {
            $('#box3').text("o");
            turn = 0;
        } else if (box6 == "o" && box2 == "x" && box3 == "x" && box1 == "") {
            $('#box1').text("o");
            turn = 0;
        } else if (box6 == "o" && box1 == "x" && box5 == "x" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box6 == "o" && box5 == "x" && box9 == "x" && box1 == "") {
            $('#box1').text("o");
            turn = 0;
        } else if (box6 == "o" && box3 == "x" && box7 == "x" && box11 == "") {
            $('#box11').text("o");
            turn = 0;
        } else if (box6 == "o" && box7 == "x" && box11 == "x" && box3 == "") {
            $('#box3').text("o");
            turn = 0;
        } else if (box6 == "o" && box9 == "x" && box10 == "x" && box11 == "") {
            $('#box11').text("o");
            turn = 0;
        } else if (box6 == "o" && box10 == "x" && box11 == "x" && box9 == "") {
            $('#box9').text("o");
            turn = 0;
        } else if (box2 == "x" && box6 == "x" && box9 == "x" && box11 == "x" && box7 == "") {
            $('#box7').text("o");
            turn = 0;
        } else if (box6 == "o" && box1 == "x" && box3 == "x" && box2 == "" && box11 != "x") {
            $('#box2').text("o");
            turn = 0;
        } else if (box6 == "o" && box1 == "x" && box9 == "x" && box5 == "") {
            $('#box5').text("o");
            turn = 0;
        } else if (box6 == "o" && box3 == "x" && box11 == "x" && box7 == "") {
            $('#box7').text("o");
            turn = 0;
        } else if (box6 == "o" && box9 == "x" && box11 == "x" && box10 == "") {
            $('#box10').text("o");
            turn = 0;
        } else if (box6 == "o" && box1 == "x" && box11 == "x" && box5 == "") {
            $('#box5').text("o");
            turn = 0;
        } else if (box6 == "o" && box3 == "x" && box9 == "x" && box5 == "") {
            $('#box5').text("o");
            turn = 0;
        } else { //PC random moves
            if (box1 == "" && xCount != 2 && xCount != 3) {
                $('#box1').text("o");
                turn = 0;
            } else if (box2 == "") {
                $('#box2').text("o");
                turn = 0;
            } else if (box3 == "" && xCount != 3) {
                $('#box3').text("o");
                turn = 0;
            } else if (box5 == "" && xCount != 3) {
                $('#box5').text("o");
                turn = 0;
            } else if (box6 == "") {
                $('#box6').text("o");
                turn = 0;
            } else if (box7 == "" && xCount != 3) {
                $('#box7').text("o");
                turn = 0;
            } else if (box9 == "") {
                $('#box9').text("o");
                turn = 0;
            } else if (box10 == "") {
                $('#box10').text("o");
                turn = 0;
            } else if (box11 == "") {
                $('#box11').text("o");
                turn = 0;
            }
        }
    }
}

gameStatus = function () {
    box1 = $('#box1').html();
    box2 = $('#box2').html();
    box3 = $('#box3').html();
    box4 = $('#box4').html();
    box5 = $('#box5').html();
    box6 = $('#box6').html();
    box7 = $('#box7').html();
    box8 = $('#box8').html();
    box9 = $('#box9').html();
    box10 = $('#box10').html();
    box11 = $('#box11').html();
    box12 = $('#box12').html();
    box13 = $('#box13').html();
    box14 = $('#box14').html();
    box15 = $('#box15').html();
    box16 = $('#box16').html();
};

isWin = function () {
    if ((box1 == box2 && box1 == box3 && (box1 == "x")) ||
        (box5 == box6 && box5 == box7 && (box5 == "x")) ||
        (box9 == box10 && box9 == box11 && (box9 == "x")) ||
        (box1 == box5 && box1 == box9 && (box1 == "x")) ||
        (box2 == box6 && box2 == box10 && (box2 == "x")) ||
        (box3 == box7 && box3 == box11 && (box3 == "x")) ||
        (box1 == box6 && box1 == box11 && (box1 == "x")) ||
        (box3 == box6 && box3 == box9 && (box3 == "x"))
    ) {
        xIsWinner = true;
        showWinner();
    } else {
        if ((box1 == box2 && box1 == box3 && (box1 == "o")) ||
        (box5 == box6 && box5 == box7 && (box5 == "o")) ||
        (box9 == box10 && box9 == box11 && (box9 == "o")) ||
        (box1 == box5 && box1 == box9 && (box1 == "o")) ||
        (box2 == box6 && box2 == box10 && (box2 == "o")) ||
        (box3 == box7 && box3 == box11 && (box3 == "o")) ||
        (box1 == box6 && box1 == box11 && (box1 == "o")) ||
        (box3 == box6 && box3 == box9 && (box3 == "o"))
        ) {
            oIsWinner = true;
            showWinner();
        } else {
            if (((box1 == "x") || (box1 == "o")) && ((box5 == "x") || (box5 == "o")) && ((box9 == "x") || (box9 == "o")) && ((box2 == "x") || (box2 == "o")) && ((box6 == "x") || (box6 == "o")) && ((box10 == "x") || (box10 == "o")) && ((box3 == "x") || (box3 == "o")) && ((box7 == "x") || (box7 == "o")) && ((box11 == "x") || (box11 == "o"))) {
                $("#tie-message").css("display", "block");
                $("#top-message").css("display", "block").html("IT'S A TIE!");
            }
        }
    }
};

var showWinner = function () {
    if (xIsWinner == true) {
        $("#win-message").css("display", "block");
        $("#top-message").css("display", "block").html("YOU WON!");
    } else {
        if (oIsWinner == true) {
            $("#lost-message").css("display", "block");
            $("#top-message").css("display", "block").html("GAME OVER!");
        }
    }
};

$('#btn-restart').click(function (event) {
    box1 = $('#box1').text("");
    box2 = $('#box2').text("");
    box3 = $('#box3').text("");
    box4 = $('#box4').text("");
    box5 = $('#box5').text("");
    box6 = $('#box6').text("");
    box7 = $('#box7').text("");
    box8 = $('#box8').text("");
    box9 = $('#box9').text("");
    box10 = $('#box10').text("");
    box11 = $('#box11').text("");
    box12 = $('#box12').text("");
    box13 = $('#box13').text("");
    box14 = $('#box14').text("");
    box15 = $('#box15').text("");
    box16 = $('#box16').text("");
    xIsWinner = false;
    oIsWinner = false;
    $("#win-message").css("display", "none");
    $("#lost-message").css("display", "none");
    $("#tie-message").css("display", "none");
    $("#top-message").css("display", "none");
    gameClick();
    location.reload();
});