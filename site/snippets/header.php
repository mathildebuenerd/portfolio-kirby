<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
    <meta name="description" content="<?= $site->description()->html() ?>">

    <!--    Balises réseaux sociaux   -->

    <meta property="og:title" content="Chili Design - Mathilde Buenerd"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://www.chilidesign.fr/"/>
    <meta property="og:image" content="http://www.chilidesign.fr/preview-social.jpg"/>
    <meta property="og:description" content="Interaction designer exploring our future relationships with AI."/>

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@mathildebuenerd">
    <meta name="twitter:title" content="Chili Design - Mathilde Buenerd">
    <meta name="twitter:description" content="Interaction designer exploring our future relationships with AI.">
    <meta name="twitter:creator" content="@mathildebuenerd">
    <meta name="twitter:image" content="http://www.chilidesign.fr/preview-social.jpg">

    <?= css('assets/css/mystyle.css') ?>

    <!--    include jquery and jquery ui -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

    <!--    inclunding fonts -->
    <link href="https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700" rel="stylesheet">
<body>

<header class="header wrap wide">

    <!-- Navigation menu -->
    <?php snippet('menu') ?>


</header>
