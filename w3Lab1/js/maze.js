// (function () {
    // "use strict";

    $(document).ready(function () {

        $("#start").click(function () {

            // $("#boundary1").onmouseover.addClass('youloose');
            $(".boundary").mouseover(function() {
                // alert(this);
                $(".boundary").addClass("youlose");
                confirm("You Lost! :[");

            });

            $("#end").mouseover(function() {
                confirm("You Win! :]");
                return;
            });


        });




    });




// })();