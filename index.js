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
  const result: Array<Array<mixed>> = [[]]
  let patternIndex: number = 0
  let patternCount: number = pattern[0]

  array.forEach((item: any) => {
    if (patternCount === 0) {
      result.push([])
      patternIndex = (patternIndex + 1) % pattern.length
      patternCount = pattern[patternIndex]
    }

    const last = result[result.length - 1]
    last.push(item)
    patternCount--
  })

  return result
}
