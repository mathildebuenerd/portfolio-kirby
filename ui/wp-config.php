<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mathildeopwp');

/** MySQL database username */
define('DB_USER', 'mathildeopwp');

/** MySQL database password */
define('DB_PASSWORD', 'HkRfpI7f');

/** MySQL hostname */
define('DB_HOST', 'mathildeopwp.mysql.db:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'thhkMy8evxvPticVkpQ5Mj2eafD++GyToc449hul+e6ZMz0IbV1LFmZeqwZP');
define('SECURE_AUTH_KEY',  'V1T84rI4Sg7EfbhCvznRr9QcHUDHmrJEVue4ANvScD9lu9kQ6Q7vRAfc0FfO');
define('LOGGED_IN_KEY',    '7szNwKguuJ7FPcpiw65KgnlLVwAkwqjCidamCi9NM23iLaDtlEMg7v3NlDTq');
define('NONCE_KEY',        'v4fLPu40ZKoNgVtWIzJDLCEAzppn8OUZEuj32zhLOdoLImTHBWVS/pxa25ri');
define('AUTH_SALT',        'KR49lf5Wnvpohsalj+sWO5wbLe3roCbx4Yzs06eZmTq4WSDHwxTBHca3bYvr');
define('SECURE_AUTH_SALT', 'IRzg17wEnO/NSFKG7y0Gpv1D/3yk8j6tb2dWfxNafHMWbocAAE1fBHP1YFd8');
define('LOGGED_IN_SALT',   '0hywIF/r0rhLHR7z88XDuyS+q8NtTyxzJiqWrGOwfMJ39GId+qLBhWNDSaDw');
define('NONCE_SALT',       'T7ph/DohNgqTpnvITCKu5zKEfGna4BcY9KOdknWHgmnsjnjrpssFJXE35kc/');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wor5778_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/* Fixes "Add media button not working", see http://www.carnfieldwebdesign.co.uk/blog/wordpress-fix-add-media-button-not-working/ */
define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
