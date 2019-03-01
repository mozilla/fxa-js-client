/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = function (grunt) {
  'use strict';

  grunt.config('buildcontrol', {
    options: {
      commit: true,
    },
    release: {
      options: {
        branch: 'release',
        dir: 'build',
        push: false,
        tag: '<%= pkg.version %>'
      }
    },
    docs: {
      options: {
        branch: 'gh-pages',
        dir: 'docs',
        push: true,
        remote: 'git@github.com:mozilla/fxa-js-client.git',
        tag: 'docs-<%= pkg.version %>'
      }
    }
  });
};
