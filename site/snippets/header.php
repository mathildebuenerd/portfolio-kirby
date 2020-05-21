<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?= $page->title()->html() ?></title>

    <!--    Pour toutes les pages on prend la meta description indiquée dans la page. Pour les pages projet on prend la petite description -->
    <meta name="description" content="<?= ($page->metadescription()->kirbytextRaw() != '') ? $page->metadescription()->kirbytextRaw() : $page->smalldescription()->kirbytextRaw() ?>">

    <!--    Balises réseaux sociaux   -->

    <meta property="og:title" content="<?= $page->title()->html() ?>"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="<?php echo $page->url() ?>"/>
    <meta property="og:image" content="<?php
    if($image = $page->image()) {
        echo $image->url();
    } else {
        echo 'https://www.chilidesign.fr/preview-social.jpg';
    } ?>"/>
    <meta property="og:description" content="<?= ($page->metadescription()->kirbytextRaw() != '') ? $page->metadescription()->kirbytextRaw() : $page->smalldescription()->kirbytextRaw() ?>"/>

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@mathildebuenerd">
    <meta name="twitter:title" content="<?= $page->title()->html() ?>">
    <meta name="twitter:description" content="<?= ($page->metadescription()->kirbytextRaw() != '') ? $page->metadescription()->kirbytextRaw() : $page->smalldescription()->kirbytextRaw() ?>">
    <meta name="twitter:creator" content="@mathildebuenerd">
    <meta name="twitter:image" content="<?php
    if($image = $page->image()) {
        echo $image->url();
    } else {
       echo 'https://www.chilidesign.fr/preview-social.jpg';
    } ?>">

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
