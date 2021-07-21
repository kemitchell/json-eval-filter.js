const assert = require('assert')
const { spawnSync } = require('child_process')

const script = 'for (e of data) { e.name = e.name.toUpperCase() }'
const data = [{ name: 'first' }, { name: 'second' }]
const process = spawnSync('./bin.js', [script], {
  input: JSON.stringify(data)
})
/* eslint-disable no-eval */
eval(script)
/* eslint-enable no-eval */
assert.equal(process.stdout.toString(), JSON.stringify(data, null, 2) + '\n')
