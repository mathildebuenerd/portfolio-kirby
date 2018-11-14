  <footer class="footer cf">

      <section id="contact-me">
          <?= $page->bandeauContact()->kirbytext() ?>
      </section>

      <section id="details-contact">
          <div class="single-footer" id="clients">
              <h4>I have worked with</h4>
              <?= $page->clients()->kirbytext() ?>
          </div>
          <div class="single-footer" id="contact-infos">
              <h4>Contact me</h4>
              <?= $page->contactInfos()->kirbytext() ?>
          </div>
          <div class="single-footer" id="about-me">
              <h4>About</h4>
              <?= $page->aboutMe()->kirbytext() ?>
          </div>
      </section>

  </footer>


<!--  --><?php //echo js('assets/js/heartcolor.js') ?>
<!--  --><?php //echo js('assets/js/fadeIn.js') ?>


</body>
</html>