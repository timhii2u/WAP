/*jshint esversion: 6 */

$(function () {
    "use strict";
    let timer = null;
    let cir_width;
    let cir_incr;
    let circ_growth;
    let circ_count;

    let purple = 'linear-gradient(to right top, #b51568, #91232a, #612f04, #352b00, #181f08)';
    let red = 'linear-gradient(to right top, #aa0000, #87030e, #630a12, #400d11, #1f0808)';
    let green = 'linear-gradient(to right top, #00aa0f, #008417, #056017, #0a3e13, #091f08)';
    let yellow = 'linear-gradient(to right top, #fbf106, #d7d006, #b4b105, #939204, #747403)';
    let blue = 'linear-gradient(to right top, #06fbdb, #00d2cd, #00a9b7, #008199, #035b74)';
    let orange = 'linear-gradient(to right top, #fbb006, #df9c05, #c38904, #a87604, #8e6403)';
    let gray = 'linear-gradient(to right top, #999385, #918976, #887e67, #807459, #786a4b)';
    let color_array = [purple,red,green,yellow,blue,orange,gray];

    $("#start").on('click',grow);

    $("body").on('mouseover','.circles',hov);
    $("body").on('mouseleave','.circles',nor);

    $("body").on('click','.circles',remve);


    function grow() {
        cir_width = $('#widthLb').val();
        cir_incr = $('#amountLb').val();
        circ_growth = $('#rateLb').val();
        circ_count = $('#numCir').val();

        let container = $('<div>', {"id":"container"});
        $('#container').remove();

        $("#circle").show();



        while(circ_count>0){
            container.append($('<div>',{
                "class": "circles",
                "css": {
                    "border-radius" : "50%",
                    "width": cir_width + "px",
                    "height": cir_width + "px",
                    "background": color_array[randomNum(0,color_array.length-1)],
                    "border": "3px solid black",
                    "position": "absolute",
                    "bottom": randomNum(0,20) +"%",
                    "left": randomNum(20,70)+ "%",
                }
            }));

            circ_count--;
        }
        $("#circle").after(container);
        $("#circle").hide();

        if(timer){
            clearInterval(timer);
            timer = null;
        }
        timer = setInterval(expand,circ_growth);
    }

    function remve(evt) {
        $(this).remove();
    }
    function expand() {

        $(".circles").css("width",function(idx, oldValue) {
            return parseInt(oldValue) + parseInt(cir_incr) + "px";
        }).css("height",function(idx, oldValue) {
            return parseInt(oldValue) + parseInt(cir_incr) + "px";
        });

    }
    function hov() {
        $(this).css('opacity','0.7');
    }
    function nor() {
        $(this).css('opacity','1');
    }

    function randomNum(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


});



