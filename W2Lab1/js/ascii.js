/*jshint esversion: 6 */
window.onload = function () {
        "use strict";

        let animaSelect = document.getElementById("animation");
        let text_area = document.getElementById("text-area");
        let start = document.getElementById("start");
        let stop = document.getElementById("stop");
        let fontsize = document.getElementById("fontsize");
        let turbo = document.getElementById("turbo");

        // ********** declaring global variables **************
        let timer = null;
        let anim;
        let interval;
        let arr;

        turbo.disabled= true;

        // ********* event handlers **************
        animaSelect.onchange = selectFunc;
        start.onclick = startFunc;
        stop.onclick = stopFunc;
        fontsize.onchange = changeFont;
        turbo.onchange = changeSpeed;

        //****** Function declarations ********

        function selectFunc() {
            let choice = animaSelect.value;
            anim = window.ANIMATIONS[choice];
            text_area.value = anim.split("=====\n")[0];
        }


        function startFunc() {

            interval = -1;

            if(!text_area.value){
                alert("Please make selection!!!");
                return;
            }
            stop.disabled = false;
            start.disabled = true;
            animaSelect.disabled= true;
            turbo.disabled= false;

            arr = anim.split("=====\n");
            console.log(arr);
            if(timer){
                clearInterval(timer);
                timer = null;
            }
            timer = setInterval(startAnimation, 250, arr);

        }

        function stopFunc() {
            start.disabled = false;
            stop.disabled = true;
            animaSelect.disabled= false;
            turbo.checked= false;
            turbo.disabled= true;

            if(timer){
                clearInterval(timer);
                timer = null;
            }
            text_area.value = anim.split("=====\n")[0];

        }

        function startAnimation(arr) {

            ++interval;
            if (interval >= arr.length) {
                interval = 0;
            }
            text_area.value = arr[interval];

        }

        function changeFont() {
            text_area.className = fontsize.value.split(" ")[0];
        }
        
        function changeSpeed() {
            if(turbo.checked){
                clearInterval(timer);
                timer = null;
                timer = setInterval(startAnimation, 50, arr);

            }else{
                clearInterval(timer);
                timer = null;
                timer = setInterval(startAnimation, 250, arr);

            }

        }


};