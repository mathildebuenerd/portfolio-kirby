  <footer class="footer cf">

      <section id="contact-me">
          <?= $page->bandeauContact() ?>
      </section>

      <section id="details-contact">
          <div class="single-footer" id="clients">
              <?= $page->clients() ?>
          </div>
          <div class="single-footer" id="contact-infos">
              <?= $page->contactInfos() ?>
          </div>
          <div class="single-footer" id="about-me">
              <?= $page->aboutMe() ?>
          </div>
      </section>

  </footer>


<!--  --><?php //echo js('assets/js/heartcolor.js') ?>
<!--  --><?php //echo js('assets/js/fadeIn.js') ?>


</body>
</html>