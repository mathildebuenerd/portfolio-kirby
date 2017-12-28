<?php snippet('header') ?>

  <main class="main" role="main">

    <header class="wrap">
      <h1><?= $page->title()->html() ?></h1>
      <div class="intro text">
        <?= $page->text()->kirbytext() ?>
      </div>
      <hr />
    </header>
      
    <div class="wrap wide">    
      <?php snippet('showcase') ?>
    </div>

    <section id="controls">
      <!-- <div id="mode"> 
      mode: 
        <div>text</div>
        <div>image</div>
      </div> -->
      <form id="discover">
          <h2>Search</h2>
          <!--
            - on pourrait avoir des mots randoms en placeholder
            - les mots tapés pourraient automatiquement être changés pour coller à des mots clés qui font partie du contenu
            - à l'inverse les mots tapés dans la barre de recherche pourraient s'inclure dans le contenu de la page
          -->
          <input type="search" name="search" placeholder="show me...">

          mode:
            <input type="radio" name="type-of-display" value="text">text</input>
            <input type="radio" name="type-of-display" value="image">image</input>

          show:

      </form>


    </section>


    <!-- <h2>Subpages</h2> -->
<section id="preview-projects">
  <?php foreach($page->children() as $subpage): ?>
  <article class="single-project">
    <a href="<?php echo $subpage->url() ?>">
      
      <div class="project-main-image">
        <?php echo html($subpage->image()) ?>
      </div>

      <h3 class="project-title">
        <?php echo html($subpage->title()) ?>
      </h3>

      <div class="tags">
      <!-- La fonction split permet de séparer chaque tag -->
        <?php foreach($subpage->content()->tags()->split(',') as $tag): ?>
        <span>
          <?php echo html($tag) ?>
        </span>
        <?php endforeach ?>

      </div>

      <div class="thematics">
        <?php foreach($subpage->content()->thematics()->split(',') as $thematic): ?>
        <span>
          <?php echo html($thematic) ?>
        </span>
        <?php endforeach ?>
      </div>

      <div class="categories">
        <?php foreach($subpage->content()->categories()->split(',') as $category): ?>
        <span>
          <?php echo html($category) ?>
        </span>
        <?php endforeach ?>

      </div>
    </a>
  </article>
  <?php endforeach ?>
</section>

  </main>

<?php snippet('footer') ?>