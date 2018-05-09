import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { FORM_NAME } from '../../constants';

export const questionIdSelector = state => state.question;
export const schemaSelector = state => state.schema;
export const historySelector = state => state.history;
export const stageSelector = state => state.stage;

export const getCurrentQuestion = createSelector(
  [questionIdSelector, schemaSelector],
  (questionId, schema = []) => schema
    .find(({ id }) => id === questionId),
);

export const getNextQuestionId = createSelector(
  [getCurrentQuestion],
  question => question.next || null,
);

export const hasNext = createSelector(
  [getNextQuestionId],
  questionId => questionId !== null,
);

export const hasPrevious = createSelector(
  [historySelector],
  history => history.length > 1,
);

export const getNext = createSelector(
  [getNextQuestionId, schemaSelector],
  (nextQuestionId, schema = []) => {
    const result = schema.find(({ id }) => id === nextQuestionId);
    return result || null;
  },
);

const formValuesSelector = getFormValues(FORM_NAME);

export const getQuestionsWithReplies = createSelector(
  [schemaSelector, historySelector, formValuesSelector],
  (questions, history, values) =>
    questions
      .filter(({ id }) => history.includes(id))
      .map(question => ({ ...question, reply: values[question.id] })),
);

export const getCurrenQuestionValue = createSelector(
  [getCurrentQuestion, formValuesSelector],
  (question, values) => values[question.id] || '',
);

