# Правила и регламент

- [Экзамен: правила, рекомендации и порядок проведения](https://hexly.notion.site/d9289c18871c44508bc7c7f05a51d94f)

## 1 задача

Напишите и экспортируйте функцию `isPositive()`, которая возвращает булево значение, в зависимости от позитивности числа.

**Параметры**

- *num*: проверяемое число.

**Пример использования:**

```javascript
isPositive(10); // true
isPositive(12.34); // true
isPositive(-3); // false
isPositive(0) // false
```

## 2 задача

Напишите и экспортируйте функцию `getInverseNumber()`, которая возвращает число, обратное заданному числу.

**Условия**

- Чтобы получить обратное число, необходимо 1 разделить на изначальное значение.

**Параметры**

- *num*: число, которое надо перевернуть.

**Пример использования:**

```javascript
getInverseNumber(10) // 0.1
getInverseNumber(0) // Infinity
getInverseNumber(-10) // -0.1
getInverseNumber(40) // 0.025
getInverseNumber(2.5) // 0.4
```

## 3 задача

Напишите и экспортируйте функцию `firstAndLast()`, которая возвращает строку, сделанную из первой и последней буквы входной строки.

**Параметры**

- *str*: строка, из которой надо вернуть новую строку.

**Пример использования:**

```javascript
firstAndLast('Hello') // Ho
firstAndLast('Hi') // Hi
firstAndLast('') // Nan
firstAndLast('Hello, Hexlet!') // H!
```

## 4 задача

Напишите и экспортируйте функцию `sumAllNumbers()`, которая возвращает сумму всех чисел от 1 до заданного числа.

**Параметры**

- *num*: число, сумму всех чисел которого надо вернуть.

**Пример использования:**

```javascript
sumAllNumbers(10) // 55
sumAllNumbers(0) // 0
sumAllNumbers(1) // 1
sumAllNumbers(-10) // 0
```

## 5 задача

Напишите и экспортируйте функцию `getDifference()`, которая возвращает разность между самым большим и самым маленьким числом из трех принимаемых чисел.

**Параметры**

- *num1*: первое число, участвующее в расчете разницы.
- *num2*: второе число, участвующее в расчете разницы.
- *num3*: третье число, участвующее в расчете разницы.

**Пример использования:**

```javascript
getDifference(1, 4, 5); // 4
getDifference(5, 4, 1); // 4
getDifference(-10, 0, 100); // 110
getDifference(0, 0, 0); // 0
```