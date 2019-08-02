/*jshint esversion: 6 */

(function () {
    "use strict";

    window.onload = function () {

        String.prototype.filter = function(str){
            let strArr = this.trim().split(" ");
            let strip = strArr.filter(function (elem) {

                    return elem !== str;
            });

            return strip.join(' ');

        };

        console.log("******* Filter for String *********");
        console.log("This house is not nice!".filter('not'));

        Array.prototype.bubbleSort = function() {
            const arr = this.slice(0);
            if(this.length<2){
                return this;
            }

            let swap = function(b){
                [arr[b-1],arr[b]]=[arr[b],arr[b-1]];
            };

            for(let i =0; i<this.length;i++){
                for(let j =0; j<arr.length-i;j++) {

                    if (arr[j] < arr[j-1]) {
                        swap(j);
                    }
                }

            }

            return arr;


        };
        console.log("******* BubbleSort *********");

        console.log([6,4,0, 3,-2,1].bubbleSort());

    };


})();