
<div id="logo-chili-design">
    <a href="<?php echo $site->language()->url() ?>">
        <img src="<?php echo url('assets/images/logo-chili-design-black.png') ?>"
            <?php if(strtolower($site->language()->name()) == 'français'): ?>
                alt="Retour à l'accueil"<?php endif ?>

             <?php if(strtolower($site->language()->name()) == 'english'): ?>
                alt="Back to homepage"<?php endif ?>>
    </a>
</div>

<nav class="navigation column"
     id="nav-main"
    <?php if(strtolower($site->language()->name()) == 'français'): ?>
        aria-label="Menu principal"<?php endif ?>
    <?php if(strtolower($site->language()->name()) == 'english'): ?>
        aria-label="Main navigation"<?php endif ?>>

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

<nav id="nav-languages"
    <?php if(strtolower($site->language()->name()) == 'français'): ?>
        aria-label="Choix de la langue"<?php endif ?>
    <?php if(strtolower($site->language()->name()) == 'english'): ?>
        aria-label="Languages menu"<?php endif ?>>
    <ul id="list-languages">
        <?php foreach($site->languages() as $language): ?>
            <li <?php e($site->language() == $language, ' class="active"') ?>
                    id="single-language-<?= $language->code()?>">
                <a href="<?= $page->url($language->code()) ?>">
                    <?= html($language->name()) ?>
                </a>
            </li>
        <?php endforeach ?>
    </ul>
</nav>

<nav id="nav-social-media"
    <?php if(strtolower($site->language()->name()) == 'français'): ?>
        aria-label="Réseaux sociaux"<?php endif ?>
    <?php if(strtolower($site->language()->name()) == 'english'): ?>
        aria-label="Social networks"<?php endif ?>>

    <ul id="list-social-media">
        <li class="single-social-link">
            <a target="_blank" href="https://twitter.com/mathildebuenerd">twitter</a>
        </li>
        <li class="single-social-link">
            <a target="_blank" href="https://github.com/mathildebuenerd">github</a>
        </li>
        <li class="single-social-link">
            <a target="_blank" href="https://www.linkedin.com/in/mathilde-buenerd-9b5585a1/">linkedin</a>
        </li>
        <li class="single-social-link">
            <a target="_blank" href="http://blog.mathildebuenerd.fr">blog</a>
        </li>
    </ul>
</nav>
