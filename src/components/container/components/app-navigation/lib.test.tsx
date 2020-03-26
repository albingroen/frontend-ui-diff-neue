import { transformAppNavigationLists } from './lib'

test('transform object structure to header input structure', () => {
  const headerLists = transformAppNavigationLists([
    {
      key: 1,
      items: [
        {
          value: 'Projects',
          link: '/',
          key: 1,
          active: window.location.pathname === '/'
        }
      ]
    }
  ])
  expect(headerLists[0].items[0].key).toStrictEqual(1)
})
