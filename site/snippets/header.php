<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css('assets/css/mystyle.css') ?>

<!--    include jquery and jquery ui -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script>
        // all the elements with the "draggable" class are now draggable
        $(function() {
            $(".draggable").draggable();
        });
    </script>

<!--    include p5 library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.js"></script>

    <script src="https://use.fontawesome.com/e7a889ab23.js"></script>

    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,600" rel="stylesheet">

<body>

  <header class="header wrap wide" role="banner">
    <div class="grid">


      <?php snippet('menu') ?>

    </div>
  </header>
