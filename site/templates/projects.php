<?php snippet('header') ?>

<main class="main fadeIn" role="main">

    <!-- Presentation text -->
    <section id="introduction">
        <?= $page->textIntro()->kirbytext() ?>
    </section>

    <!-- Presentation of chili design -->
    <section id="chilidesign">
        <p><?= $page->textChili()->kirbytext() ?></p>

    </section>



    <section id="preview-projects">

        <section id="featured-projects">

            <h2 id="main-projects" class="title-projects"><?= $page->titleFeaturedProjects()->kirbytextRaw() ?></h2>

            <?php foreach ($page->children() as $subpage): ?>
                <?php if ($subpage->content()->featuredProject()->isTrue()): ?>
                    <article class="single-project" id="<?php echo html($subpage->slug()) ?>">
                        <div class="project-main-image">
                            <a href="<?php echo $subpage->url() ?>">
                                <?php echo html($subpage->images()->first()) ?>
                            </a>
                        </div>

                        <div class="project-description">

                            <div class="categories">
                                <?php foreach ($subpage->content()->categories()->split(',') as $category): ?>
                                    <span>
                                        <?php
                                            echo html($category)
                                        ?>
                                     </span>
                                <?php endforeach ?>
                            </div>

                            <h3 class="project-title">
                                <a href="<?php echo $subpage->url() ?>">
                                    <?php echo html($subpage->title()) ?>
                                </a>
                            </h3>

                            <p class="project-short-description">
                                <?php echo html($subpage->smalldescription()) ?>
                            </p>

                            <p class="project-read-more"><a href="<?php echo $subpage->url() ?>">Read more</a></p>

                            <!--                            <div class="alltags">-->
                            <!--                                <div class="tags">-->
                            <!--                                    <!-- La fonction split permet de séparer chaque tag -->
                            <!--                                    --><?php //foreach ($subpage->content()->tags()->split(',') as $tag): ?>
                            <!--                                        <span>-->
                            <!--                                        --><?php //echo html($tag) ?>
                            <!--                                    </span>-->
                            <!--                                    --><?php //endforeach ?>
                            <!---->
                            <!--                                </div>-->
                            <!---->
                            <!--                                <div class="thematics">-->
                            <!--                                    --><?php //foreach ($subpage->content()->thematics()->split(',') as $thematic): ?>
                            <!--                                        <span>-->
                            <!--                                        --><?php //echo html($thematic) ?>
                            <!--                                     </span>-->
                            <!--                                    --><?php //endforeach ?>
                            <!--                                </div>-->
                            <!---->
                            <!--                                -->
                            <!---->
                            <!--                            </div> <!-- all tags -->
                        </div>
                    </article>
                <?php endif ?>
            <?php endforeach ?>

        </section>

        <section id="other-projects">

            <h2 id="other-projects-title" class="title-projects"><?= $page->titleOtherProjects()->kirbytextRaw() ?></h2>

            <?php foreach ($page->children() as $subpage): ?>
                <?php if ($subpage->content()->featuredProject()->isFalse()): ?>
                    <article class="single-other-project" id="<?php echo html($subpage->slug()) ?>">
                        <div class="project-main-image">
                            <a href="<?php echo $subpage->url() ?>">
                                <?php echo html($subpage->images()->first()) ?>
                            </a>
                        </div>

                        <div class="project-description">

                            <div class="categories">
                                <?php foreach ($subpage->content()->categories()->split(',') as $category): ?>
                                    <span>
                                        <?php
                                        echo html($category)
                                        ?>
                                     </span>
                                <?php endforeach ?>
                            </div>

                            <h3 class="project-title">
                                <a href="<?php echo $subpage->url() ?>">
                                    <?php echo html($subpage->title()) ?>
                                </a>
                            </h3>

                            <p class="project-short-description">
                                <?php echo html($subpage->smalldescription()) ?>
                            </p>

                            <p class="project-read-more"><a href="<?php echo $subpage->url() ?>">Read more</a></p>

                            <!--                            <div class="alltags">-->
                            <!--                                <div class="tags">-->
                            <!--                                    <!-- La fonction split permet de séparer chaque tag -->
                            <!--                                    --><?php //foreach ($subpage->content()->tags()->split(',') as $tag): ?>
                            <!--                                        <span>-->
                            <!--                                        --><?php //echo html($tag) ?>
                            <!--                                    </span>-->
                            <!--                                    --><?php //endforeach ?>
                            <!---->
                            <!--                                </div>-->
                            <!---->
                            <!--                                <div class="thematics">-->
                            <!--                                    --><?php //foreach ($subpage->content()->thematics()->split(',') as $thematic): ?>
                            <!--                                        <span>-->
                            <!--                                        --><?php //echo html($thematic) ?>
                            <!--                                     </span>-->
                            <!--                                    --><?php //endforeach ?>
                            <!--                                </div>-->
                            <!---->
                            <!--                                -->
                            <!---->
                            <!--                            </div> <!-- all tags -->
                        </div>
                    </article>
                <?php endif ?>
            <?php endforeach ?>
        </section>

    </section>


</main>




<?php snippet('footer') ?>
