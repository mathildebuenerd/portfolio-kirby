<?php snippet('header') ?>

<main class="main fadeIn" role="main">

    <div class="wrap wide">
        <?php snippet('showcase') ?>
    </div>

    <div id="container-for-hiding-scrollbar">
        <section id="preview-projects">

            <?php foreach ($page->children() as $subpage): ?>
                <article class="single-project draggable" id="<?php echo html($subpage->slug()) ?>">
                    <a href="<?php echo $subpage->url() ?>">

                        <div class="project-main-image">
                            <?php echo html($subpage->images()->first()) ?>
                        </div>

                        <h3 class="project-title">
                            <?php echo html($subpage->title()) ?>
                        </h3>

                        <div class="alltags">
                            <div class="tags">
                                <!-- La fonction split permet de séparer chaque tag -->
                                <?php foreach ($subpage->content()->tags()->split(',') as $tag): ?>
                                    <span>
                                        <?php echo html($tag) ?>
                                    </span>
                                <?php endforeach ?>

                            </div>

                            <div class="thematics">
                                <?php foreach ($subpage->content()->thematics()->split(',') as $thematic): ?>
                                    <span>
                                        <?php echo html($thematic) ?>
                                     </span>
                                <?php endforeach ?>
                            </div>

                            <div class="categories">
                                <?php foreach ($subpage->content()->categories()->split(',') as $category): ?>
                                    <span>
                                        <?php echo html($category) ?>
                                     </span>
                                <?php endforeach ?>

                            </div>

                        </div> <!-- all tags -->
                    </a>
                </article>
            <?php endforeach ?>

        </section>
    </div>

</main>

<aside class="rightbar"></aside>
<aside class="leftbar"></aside>


<?php snippet('footer') ?>

<?php echo js('assets/js/homelayout.js') ?>

