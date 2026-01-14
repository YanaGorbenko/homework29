import { createUser, filterAdults, getUserNames } from '../src/user.js';

describe('Тестування функцій користувача за допомгою Jasmine', () => {
  let users1, users1Adult, users2;

  beforeEach(() => {
    // Ініціалізація тестових даних
    users1 = [
      { name: 'Paul', age: 74 },
      { name: 'Rick', age: 13 },
      { name: 'Margo', age: 22 },
      { name: 'Inna', age: 17 },
    ];

    users1Adult = [
      { name: 'Paul', age: 74 },
      { name: 'Margo', age: 22 },
    ];

    users2 = [
      { name: 'Kate', age: 15 },
      { name: 'Alex', age: 17 },
      { name: 'Maria', age: 8 },
      { name: 'Inna', age: 17 },
    ];
  });
  it("Функція createUser повертає об'єкт користуача, якщо ім'я не було введене викидає помилку", () => {
    expect(createUser('Ann', 15)).toEqual({
      name: 'Ann',
      age: 15,
      isAdult: false,
    });
    expect(createUser('John', 32)).toEqual({
      name: 'John',
      age: 32,
      isAdult: true,
    });
    expect(() => createUser('', 15)).toThrow();
    expect(() => createUser(null, 15)).toThrow();
    expect(() => createUser(undefined, 15)).toThrow();
  });

  it('Функція filterAdults повертає тільки повнолітніх користувачів або порожній масив, якщо їх немає', () => {
    expect(filterAdults(users1)).toEqual(users1Adult);
    expect(filterAdults(users1)).toContain({ name: 'Paul', age: 74 });
    expect(filterAdults(users1)).toContain({ name: 'Margo', age: 22 });
    expect(filterAdults(users2)).toEqual([]);
  });

  it('Функція getUserNames повертає масив імен', () => {
    expect(getUserNames(users1)).toEqual(['Paul', 'Rick', 'Margo', 'Inna']);
    expect(getUserNames(users2)).toEqual(['Kate', 'Alex', 'Maria', 'Inna']);
    expect(getUserNames([])).toEqual([]);
  });
});
