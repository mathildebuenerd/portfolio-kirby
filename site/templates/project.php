<?php snippet('header') ?>

<?php echo css('@auto') ?>

<main class="main">
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
                <h2 class="hidden-title">Project description</h2>
                <?php foreach($page->descriptionparagraphs()->yaml() as $singleEntryP): ?>
                    <div class="single-description-paragraph">
                        <?= kirbytext($singleEntryP['singleparagraph']) ?>

                        <!-- on checke si y a bien une image associée -->
                        <?php if ($singleEntryP['associatedimage'] != ""): ?>
                            <figure>
                                <?php if($image = $page->image($singleEntryP['associatedimage'])): ?>
                                    <a target="_blank" href="<?php echo $image->url() ?>">
                                        <!-- Pas de texte alternatif car l'image est suivie d'une figcaption-->
                                        <img src="<?php echo $image->url() ?>" alt="">
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
                    <?php foreach($page->links()->yaml() as $link): ?>
                        <div class="single-link">
                            <a
                                href="<?= $link['url']?>"
                                class="single-link-label"
                                target="_blank"
                                data-type="<?= strtolower($link['type']) ?>"
                            >
                                <?= $link['type'] ?>
                            </a>
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
                    <figure>
                        <img src="<?= $page->images()->first()->url() ?>" alt="<?= $page->title()->html() ?>" />
                    </figure>
            </div> <!-- allimages -->
        </div>
    </section>
</main>

<?php echo js('assets/js/templates/project.js') ?>
<?php //snippet('footer') ?>


