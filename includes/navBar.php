<nav class="navbar">
    <div class="nav-container">
        <div class="mj-logo">
            <h1>Maciej Szelag</h1>
       
        </div>
        <ul class="nav-ul">
            <?php 
                $href_list = [
                    "Home"=>"index.php",
                    "About"=>"about.php",
                
                    "Contact"=>"contact.php"
                ];
                foreach($href_list as $title => $href){
                    $li = "<li><a href='$href'>$title</a></li>";
                    echo $li;
                }
            ?>
        </ul>
    </div>
</nav>
<div class="aside-float-box-container">
    <h1><?php $page_name; echo $page_name;?></h1>
</div>
