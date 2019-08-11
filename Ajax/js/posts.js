/*jshint esversion: 6 */

$(function () {
    "use strict";
    let det;


    $("#loader").hide();

    $(document).ajaxStart(function() { $("#loader").show(); })
               .ajaxStop(function() { $("#loader").hide(); });

    $('#submitBtn').on("click", function () {
        $('#display').empty();
        let id = $('[name=userid]').val();
        $.get('http://jsonplaceholder.typicode.com/users',{"id": id})
            .done(successFunc)
            .fail(failFunc);
    });


    function successFunc(data) {
        if(data.length==0){
            alert("NO DATA FOUND! PLEASE TRY ANOTHER ID");
            return;
        }
        det = $('<div>');

        det.append('<h2>BLOGGER\'S DETAILS</h2>');
        det.append('<p><b>Name:</b> '+ data[0].name + ' '+'<b>Email:</b> '+ data[0].email + '<b> Address:</b> '+ data[0].address.street+', '+ data[0].address.city+', '+ data[0].address.suite + '</p>');
        det.append('<h2>POSTS</h2>');
        $.get('http://jsonplaceholder.typicode.com/posts',{"userId":data[0].id})
            .done(posts_successFunc)
            .fail(failFunc);
    }
    function posts_successFunc(data) {

        data.forEach(function (elem) {
            det.append('<p><b>Title:</b> '+elem.title + '</p>');
            det.append('<p>' + elem.body + '</p>');
            det.append('<div class="comments"><input type=\"button\" name=\"'+elem.id+'\" value=\"View Comments\">'+'</div>');

        });

        $('#display').append(det);

    }


    $('#display').on("click", 'input', function () {

        let post_id = this.name;
        $.get('http://jsonplaceholder.typicode.com/comments',{"postId": post_id})
            .done(data => {
                let comments = $('<div>');

                $('.comments > input').siblings().remove();
                data.forEach(function (elem) {
                    comments.append('<p> '+ elem.body + '</p>');
                    comments.append('<p>By: '+elem.name + '</p>');
                    comments.append('<p>--------------------------------------------------</p>');
                });
                $(this).after(comments);

            })
            .fail(failFunc);
    });

    function failFunc(xhr, status, exception) {
        console.log(xhr, status, exception);
    }
});