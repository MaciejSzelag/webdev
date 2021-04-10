<?php $title = "Login"; include "includes/head.php";?>
<?php $page_name="Login"; include "includes/navBar.php";?>


<div class="log-wrap">
<div class="form-header">
    <h1>Login</h1>


</div>


    <div class="form-wrap">
        <div class="form-container">
                <form action="">
                        <div class="form-group">
                            <label for="email"> Email</label>
                            <input type="email" name="user_email">
                        </div>
                        <div class="form-group">
                            <label for="passwort"> Password</label>
                            <input type="password" name="user_password">
                        </div>
                        <div class="form-group">
                             <input type="submit" name="login" value="Login">
                        </div>
                </form>
        </div>

    </div>

</div>
<?php include "includes/footer.php";?>