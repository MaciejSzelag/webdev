<nav class="navbar">
    <div class="nav-container">
        <div class="mj-logo">
            <h1 class='msN'>Maciej Szelag</h1>
       
        </div>
        <ul class="nav-ul nav-ul-media">
            <?php 
                $href_list = [
                    "Home"=>"index.php",
                    // "About"=>"about.php",
                    "Contact"=>"contact.php"
                ];
                foreach($href_list as $title => $href){
                    $li = "<li><a href='$href' class='a-hide'>$title</a></li>";
                    echo $li;
                }
            ?>
        </ul>
        <div class="bars-container ">
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
    <div class="scroll-progress"></div>
</nav>


<div class="aside-float-box-container">
    <h1><?php $page_name; echo $page_name;?></h1>
</div>
