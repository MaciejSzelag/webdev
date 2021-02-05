<nav class="navbar">
    <div class="nav-container">
        <div class="mj-logo">
            <h1>MJS</h1>
        </div>
        <ul class="nav-ul">
            <?php 
                $href_list = [
                    "Home"=>"index.php",
                    "About"=>"about.php",
                    "Work"=>"work.php",
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
