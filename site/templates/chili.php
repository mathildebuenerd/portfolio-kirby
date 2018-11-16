<?php snippet('header') ?>

    <main class="main single-page" role="main">

        <header class="wrap">
            <h1><?= $page->title()->html() ?></h1>
            <hr>
        </header>

        <div class="text wrap">
            <section id="definition">
                <h1><?= $page->chiliDefinitionTitle()->kirbytext() ?></h1>
                <?= $page->chiliDefinition()->kirbytext() ?>
            </section>

            <section id="chili-principles">
                <h1><?= $page->chiliPrinciplesTitle()->kirbytext() ?></h1>
                <?= $page->chiliPrinciples()->kirbytext() ?>
            </section>
        </div>

    </main>

<?php //snippet('footer') ?>