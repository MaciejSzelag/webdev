<?php
 global $connection;
 $DBname="devms";
//  $DBname="msweb"; nazwa bazy danych do mojej strony
 include "Connection/mysqli_connect.php";
?>

<div class="alert1">
    <?php 
if(isset($_POST["submit"])){

    $quest_name = $_POST["questname"];
    $quest_email = $_POST["questemail"];
    $quest_text_question = $_POST["textquestion"];

//nazwa tabeli do kontact form
    $query = "INSERT INTO contactformquestions(questname, questemail,textquestion) VALUE ('$quest_name','$quest_email','$quest_text_question')";
    $result = mysqli_query($connection, $query);

        if(!$result){
            echo '<div class="alert alert-warning" >
            <div class="close-btn" id="close-alert">Close</div>
            Sorry! At the moment we are unavaible! Try later.
            </div>';
            // die("Query Failed ".mysqli_error($result));
        }elseif($result){
            echo '<div class="alert alert-success" >
            <div class="close-btn" id="close-alert">Close</div>
            Thank you! I will answer as quick as possible!
            </div>';
        };
}


?>
</div>
<div class="content">
    <div class="page-txt-img">


        <div class="blue-sq">
       
            <div class="contact-form">
                <form action="contact.php" method="POST">
                    <div class="input-wrap">
                        <label for="fname">Name:</label><br>
                        <input class="input" type="text" name="questname" placeholder="Enter name" required>
                    </div>
                    <div class="input-wrap">
                        <label for="femail">Your email:</label><br>
                        <input class="input" type="email" name="questemail" placeholder="Enter email" required>
                    </div>
                    <div class="input-wrap">
                    <label for="fmessege">Question</label><br>
                        <textarea class="input textarea" type="text" name="textquestion"
                            placeholder="Enter your question" rows="10" cols="50" required></textarea>
                    </div>
                    <div class="input-wrap">
                        <input class="submit" type="submit" name="submit" value="Submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<h1 class="h1_contact"><a href="mailto:contact@msweb.co.uk?subject=Maciej Szelag Webpage!">contact@msweb.co.uk</a></h1>
<script src="js/alerts.js"></script>
