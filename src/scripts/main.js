// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');

var BULLETS = 'li:not(.no-bullet), .bullet';

// Bespoke.js
bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  bullets(BULLETS),
  backdrop(),
  scale(),
  hash(),
  progress(),
  function (deck) {
    deck.slides.forEach(function (slide) {
      var bullets = slide.querySelectorAll(BULLETS);

      if (bullets.length) {
        bullets[bullets.length - 1].classList.add('bespoke-bullet-last-of-slide');
      }
    });
  }
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
