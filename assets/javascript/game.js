$(document).ready(function() {
        var startAudio = new Audio("assets/sounds/jungle.mp3")
        var winAudio = new Audio("assets/sounds/winningsound.mp3")
        var loseAudio = new Audio ("assets/sounds/losingsound.mp3")
        var winsNumber = 0
        var losesNumber = 0
        startAudio.play();

        startGame();

        function startGame() {

            var totalScoreNumber = 0;
            var chrystalValue1 = Math.floor((Math.random() * 11) + 1);
            var chrystalValue2 = Math.floor((Math.random() * 11) + 1);
            var chrystalValue3 = Math.floor((Math.random() * 11) + 1);
            var chrystalValue4 = Math.floor((Math.random() * 11) + 1);
            var min = Math.ceil(19)
            var max = Math.floor(120)
            var targetScoreNumber = Math.floor(Math.random() * (max - min)) + min;
            $("#winnerText").text("");

            $("#totalScoreNumber").text(totalScoreNumber);

            $("#targetNumber").text(targetScoreNumber);

            $("#winsNumber").text(winsNumber);

            $("#losesNumber").text(losesNumber);

            $("#button-1").on("click", function() {

                totalScoreNumber = totalScoreNumber + chrystalValue1

                $("#totalScoreNumber").text(totalScoreNumber)

                winCheck();

            });


            $("#button-2").on("click", function() {

                totalScoreNumber = totalScoreNumber + chrystalValue2

                $("#totalScoreNumber").text(totalScoreNumber)

                winCheck();

            });


            $("#button-3").on("click", function() {

                totalScoreNumber = totalScoreNumber + chrystalValue3

                $("#totalScoreNumber").text(totalScoreNumber)

                winCheck();

            });


            $("#button-4").on("click", function() {

                totalScoreNumber = totalScoreNumber + chrystalValue4

                $("#totalScoreNumber").text(totalScoreNumber)

                winCheck();

            });



            function winCheck() {
                if (totalScoreNumber == targetScoreNumber) {
                    $("#winnerText").text("YOU WIN!");
                    winAudio.play();
                    winsNumber++;
                    $('#button-1').unbind("click");
                    $('#button-2').unbind("click");
                    $('#button-3').unbind("click");
                    $('#button-4').unbind("click");
                    setTimeout(function(){ startGame() }, 2500);

                } else if (totalScoreNumber > targetScoreNumber) {                    
                    $("#winnerText").text("YOU LOSE!");
                    loseAudio.play();
                    losesNumber++;
                    $("#button-1").unbind("click");
                    $("#button-2").unbind("click");
                    $("#button-3").unbind("click");
                    $("#button-4").unbind("click");
                    setTimeout(function(){ startGame() }, 2500);

                }
            }
        }
    });