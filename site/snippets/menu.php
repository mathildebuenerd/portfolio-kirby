<nav class="navigation column" role="navigation">
  <ul class="menu">
      <!-- the projects link should be absolute -->
      <li class="menu-item"><a href="<?php echo $site->homePage()->url() ?>">Work</a></li>
    <?php foreach($pages->visible() as $item): ?>
    <li class="menu-item<?= r($item->isOpen(), ' is-active') ?>">
      <a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>