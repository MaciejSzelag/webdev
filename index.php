<?php $title = "HOME - MJS"; include "includes/head.php";?>

<?php $page_name="Home"; include "includes/navBar.php";?>

<?php $animation_page_title = "Maciej Szelag"; include "includes/enterAnimation.php";?>
<main class="main">
    <div class="container">
        <div class="container-wrap" id="home">
            <?php $span = "Be awesome"; $header_title = "be creative"; $class_arrow = "arrow-down"; include "includes/header.php";?>
            <div class="content">
                <div class="blue-sq bx">
                    <div class="blue-sq-txt">
                        <h1 class="blue-sq-txt-h1">Nothing is <br> impossible</h1>
                        <p class="blue-sq-txt-p">Just if you work hard enouth on it.</p>
                    </div>
                    <p class="sign">Maciej Szelag</p>
                    <div class="img-container">
                        <img src="img/photo_1.png" alt="black dog">
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="img-txt-wrap flex-reverse bx">
                    <div class="img-txt_img">
                        <div class="img-wrap">
                            <img src="img/photo_3.png" alt="laptop">
                        </div>
                    </div>
                    <div class="img-txt_txt">
                        <h1>Responsive websites</h1>
                        <p>Regardless of the device the website will look amazing.</p>
                    </div>

                </div>


            </div>
            <div class="content">
                <div class="img-txt-wrap bx">
                    <div class="img-txt_img">
                        <div class="img-wrap">
                            <img src="img/photo_2.png" alt="laptop">
                        </div>
                    </div>
                    <div class="img-txt_txt">
                        <h1>Web design</h1>
                        <p>I make websites with full commitment.</p>
                    </div>

                </div>


            </div>
            <div class="content" id="about">
                <div class="page-txt-img bx">
                    <!-- <div class="bg-my-pic-3"></div> -->

                    <div class="h1-title-section-wrap">
                        <h1 class="right-h1 mk-1">I am Maciej</h1>
                        <h1 class="right-h1 mk-2">I am Maciej</h1>

                    </div>
            



                    <p class="txt-p1">I am Maciej and I live in Plymouth, UK,
                        I create beautiful websites at affordable rates for businesses and individuals of all shapes and sizes. Not only do I provide beautiful websites for businesses in the Plymouth and Devon area. Any website I design and develop is fully responsive, SEO optimised and GDPR compliant, making sure that your online presence helps you stand our amongst your competitiors.
                    </p>
                        <p class="txt-p1">
                        I have been providing awesome websites for clients in Plymouth and Devon. I'm extremely dedicated to designing and developing the absolute best websites I possible can, for clients like you. Websites that don't only look beautiful but function as they should! 
                        </p>

                </div>

            </div>

            <div class="content">
                <div class="page-txt-img bg-grey-light bx ">
                <div class="h1-title-section-wrap">
                        <h1 class="right-h1 mk-1">I'm actually</h1>
                        <h1 class="right-h1 mk-2">I'm actually</h1>

                    </div>

                    <div class="text-wrap flex-row ">

                        <p class="p-small"> I'm actually entierly self-taught, teaching myself to code over weekends,
                            helping friends and family with digital projects. Over the years, I gained a bunch of
                            experience decided to turn freelance.</p>
                        <div class="text-wrap_img-wrap">
                            <div class="bg-my-pic">This is me!!</div>
                            <div class="bg-my-pic bg-my-pic-2">This is me!!</div>
                        </div>

                    </div>
                </div>
            </div>
           
            <!-- <div class="content">
                <div class="page-txt-img row padding-0">
           


                    
                    <div class="page-txt-img_box">
                        <div class="img_box-wrap"> 
                         <img src="img/photo_8.png" alt="">
                        </div>
                      
                    </div>
                    <div class="page-txt-img_box"></div>
                </div>

            </div> -->

         
            <h1 class="h1_contact">More questions? </h1>
            <?php include "includes/contactForm.php"?>
        </div>

    </div>
</main>
<?php include "includes/footer.php";?>
