'use strict'

const finder = require('find-package-json')

const pkg = finder().next().value || {}

const currentPackageVersion = () =>
  pkg.version

module.exports = {
  currentPackageVersion,
}
