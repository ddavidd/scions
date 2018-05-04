# Drupal 8 theme for Scions of Zion

  Welcome! You've made it!
  
  Edit custom scripts and styles in the app directory, and use the [Gulp tasks](gulpfile.js) to compile and prepare
  the assets for the theme (in the dist directory.) Packages are managed with npm.
  
  If you're using Lando, I configured a [post-start event](../../../.lando.yml) that will install composer dependencies, 
  theme node packages and build the theme assets. You can use Gulp in the container and not worry about installing anything 
  extra on your local.
