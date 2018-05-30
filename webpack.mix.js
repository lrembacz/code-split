let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    // Extracting components to make caching
   // .extract(['vue'])
   .sass('resources/assets/sass/app.scss', 'public/css');

// Version -> making hashes to files
if (mix.inProduction()) {
    mix.version();
}