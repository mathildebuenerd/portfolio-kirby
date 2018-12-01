
<div id="logo-chili-design">
    <a href="<?php echo $site->language()->url() ?>">
        <img src="<?php echo url('assets/images/logo-chili-design-black.png') ?>" alt="Logo de chili design">
    </a>
</div>

<nav id="nav-social-media">
    <ul id="list-social-media">
        <li class="single-social-link">
            <a target="_blank" href="https://twitter.com/mathildebuenerd">twitter</a>
        </li>
        <li class="single-social-link">
            <a target="_blank" href="https://twitter.com/mathildebuenerd">github</a>
        </li>
        <li class="single-social-link">
            <a target="_blank" href="https://www.linkedin.com/in/mathilde-buenerd-9b5585a1/">linkedin</a>
        </li>
        <li class="single-social-link">
            <a target="_blank" href="http://blog.mathildebuenerd.fr">blog</a>
        </li>
    </ul>
</nav>


<nav class="navigation column" id="nav-main">
    <ul>
        <!-- the projects link should be absolute -->
        <li class="menu-item"><a href="<?php echo $site->homePage()->url() ?>">Work</a></li>
        <?php foreach($pages->visible() as $item): ?>
            <li class="menu-item<?= r($item->isOpen(), ' is-active') ?>">
                <a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
            </li>
        <?php endforeach ?>
    </ul>
</nav>

<nav id="nav-languages">
    <ul id="list-languages">
        <?php foreach($site->languages() as $language): ?>
            <li<?php e($site->language() == $language, ' class="active"') ?>>
                <a href="<?= $page->url($language->code()) ?>">
                    <?= html($language->code()) ?>
                </a>
            </li>
        <?php endforeach ?>
    </ul>
</nav>