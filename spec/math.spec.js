import { sum, divide, isEven, average } from '../src/math.js';

describe('Тестування функцій за допомогою Jasmine', () => {
  beforeEach(() => {
    console.log('Початок нового тесту');
  });
  it('Функція sum додає два числа', () => {
    expect(sum(1, 10)).toBe(11);
    expect(sum(-2, -4)).toBe(-6);
    expect(sum(1, -7)).toBe(-6);
    expect(sum(-8, 3)).toBe(-5);
  });

  it('Функція divide ділить два числа та при діленні на 0 викидає помилку', () => {
    expect(divide(70, 10)).toBe(7);
    expect(divide(-15, -3)).toBe(5);
    expect(divide(0, -7)).toBe(0);
    expect(divide(-4, 8)).toBe(-0.5);
    expect(() => divide(3, 0)).toThrow();
  });

  it('Функція isEven визначає чи є число парним та повертає булеве значення', () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(3)).toBeFalsy();
    expect(isEven(0)).toBeTruthy();
  });

  it('Функція average знаходить середнє арифметичне чисел в масиві та якщо масив пустий викидає помилку', () => {
    expect(average([1, 3, 5])).toBe(3);
    expect(average([2, 4, 6, 8])).toBe(5);
    expect(average([-1, 4, -15, 8])).toBe(-1);
    expect(() => average([])).toThrow();
  });
});
