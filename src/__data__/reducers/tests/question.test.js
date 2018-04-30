/* global it, describe, expect */

import question from '../question';
import { SET_QUESTION_ID } from '../../action-types';

describe('question reducer', () => {
  it('returns default state', () => {
    expect(question(undefined, {})).toBeNull();
  });
  it('returns new state for SET_QUESTION_ID action', () => {
    expect(question(6, { type: SET_QUESTION_ID, id: 3 })).toBe(3);
  });
  it('returns same state for unrecognized action types', () => {
    expect(question(6, { type: 'UNRECOGNIZED ACTION', id: 3 })).toBe(6);
  });
});
