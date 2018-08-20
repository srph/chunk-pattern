/* @flow */

/**
 * Chunks an array in a specific pattern
 * @example chunkPattern(['haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha', 'haha'], [2, 3])
 * @return Array<Array<*>>
 */
export default function chunkPattern(
  array: Array<mixed>,
  pattern: Array<number>
): Array<Array<mixed>> {
  const result: Array<Array<mixed>> = []

  let patternIndex: number = 0
  let patternCount: number = 0

  array.forEach((item, i) => {
    if (patternCount === 0) {
      result.push([])

      if (i > 0) {
        // We won't increment pattern index on our fist iteration.
        patternIndex = (patternIndex + 1) % pattern.length
      }
      
      patternCount = pattern[patternIndex]
    }

    const last = result[result.length - 1]
    last.push(item)
    patternCount--
  })

  return result
}