import { NumArray } from './array';

describe('NumArray', () => {
  describe('min', () => {
    it('should return the minimum value in the array', () => {
      expect(NumArray.min([1, 2, 3, 4, 5])).toBe(1);
      expect(NumArray.min([-1, -2, -3, -4, -5])).toBe(-5);
      expect(NumArray.min([0, 0, 0, 0, 0])).toBe(0);
    });
  });

  describe('max', () => {
    it('should return the maximum value in the array', () => {
      expect(NumArray.max([1, 2, 3, 4, 5])).toBe(5);
      expect(NumArray.max([-1, -2, -3, -4, -5])).toBe(-1);
      expect(NumArray.max([0, 0, 0, 0, 0])).toBe(0);
    });
  });

  describe('sum', () => {
    it('should return the sum of the values in the array', () => {
      expect(NumArray.sum([1, 2, 3, 4, 5])).toBe(15);
      expect(NumArray.sum([-1, -2, -3, -4, -5])).toBe(-15);
      expect(NumArray.sum([0, 0, 0, 0, 0])).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should return the product of the values in the array', () => {
      expect(NumArray.multiply([1, 2, 3, 4, 5])).toBe(120);
      expect(NumArray.multiply([-1, -2, -3, -4, -5])).toBe(-120);
      expect(NumArray.multiply([0, 0, 0, 0, 0])).toBe(0);
    });
  });

  describe('average', () => {
    it('should return the average of the values in the array', () => {
      expect(NumArray.average([1, 2, 3, 4, 5], 5)).toBe(3);
      expect(NumArray.average([-1, -2, -3, -4, -5], 5)).toBe(-3);
      expect(NumArray.average([0, 0, 0, 0, 0], 5)).toBe(0);
    });
  });
});
