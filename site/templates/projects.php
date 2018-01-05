<?php snippet('header') ?>

  <main class="main" role="main">
      
    <div class="wrap wide">    
      <?php snippet('showcase') ?>
    </div>

    <section id="controls">
      <form id="discover">
          <h2>Controls</h2>
          <!--
            - on pourrait avoir des mots randoms en placeholder
            - les mots tapés pourraient automatiquement être changés pour coller à des mots clés qui font partie du contenu
            - à l'inverse les mots tapés dans la barre de recherche pourraient s'inclure dans le contenu de la page
          -->
          <div>
              search:
              <input type="search" name="search" placeholder="show me...">
          </div>

          <div>
              mode:
              <input type="radio" name="type-of-display" value="text">text</input>
              <input type="radio" name="type-of-display" value="image">image</input>
          </div>

          show:
          <div>
            <?php
            $alltags = [];
            foreach($page->children() as $subpage):
                ?>
                <?php foreach($subpage->content()->categories()->split(',') as $tag):
            ?>
                    <span>
                      <?php
                        echo '<script>console.log("' . implode($alltags) . '")</script>';

                        $isNew = function ($alltags, $tag) {
                            echo '<script>console.log("salut")</script>';

                            for ($i = 0; $i < sizeOf($alltags); $i++) {
                              echo '<script>console.log("' . $i . '")</script>';

                              if ($alltags[$i] == $tag) {
                                  echo '<script>console.log("false")</script>';
                                  return false;
                              }
                          }
                          echo '<script>console.log("salut")</script>';
                          array_push($alltags, $tag);
                          return true;
                      };



                      if ($isNew === true) {
                          echo html($tag);
                      }

                      ?>
                    </span>
                <?php endforeach ?>
            <?php endforeach ?>
          </div>
      </form>
    </section>


    <!-- <h2>Subpages</h2> -->
<section id="preview-projects">
  <?php foreach($page->children() as $subpage): ?>
  <article class="single-project draggable">
    <a href="<?php echo $subpage->url() ?>">
      
      <div class="project-main-image">
        <?php echo html($subpage->image()) ?>
      </div>

      <h3 class="project-title">
        <?php echo html($subpage->title()) ?>
      </h3>

        <div class="alltags">
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

        </div> <!-- all tags -->
    </a>
  </article>
  <?php endforeach ?>
</section>

  </main>

<?php echo js('assets/js/homelayout.js') ?>

<?php snippet('footer') ?>
