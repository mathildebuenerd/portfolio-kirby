<?php snippet('header') ?>

<?php echo css('@auto') ?>

<main class="main" role="main">

    <header class="wrap">

        <!-- <hr /> -->
    </header>

    <!--      <section class="arrows">-->
    <!--          <a id="left-arrow">❮</a>-->
    <!--          <a id="right-arrow">❯</a>-->
    <!--      </section>-->

    <section class="text wrap">

        <a href="<?php echo $site->homePage()->url() ?>">
            <div id="return" class="leftbar">
                <span>❮</span>
            </div>
        </a>

        <div class="text-content">

            <div id="title-plus-year">
                <h1><?= $page->title()->html() ?></h1>

                <div class="date">
                    <?= $page->year() ?>
                </div>
            </div>



            <div class="small-description">
                <?= $page->smalldescription() ?>
            </div>


            <div class="main-description">
                <?= $page->maindescription() ?>
            </div>

            <div class="external-links">

                <!-- Website -->

                <?php if ($page->website()->isNotEmpty()): ?>
                    <div class="website">
                        <a href="<?= $page->website() ?>" target="_blank">website</a>
                    </div>
                <?php endif ?>

                <!-- Video -->

                <?php if ($page->video()): ?>
                    <div class="video">
                        <a href="<?= $page->video() ?>" target="_blank">video</a>
                    </div>
                <?php endif ?>

                <!-- Other links -->

                <div class="other-links">
                    <?php foreach($page->links()->yaml() as $links): ?>
                        <div class="single-link">
                            <a href="<?= $links['url']?>" class="single-link-label" target="_blank"><?= $links['type'] ?></a>
                        </div>
                    <?php endforeach ?>
                </div>




            </div> <!-- external links -->

            <div class="press">
                <?php foreach($page->press()->yaml() as $press): ?>
                    <div class="single-press">
                        <p class="newspaper"><?= $press['newspaper'] ?></p>
                        <a href="" class="artcl"><?= $press['artcl'] ?></a>
                        <p class="url"><?= $press['url'] ?></p>
                        <p class="language"><?= $press['language'] ?></p>
                    </div>
                <?php endforeach ?>

            </div>

            <div class="misc">
                <?= $page->misc() ?>
            </div>


        </div>


        <div id="container-for-hiding-scrollbar-project">
            <div class="allimages fadeIn">
                <?php
                // Images for the "project" template are sortable. You
                // can change the display by clicking the 'edit' button
                // above the files list in the sidebar.
                foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
                    <figure>
                        <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
                    </figure>
                <?php endforeach ?>
            </div> <!-- allimages -->
        </div>

        <div class="alltags">
            <div class="tags">
                <!-- La fonction split permet de séparer chaque tag -->
                <?php foreach($page->content()->tags()->split(',') as $tag): ?>
                    <span>
          <?php echo html($tag) ?>
        </span>
                <?php endforeach ?>

            </div>

            <div class="thematics">
                <?php foreach($page->content()->thematics()->split(',') as $thematic): ?>
                    <span>
          <?php echo html($thematic) ?>
        </span>
                <?php endforeach ?>
            </div>

            <div class="categories">
                <?php foreach($page->content()->categories()->split(',') as $category): ?>
                    <span>
          <?php echo html($category) ?>
        </span>
                <?php endforeach ?>

            </div>
        </div>

    </section>

    <!--    <section id="social-media">-->
    <!--        <a href="https://www.instagram.com/mathildebuenerd" target="_blank">-->
    <!--            <i class="fa fa-instagram"></i>-->
    <!--        </a>-->
    <!--        <a href="https://twitter.com/mathildebuenerd" target="_blank">-->
    <!--            <i class="fa fa-twitter"></i>-->
    <!--        </a>-->
    <!--        <a href="https://github.com/mathildebuenerd" target="_blank">-->
    <!--            <i class="fa fa-github"></i>-->
    <!--        </a>-->
    <!--    </section>-->


    <aside class="rightbar"></aside>

    <?php snippet('prevnext') ?>

</main>

<?php echo js('assets/js/templates/project.js') ?>
<?php snippet('footer') ?>


