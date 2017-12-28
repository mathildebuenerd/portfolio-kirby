<?php snippet('header') ?>

  <main class="main" role="main">
    
    <header class="wrap">
      <h1><?= $page->title()->html() ?></h1>

      <div class="intro text">
        <?= $page->year() ?>
      </div>
      <!-- <hr /> -->
    </header>
    
    <section class="text wrap">

    <div class="small-description">
      <?= $page->smalldescription() ?>
    </div>
    
    <div class="long-description">  
      <?= $page->text()->kirbytext() ?>
    </div>

      <?php
      // Images for the "project" template are sortable. You
      // can change the display by clicking the 'edit' button
      // above the files list in the sidebar.
      foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
        <figure>
          <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
        </figure>
      <?php endforeach ?>
      
    </section>
    
    <?php snippet('prevnext') ?>

  </main>

<?php snippet('footer') ?>