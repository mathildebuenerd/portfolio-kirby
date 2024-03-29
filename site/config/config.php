<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

/* set "Projects" as default homepage */
c::set('home', 'projects');

c::set('license', 'K2-PERSONAL-a37923f407b33b19f834cc54f695d95f');

c::set('debug',true);

c::set('language.detect', true);

c::set('languages', array(
  array(
    'code'    => 'en',
    'name'    => 'English',
    'default' => true,
    'locale'  => 'en_US',
    'url'     => '/en',
  ),
  array(
    'code'    => 'fr',
    'name'    => 'Français',
    'default' => false,
    'locale'  => 'fr_FR',
    'url'     => '/',
  ),
));

c::set('markdown.extra', true);
c::set('panel.install', true);

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/
