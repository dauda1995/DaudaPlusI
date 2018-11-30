<!doctype html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <h3></h3>
        <form>
            <input type='text' placeholder='enter name' id='name'>
            <input type='password' placeholder='enter password' id='password'>
            <input type='cpassword' placeholder='enter password again!' id='cpassword'>
            <button id='signup'>Sign up</button>
        </form>
        <script>
                function userDetails() {
                let name = document.getElementById('name').value();       
                let password = document.getElementById('password').value();       
                let confirmPassword = document.getElementById('cpassword').value();       
                }
            
                function redirectUser() {
                    document.getElementById('signup').click(function(){
                        userDetails();                                    
                    });
                }
            
        </script>
    </body>
</html>