/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = function (grunt) {
  'use strict';

  grunt.config('bump', {
    options: {
      files: ['package.json'],
      updateConfigs: ['pkg'],
      push: false,
      commitMessage: 'source-%VERSION%',
      tagName: 'source-%VERSION%',
      // commit all modified files
      commitFiles: ['-a'],
      commit: true
    }
  });
};
