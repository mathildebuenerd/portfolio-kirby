<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css('assets/css/mystyle.css') ?>

<!--    inclue jquery and jquery ui -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script>
        // all the elements with the "draggable" class are now draggable
        $(function() {
            $(".draggable").draggable();
        });
    </script>

</head>
<body>

  <header class="header wrap wide" role="banner">
    <div class="grid">


      <?php snippet('menu') ?>

    </div>
  </header>
