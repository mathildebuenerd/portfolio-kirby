<?php snippet('header') ?>

<main class="main fadeIn">
    <!-- Presentation text -->
    <section id="introduction">
        <h2 class="hidden-title">Introduction</h2>
        <?= $page->textIntro()->kirbytext() ?>
    </section>

    <!-- Presentation of chili design -->
    <section id="chilidesign">
        <h2 class="hidden-title">Chili design</h2>
        <?= $page->textChili()->kirbytext() ?>
    </section>

    <section id="preview-projects">
        <h2 class="hidden-title">All Projects</h2>
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

                            <p class="project-read-more">
                                <!-- Check la langue pour écris 'Lire plus' ou 'Read more' et ajuster le aria-label -->
                                <?php if($site->language()->name() == 'English'): ?>
                                <a href='<?php echo $subpage->url() ?>'
                                aria-label='Read more about <?php echo $subpage->title() ?>'>Read more</a>
                                <?php endif ?>

                                <?php if($site->language()->name() == 'Français'): ?>
                                    <a href='<?php echo $subpage->url() ?>'
                                    aria-label='En savoir plus sur <?php echo $subpage->title() ?>'>Lire plus</a>
                                <?php endif ?>
                            </p>
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
                        </div>
                    </article>
                <?php endif ?>
            <?php endforeach ?>
        </section>
    </section>
</main>

<?php snippet('footer') ?>
