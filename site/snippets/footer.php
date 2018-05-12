  <footer class="footer cf">
    <div class="wrap wide">

      <p class="footer-copyright"><?php
        // Parse Kirbytext to support dynamic year,
        // but remove all HTML like paragraph tags:
      //  echo html::decode($site->copyright()->kirbytext())
      ?></p>

      <p class="footer-madewithkirby">
        <a href="http://getkirby.com/made-with-kirby-and-love">Made with Kirby and <b class="heart">♥</b></a>
      </p>

        <section id="social-media">
            <a href="https://www.instagram.com/mathildebuenerd" target="_blank">
                <i class="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/mathildebuenerd" target="_blank">
                <i class="fa fa-twitter"></i>
            </a>
            <a href="https://github.com/mathildebuenerd" target="_blank">
                <i class="fa fa-github"></i>
            </a>
            <a href="http://archive.mathildebuenerd.fr/" target="_blank">
                <i class="fa fa-step-backward"></i>
            </a>
            <a href="http://archive.mathildebuenerd.fr/archive" target="_blank">
                <i class="fa fa-fast-backward"></i>
            </a>
        </section>
    
    </div>
  </footer>


  <?php echo js('assets/js/heartcolor.js') ?>
  <?php echo js('assets/js/fadeIn.js') ?>


</body>
</html>