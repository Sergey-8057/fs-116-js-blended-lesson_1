// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log(`Число - ${i} fizzbuzz`);
    } else if (!(i % 3)) {
      console.log(`Число - ${i} fizz`);
    } else if (!(i % 5)) {
      console.log(`Число - ${i} buzz`);
    }
  }
}

fizzBuzz(35);
