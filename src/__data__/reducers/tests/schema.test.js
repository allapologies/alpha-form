/* global it, describe, expect */

import schemaReducer from '../schema';
import { LOAD_SCHEMA } from '../../action-types';

const sampleState = [{ id: 1 }];
const sampleSchema = [{ id: 2 }];

describe('questions reducer', () => {
  it('returns default state', () => {
    expect(schemaReducer(undefined, {}))
      .toEqual([]);
  });
  it('returns new state for LOAD_SCHEMA action', () => {
    expect(schemaReducer(sampleState, { type: LOAD_SCHEMA, schema: sampleSchema }))
      .toEqual(sampleSchema);
  });
  it('returns same state for unrecognized action types', () => {
    expect(schemaReducer([], { type: 'UNRECOGNIZED ACTION', schema: sampleSchema }))
      .toEqual([]);
  });
});
