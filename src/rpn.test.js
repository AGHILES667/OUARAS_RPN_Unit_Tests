import { mainFunction } from './rpn';

describe('RPN Calculator', () => {
  test('Retourner 0 pour une expression vide', () => {
    expect(mainFunction('')).toBe(0);
  });

  test('Si on écrit un nombre seul, on le retourne', () => {
    expect(mainFunction('5')).toBe(5);
  });

  test('Addition Simple', () => {
    expect(mainFunction('3 4 +')).toBe(7);
  });

  test('should handle subtraction', () => {
    expect(mainFunction('10 4 -')).toBe(6);
  });

  test('should handle multiplication', () => {
    expect(mainFunction('3 4 *')).toBe(12);
  });

  test('should handle division', () => {
    expect(mainFunction('8 4 /')).toBe(2);
  });

  test('should handle complex expressions', () => {
    expect(mainFunction('5 1 2 + 4 * + 3 -')).toBe(14);
  });

  test('should throw error for unknown operators', () => {
    expect(() => mainFunction('5 2 ^')).toThrow('Unknown operator: ^');
  });

  test('should handle multiple operations', () => {
    expect(mainFunction('3 5 8 * 7 + *')).toBe(141);
  });
});
