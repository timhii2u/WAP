/*jshint esversion: 6 */
(function () {
    "use strict";
    $(function () {
        let game_status = false;
        let counter = 0;
        let timer = null;

        $("#start").click(function () {
            game_status = true;
            if(timer){
                clearInterval(timer);
                timer = null;
            }
            timer = setInterval(time,1000);


            if($(".boundary").hasClass("youlose")){
                $(".boundary").removeClass("youlose");
            }

            $(".boundary").mouseover(loss);
            $("#maze").mouseleave(loss);
            $("#end").mouseover(win);
        });
        function loss() {
            if(game_status){
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, You Lost! :[");
            }
            clearInterval(timer);
            timer = null;
            counter = 0;
            game_status = false;
        }
        function win() {
            if(game_status){
                $("#status").text("You Win! :]");
            }
            clearInterval(timer);
            timer = null;
            counter = 0;
            game_status = false;
        };
        function time() {
            ++counter;
            $("#status").text("Game Started ..."+ counter);
            if(counter===5){
                loss();
            }

        }
    });


})();