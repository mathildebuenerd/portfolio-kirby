<?php snippet('header') ?>

    <main class="main single-page">

        <div class="wrap">

            <header>
                <h1><?= $page->title()->html() ?></h1>
                <hr />
            </header>

            <div id="about-picture">
              <?php if(strtolower($site->language()->name()) == 'english'): ?>
                <img src="<?php echo url('assets/images/talk-gsgs18.png') ?>" alt="Mathilde Buenerd giving a talk at the Gamification and Serious Games Symposium in 2018">
              <?php endif ?>

              <?php if(strtolower($site->language()->name()) == 'français'): ?>
                <img src="<?php echo url('assets/images/talk-gsgs18.png') ?>" alt="Mathilde Buenerd donnant une conférence au Gamification and Serious Games Symposium en 2018">
              <?php endif ?>
            </div>

            <section id="biography" class="text">
                <h2><?= $page->bioTitle()->kirbytextRaw() ?></h2>
                <?= $page->biography()->kirbytext() ?>
            </section>

            <section class="text single-reference" id="publications">
                <h2><?= $page->publicationsTitle()->kirbytextRaw() ?></h2>
                <?= $page->publications()->kirbytext() ?>
            </section>

            <section class="text single-reference" id="press">
                <h2><?= $page->pressTitle()->kirbytextRaw() ?></h2>
                <?= $page->press()->kirbytext() ?>
            </section>

            <section class="text single-reference" id="talks">
                <h2><?= $page->talkTitle()->kirbytextRaw() ?></h2>
                <?= $page->talks()->kirbytext() ?>
            </section>

//             <section class="text" id="cv">
//                 <h2>CV</h2>
//                 <?= $page->cv()->kirbytext() ?>
//             </section>

        </div>

    </main>

<?php snippet('footer') ?>
