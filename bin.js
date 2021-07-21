#!/usr/bin/env node
const chunks = []
process.stdin
  .on('data', chunk => {
    chunks.push(chunk)
  })
  .once('error', error => {
    console.error(error)
    process.exit(1)
  })
  .once('end', () => {
    let data
    try {
      data = JSON.parse(Buffer.concat(chunks))
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
    /* eslint-disable prefer-const */
    /* eslint-disable no-unused-vars */
    let d = data
    for (const script of process.argv.slice(2)) {
      try {
        /* eslint-disable no-eval */
        eval(script)
        /* eslint-enable no-eval */
      } catch (error) {
        console.error(error)
        process.exit(1)
      }
    }
    process.stdout.write(JSON.stringify(data, null, 2))
    process.stdout.write('\n')
    process.exit(0)
  })
