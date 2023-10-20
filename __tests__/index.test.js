// @ts-check
import assert from 'assert/strict';
// eslint-disable-next-line import/no-unresolved
import { test } from 'node:test';
import {
  isPositive,
  getInverseNumber,
  firstAndLast,
  sumAllNumbers,
  getDifference,
} from '../index.js';

test('task1', () => {
  assert.strictEqual(isPositive(10), true);
  assert.strictEqual(isPositive(12.34), true);
  assert.strictEqual(isPositive(-3), false);
  assert.strictEqual(isPositive(0), false);
});

test('task2', () => {
  assert.strictEqual(getInverseNumber(10), 0.1);
  assert.strictEqual(getInverseNumber(0), Infinity);
  assert.strictEqual(getInverseNumber(-10), -0.1);
  assert.strictEqual(getInverseNumber(40), 0.025);
  assert.strictEqual(getInverseNumber(2.5), 0.4);
});

test('task3', () => {
  assert.strictEqual(firstAndLast('Hello'), 'Ho');
  assert.strictEqual(firstAndLast('Hi'), 'Hi');
  assert.strictEqual(firstAndLast(''), NaN);
  assert.strictEqual(firstAndLast('Hello, Hexlet!'), 'H!');
});

test('task4', () => {
  assert.strictEqual(sumAllNumbers(10), 55);
  assert.strictEqual(sumAllNumbers(0), 0);
  assert.strictEqual(sumAllNumbers(1), 1);
  assert.strictEqual(sumAllNumbers(-10), 0);
});

test('task5', () => {
  assert.strictEqual(getDifference(1, 4, 5), 4);
  assert.strictEqual(getDifference(5, 4, 1), 4);
  assert.strictEqual(getDifference(-10, 0, 100), 110);
  assert.strictEqual(getDifference(0, 0, 0), 0);
});
