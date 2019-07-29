/*jshint esversion: 6 */

window.onload = function () {
    "use strict";

    let decBotton = document.getElementById('bgDecor');
    let txtBox = document.getElementById('txtBox');
    let blingChk = document.getElementById('blingChk');
    let pigLay = document.getElementById('pigLay');
    let malkovitch = document.getElementById('malkovitch');
    let timer = null;

    // function that updates font of textarea

    function changeFont(){
/*
         the computedStyle is always returned in px, so for the first attempt, there is need to convert it to pt
*/
        if(!txtBox.style.fontSize){
            let currentFont = getComputedStyle(txtBox, null).fontSize;
            txtBox.style.fontSize=parseInt(currentFont)*3/4 + 'pt';
        }
        txtBox.style.fontSize=parseInt(txtBox.style.fontSize) + 2 + 'pt';
    }

    // timer function
    decBotton.onclick = function(){
        if(timer === null){
            timer = setInterval(changeFont,500);
        }else{
            clearInterval(timer);
            timer=null;
        }
    };

    blingChk.onchange = function(){
        if(blingChk.checked){
            txtBox.style.fontWeight="bold";
            txtBox.style.color="green";
            txtBox.style.textDecoration="underline";
            document.body.style.backgroundImage = "URL('images/hundred-dollar-bill.jpg')";
        }else{
            txtBox.style.fontWeight="normal";
            txtBox.style.color="black";
            txtBox.style.textDecoration="none";
            document.body.style.backgroundImage = "none";

        }

    };

    //piglay button function
    pigLay.onclick = function(){
        let text = txtBox.value.trim();
        let matched = text.match(/[^aeiouAEIOU/*]*/i)[0];

        if(matched){
            let index = matched.length;
            txtBox.value = text.substring(index)+matched + '-ay';
        }else{
            txtBox.value = txtBox.value + '-ay';
        }

    };

    //malkovitch button function
    malkovitch.onclick = function(){
        let text = txtBox.value.trim();

        let split = text.split(" ");


        if(split.length>0){
            split.forEach(function (elem) {
                let trim = elem.trim();
                if(trim.length>=5){
                    //creating custom regex;
                    let re = new RegExp(trim,"i");
                    text = text.replace(re,"Malkovich");
                 }
            });
            txtBox.value = text;
        }
    };
};
