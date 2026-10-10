import test from 'node:test';
import assert from 'node:assert/strict';
import {lessons,categories} from '../src/content.mjs';
test('All lessons have unique IDs, supported categories and valid quiz answers',()=>{
 assert.ok(lessons.length>=5);
 assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length);
 for(const l of lessons){
  assert.ok(categories.includes(l.category));
  assert.ok(l.title && l.answer && l.quiz.question);
  assert.ok(Number.isInteger(l.quiz.correct));
  assert.ok(l.quiz.correct>=0 && l.quiz.correct<l.quiz.options.length);
  assert.equal(new Set(l.quiz.options).size,l.quiz.options.length);
 }
});
