/* global it, describe, expect */

import { getNextQuestionId, hasNext, getNext, getCurrentQuestion } from '../';
import questions from './fixtures/sample-data.json';

describe('selectors', () => {
  describe('getCurrentQuestion', () => {
    it('returns current question data', () => {
      const expected = {
        id: 'A04',
        text: 'When did you purchase your product?',
        reply: '',
        type: 'date',
        next: 'A05',
      };
      expect(getCurrentQuestion.resultFunc('A04', questions)).toEqual(expected);
    });
  });
  describe('getNextQuestionId', () => {
    it('returns next step ID', () => {
      expect(getNextQuestionId.resultFunc({
        id: 'A01',
        text: 'What happened to your product?',
        reply: '',
        type: 'string',
        next: 'A02',
      })).toEqual('A02');
    });
    it('returning value is string', () => {
      expect(typeof getNextQuestionId.resultFunc({
        id: 'A01',
        text: 'What happened to your product?',
        reply: '',
        type: 'string',
        next: 'A02',
      })).toBe('string');
    });
    it('returns null if questions ended', () => {
      expect(getNextQuestionId.resultFunc({
        id: 'A07',
        text: 'Name of additional insurance?',
        reply: '',
        type: 'string',
        next: null,
      })).toBeNull();
    });
  });
  describe('hasNext', () => {
    it('returns true if next question exists', () => {
      expect(hasNext.resultFunc('A01')).toBe(true);
    });
    it('returns false if next question does not exist', () => {
      expect(hasNext.resultFunc(null)).toBe(false);
    });
  });
  describe('getNext', () => {
    it('returns next step ID', () => {
      const expected = {
        id: 'A02',
        text: 'When did the incident occur?',
        reply: '',
        type: 'date',
        next: 'A04',
      };
      expect(getNext.resultFunc('A02', questions)).toEqual(expected);
    });
    it('returns undefined if questions do not exist or ended', () => {
      expect(getNext.resultFunc('A08', questions)).toBe(null);
    });
  });
})
;
