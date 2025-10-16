const citationAleatoire = require('../src/app');

test('La fonction retourne une citation (string non vide)', () => {
  const result = citationAleatoire();
  expect(typeof result).toBe('string');
  expect(result.length).toBeGreaterThan(0);
});
