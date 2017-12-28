<?php snippet('header') ?>

  <main class="main" role="main">
    
    <header class="wrap">
      
      <!-- <hr /> -->
    </header>
    
    <section class="text wrap">

    <div class="text-content">

      <h1><?= $page->title()->html() ?></h1>
      
      <div class="intro text">
        <?= $page->year() ?>
      </div>

      <div class="small-description">
        <?= $page->smalldescription() ?>
      </div>
      
      <div class="alltags">
        <div class="myags">
          <?= $page->tags() ?>
        </div>

        <div class="categories">
          <?= $page->categories() ?>
        </div>

        <div class="thematics">
          <?= $page->thematics() ?>
        </div>
      </div>

      <div class="main-description">  
        <?= $page->maindescription() ?>
      </div>

      <div class="external-links">
        <div class="website">  
          <?= $page->website() ?>
        </div>

        <div class="press">  
          <?= $page->press() ?>
        </div>

      <div class="misc">  
          <?= $page->misc() ?>
        </div>
      </div>

    </div>
    

    <div class="allimages">
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


    </section>
    
    <?php snippet('prevnext') ?>

  </main>

<?php snippet('footer') ?>