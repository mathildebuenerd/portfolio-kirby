  <footer class="footer cf">

      <section id="contact-me">
          <h3 class="hidden-title">Contact</h3>
          <?= $site->find('projects')->bandeauContact()->kirbytext() ?>
      </section>

      <section id="details-contact">
          <div class="single-footer" id="clients">
              <h4><?= $site->find('projects')->clientsTitle()->kirbytextRaw() ?></h4>
              <?= $site->find('projects')->clients()->kirbytext() ?>
          </div>
          <div class="single-footer" id="contact-infos">
              <h4><?= $site->find('projects')->contactInfosTitle()->kirbytextRaw() ?></h4>
              <?= $site->find('projects')->contactInfos()->kirbytext() ?>
          </div>
          <div class="single-footer" id="about-me">
              <h4><?= $site->find('projects')->aboutTitle()->kirbytextRaw() ?></h4>
              <?= $site->find('projects')->aboutMe()->kirbytext() ?>
          </div>
      </section>

  </footer>


<!--  --><?php //echo js('assets/js/heartcolor.js') ?>
<!--  --><?php //echo js('assets/js/fadeIn.js') ?>


</body>
</html>