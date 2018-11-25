<?php snippet('header') ?>

    <main class="main single-page">

        <header class="wrap">
            <h1><?= $page->title()->html() ?></h1>
            <hr>
        </header>

        <div class="text wrap">
            <section id="definition">
                <h2><?= $page->chiliDefinitionTitle()->kirbytextRaw() ?></h2>
                <?= $page->chiliDefinition()->kirbytext() ?>
            </section>

            <section id="chili-principles">
                <h2><?= $page->chiliPrinciplesTitle()->kirbytextRaw() ?></h2>
                <?= $page->chiliPrinciples()->kirbytext() ?>
            </section>
        </div>

    </main>

<?php //snippet('footer') ?>