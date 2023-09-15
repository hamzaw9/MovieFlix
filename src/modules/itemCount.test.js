import itemCount from './itemCount.js';

jest.mock('./fetchData', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve([1, 2, 3])),
}));

test('itemCount updates text content with the length of fetched data', async () => {
  const items = { textContent: '' };
  document.getElementById = jest.fn(() => items);

  await itemCount();

  expect(items.textContent.toString()).toBe('3');
});
