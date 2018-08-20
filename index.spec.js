import chunkPattern from './'

const flavors = [
  'Chocolate',
  'Strawberry',
  'Green Tea',
  'Rocky Road',
  'Salted Caramel',
  'Vanilla',
  'Cheese',
  'Kit Kat',
  'Ube',
  'Pandan',
  'Blueberry'
]

it('should work', () => {
  expect(chunkPattern(flavors, [2, 3])).toEqual([
    ['Chocolate', 'Strawberry'],
    ['Green Tea', 'Rocky Road', 'Salted Caramel'],
    ['Vanilla', 'Cheese'],
    ['Kit Kat', 'Ube', 'Pandan'],
    ['Blueberry']
  ])
})

it('should work for single pattern', () => {
  expect(chunkPattern(flavors, [3])).toEqual([
    ['Chocolate', 'Strawberry', 'Green Tea'],
    ['Rocky Road', 'Salted Caramel', 'Vanilla'],
    ['Cheese', 'Kit Kat', 'Ube'],
    ['Pandan', 'Blueberry']
  ])
})
