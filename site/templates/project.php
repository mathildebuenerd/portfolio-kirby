<?php snippet('header') ?>

<?php echo css('@auto') ?>

  <main class="main" role="main">
    
    <header class="wrap">
      
      <!-- <hr /> -->
    </header>
    
    <section class="text wrap">

    <div class="text-content draggable">

      <h1><?= $page->title()->html() ?></h1>
      
      <div class="intro text">
        <?= $page->year() ?>
      </div>

      <div class="small-description">
        <?= $page->smalldescription() ?>
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


        <div class="alltags">
            <div class="tags">
                <!-- La fonction split permet de séparer chaque tag -->
                <?php foreach($page->content()->tags()->split(',') as $tag): ?>
                    <span>
          <?php echo html($tag) ?>
        </span>
                <?php endforeach ?>

            </div>

            <div class="thematics">
                <?php foreach($page->content()->thematics()->split(',') as $thematic): ?>
                    <span>
          <?php echo html($thematic) ?>
        </span>
                <?php endforeach ?>
            </div>

            <div class="categories">
                <?php foreach($page->content()->categories()->split(',') as $category): ?>
                    <span>
          <?php echo html($category) ?>
        </span>
                <?php endforeach ?>

            </div>
        </div>

    </section>
    
    <?php snippet('prevnext') ?>

  </main>

<?php snippet('footer') ?>