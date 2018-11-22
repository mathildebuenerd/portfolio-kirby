<?php snippet('header') ?>

<?php echo css('@auto') ?>

<main class="main" role="main">


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
                <?= $page->smalldescription()->kirbytext() ?>
            </div>


            <section class="main-description">
                <?php foreach($page->descriptionparagraphs()->yaml() as $singleEntryP): ?>
                    <div class="single-description-paragraph">
                        <?= kirbytext($singleEntryP['singleparagraph']) ?>

                        <!-- on checke s'il y a bien une image associée -->
                        <?php if ($singleEntryP['associatedimage'] != ""): ?>
                            <figure>


                                <?php if($image = $page->image($singleEntryP['associatedimage'])): ?>
                                    <a target="_blank" href="<?php echo $image->url() ?>">
                                        <?php echo $image->html() ?>
                                    </a>

                                 <?php endif?>

                                <?php if ($singleEntryP['figcaptionimage'] != ""): ?>
                                <figcaption>
                                    <?= $singleEntryP['figcaptionimage'] ?>
                                </figcaption>
                                <?php endif ?> <!-- check up figcaption -->
                            </figure>
                        <?php endif ?> <!-- check up image -->
                    </div> <!-- single description paragraph -->
                <?php endforeach ?>
            </section>



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
                <?= $page->misc()->kirbytext() ?>
            </div>


        </div>


        <div id="container-for-hiding-scrollbar-project">
            <div class="allimages fadeIn">
                <?php
                // Images for the "project" template are sortable. You
                // can change the display by clicking the 'edit' button
                // above the files list in the sidebar.
//                foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
                    <figure>
                        <img src="<?= $page->images()->first()->url() ?>" alt="<?= $page->title()->html() ?>" />
                    </figure>
<!--                --><?php //endforeach ?>
            </div> <!-- allimages -->
        </div>

<!--        <div class="alltags">-->
<!--            <div class="tags">-->
<!--                <!-- La fonction split permet de séparer chaque tag -->-->
<!--                --><?php //foreach($page->content()->tags()->split(',') as $tag): ?>
<!--                    <span>-->
<!--          --><?php //echo html($tag) ?>
<!--        </span>-->
<!--                --><?php //endforeach ?>
<!---->
<!--            </div>-->
<!---->
<!--            <div class="thematics">-->
<!--                --><?php //foreach($page->content()->thematics()->split(',') as $thematic): ?>
<!--                    <span>-->
<!--          --><?php //echo html($thematic) ?>
<!--        </span>-->
<!--                --><?php //endforeach ?>
<!--            </div>-->
<!---->
<!--            <div class="categories">-->
<!--                --><?php //foreach($page->content()->categories()->split(',') as $category): ?>
<!--                    <span>-->
<!--          --><?php //echo html($category) ?>
<!--        </span>-->
<!--                --><?php //endforeach ?>
<!---->
<!--            </div>-->
<!--        </div>-->

    </section>

</main>

<?php echo js('assets/js/templates/project.js') ?>
<?php //snippet('footer') ?>


