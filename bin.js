#!/usr/bin/env node
// Buffer up standard input.
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
    // Parse standard input as JSON.
    let data
    try {
      data = JSON.parse(Buffer.concat(chunks))
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
    /* eslint-disable prefer-const */
    /* eslint-disable no-unused-vars */
    // Alias `data` to `d` for short.
    let d = data
    // Evaluate every argument as a script.
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
    // Write the data to standard output as JSON.
    process.stdout.write(JSON.stringify(data, null, 2))
    process.stdout.write('\n')
    process.exit(0)
  })
