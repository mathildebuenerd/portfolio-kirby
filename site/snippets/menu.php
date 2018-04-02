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

<nav class="languages" role="navigation">
  <ul>
    <?php foreach($site->languages() as $language): ?>
    <li<?php e($site->language() == $language, ' class="active"') ?>>
      <a href="<?= $page->url($language->code()) ?>">
        <?= html($language->code()) ?>
      </a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>