  <footer class="footer cf">

      <section id="contact-me">
          <?= $site->find('projects')->bandeauContact()->kirbytext() ?>
      </section>

      <section id="details-contact">
          <div class="single-footer" id="clients">
              <h4><?= $page->clientsTitle()->kirbytextRaw() ?></h4>
              <?= $page->clients()->kirbytext() ?>
          </div>
          <div class="single-footer" id="contact-infos">
              <h4><?= $page->contactInfosTitle()->kirbytextRaw() ?></h4>
              <?= $page->contactInfos()->kirbytext() ?>
          </div>
          <div class="single-footer" id="about-me">
              <h4><?= $page->aboutTitle()->kirbytextRaw() ?></h4>
              <?= $page->aboutMe()->kirbytext() ?>
          </div>
      </section>

  </footer>


<!--  --><?php //echo js('assets/js/heartcolor.js') ?>
<!--  --><?php //echo js('assets/js/fadeIn.js') ?>


</body>
</html>