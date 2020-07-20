/* globals describe, it*/
const config = require('../lib/index.js')
const fs = require('fs')
const assert = require('assert')
const path = require('path')

describe('smoke tests', () => {
  it('ensure all rules in lib/rules are included in index', () => {
    const exportedRules = new Set(Object.keys(config.rules))
    const files = new Set(fs.readdirSync('./lib/rules').map(f => path.basename(f, path.extname(f))))
    assert.deepEqual(files, exportedRules)
  })
})