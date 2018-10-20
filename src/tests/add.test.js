// this is an example for the classic. basic stuff

const add = (a, b) => a + b

const generateGreeting = (name = 'Anon') => `Hello ${name}!`;

it('should add 2 nums', () => {
  const num = add(12, 12);

  expect(num).toBe(24);
});

it('should say hello', () => {
  const greeting = generateGreeting('Ryan');
  expect(greeting).toBe('Hello Ryan!');
});

it('should say hi to anon', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anon!');
});
