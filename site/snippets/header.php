<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

<!--    Balises réseaux sociaux   -->

    <meta property="og:title" content="Chili Design - Mathilde Buenerd's Portfolio"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://www.chilidesign.fr/"/>
    <meta property="og:image" content="http://chilidesign.fr/content/projects/1-jouska/more_manipulable_00_00_29_22-i.jpg"/>
    <meta property="og:description" content="(media) designer / creative coder based in Geneva."/>

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@mathildebuenerd">
    <meta name="twitter:title" content="Chili Design - Mathilde Buenerd's Portfolio">
    <meta name="twitter:description" content="(media) designer / creative coder based in Geneva.">
    <meta name="twitter:creator" content="@mathildebuenerd">
    <meta name="twitter:image" content="http://chilidesign.fr/content/projects/1-jouska/more_manipulable_00_00_29_22-i.jpg">

  <?= css('assets/css/mystyle.css') ?>

<!--    include jquery and jquery ui -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script>
        // all the elements with the "draggable" class are now draggable
        $(function() {
            $(".draggable").draggable({ containment: "body", scroll: false });
        });
    </script>

<!--    include p5 library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.js"></script>

    <script src="https://use.fontawesome.com/e7a889ab23.js"></script>

    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,600" rel="stylesheet">

<body>

  <header class="header wrap wide">
    <div class="grid">


      <?php snippet('menu') ?>

    </div>
  </header>
