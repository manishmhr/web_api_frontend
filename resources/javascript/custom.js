$(document).ready(
    function(){
        $('#registerForm').submit(function(event){
            event.preventDefault();
            var myFromData = {
                username : $('#username').val(),
                address : $('#address').val(),
                password: $('#password').val()
            }
        })

        $.ajax({

// v1 = version
// users = route in backend

            url: 'http://localhost:3000/v1/users',
            method : 'POST',
            contentType: 'application/json',
            data: JSON.stringify(myFromData),
            success : function(result,status){
            }
            error : function (jqXHR,status){
            }
        })
    }
)