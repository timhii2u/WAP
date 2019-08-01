/*jshint esversion: 6 */

(function () {
    "use strict";

    window.onload = function () {

        console.log("********** Reverse an Array ********");

        console.log(reverseArray(["A", "B", "C"]));
       let arrayValue = [1, 2, 3, 4, 5];
       reverseArrayInPlace(arrayValue);
       console.log(arrayValue);

        console.log("********** A List********");

        console.log(arrayToList([10, 20,30]));

       console.log(listToArray(arrayToList([10, 20, 30])));

       console.log(prepend(10, prepend(20, null)));

       console.log(nth(arrayToList([10, 20, 30]), 1));


        console.log("********** Deep comparison********");


        let obj = {here: {is: "an"}, object: 2};

        console.log(deepEqual(obj, obj));

        console.log(deepEqual(obj, {here: 1, object: 2}));

        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    };

    function reverseArray(arr){
        let revArr = [];
        let index = -1;
        for(let i=arr.length-1; i >=0; i--){
            revArr[++index] = arr[i];
        }
        return revArr;
    }

    function reverseArrayInPlace(arr){
        const tempArr = arr.slice(0);
        let index = -1;
        for(let i=tempArr.length-1; i >=0; i--){
            arr[++index] = tempArr[i];
        }
    }

    function arrayToList(arr){
        let c = {};
        if(arr.length<1){return arr;}

        if(arr.length<2){
            return {
                value: arr[0],
                rest: null
            };
        }

        c.value = arr[0];
        c.rest = arrayToList(arr.slice(1));

        return c;

    }
    function listToArray(obj){
        let arr = [];

        if(!obj){return obj;}

        if(!obj.rest){
            return obj.value;
        }
        arr[0] = obj.value;

        return arr.concat(listToArray(obj.rest));

    }

    function prepend(elem,list){
        let c = {};
        c.rest = list;
        c.value = elem;

        return c;
    }

    function nth(list,num){
       let arr = listToArray(list);

       return arr[num];
    }

    function deepEqual(val1,val2){
        let v1 =typeof(val1);
        let v2 =typeof(val2);

        if(val1 === val2){
            return true;
        }

        if(v1 === "object" && v2 === "object"){
            if(!val1||!val2){
                return false;
            }
            let keys1 = Object.keys(val1);
            let keys2 = Object.keys(val2);

            if(keys1.length !== keys2.length){
                return false;
            }else{
                return keys1.every(function(key){
                    return deepEqual(val1[key], val2[key]);
                });
            }
        }else{
            return false;
        }

    }

})();