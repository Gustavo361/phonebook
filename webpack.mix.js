const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/vue/js')
   .css('resources/css/app.css', 'public/vue/css')
   .version();