const assert = require('assert')
const { spawnSync } = require('child_process')

;(() => {
  const script = 'for (e of input) { e.name = e.name.toUpperCase() }'
  const input = [{ name: 'first' }, { name: 'second' }]
  const process = spawnSync('./bin.js', [script], {
    input: JSON.stringify(input)
  })
  /* eslint-disable no-eval */
  eval(script)
  /* eslint-enable no-eval */
  assert.equal(process.stdout.toString(), JSON.stringify(input, null, 2) + '\n')
})()

;(() => {
  const script = 'output = "x"'
  const input = 'input'
  const process = spawnSync('./bin.js', [script], {
    input: JSON.stringify(input)
  })
  /* eslint-disable no-eval */
  eval(script)
  /* eslint-enable no-eval */
  assert.equal(process.stdout.toString(), JSON.stringify('x') + '\n')
})()
