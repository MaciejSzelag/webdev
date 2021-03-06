
<?php
 global $connection;
 $DBname="devms";
 include "Connection/mysqli_connect.php";
?>

<?php 
if(isset($_POST["submit"])){
    $quest_name = $_POST["questname"];
    $quest_email = $_POST["questemail"];
    $quest_text_question = $_POST["textquestion"];
    $query = "INSERT INTO contactformquestions(questname, questemail,textquestion) VALUE ('$quest_name','$quest_email','$quest_text_question')";
    $result = mysqli_query($connection, $query);
        if(!$result){
            die("Query Failed ".mysqli_error($result));
        }else{
            echo '<div class="alert alert-success" id="close-alert">
                    Thank you! I will answer as quick as possible!
                 </div>';
        };
}

?>