<?php

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * Include the Pantheon-specific settings file.
 *
 * n.b. The settings.pantheon.php file makes some changes
 *      that affect all envrionments that this site
 *      exists in.  Always include this file, even in
 *      a local development environment, to ensure that
 *      the site settings remain consistent.
 */
include __DIR__ . "/settings.pantheon.php";

/**
 * Place the config directory outside of the Drupal root.
 */
$config_directories = array(
  CONFIG_SYNC_DIRECTORY => dirname(DRUPAL_ROOT) . '/config',
);

/**
 * If there is a local settings file, then include it
 */
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}

/**
 * Always install the 'standard' profile to stop the installer from
 * modifying settings.php.
 */
$settings['install_profile'] = 'standard';

/**
 * Config Split settings
 * Note: Config is outside Drupal root (see above) but the split config is *inside* Drupal root
 * It would be nice to place these next to each other, preferably outside the Drupal root.
 */

$env = $_ENV['PANTHEON_ENVIRONMENT'];

// If local (lando) or Pantheon dev
if (isset($env) && ($env == 'lando' || $env == 'dev') ) {
  $config['config_split.config_split.dev']['status'] = true;
} else {
  $config['config_split.config_split.dev']['status'] = false;
}