'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let currentState = { ...state };
  const result = [];

  for (const action of actions) {
    const newState = { ...currentState };

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }
    }

    currentState = newState;
    result.push(newState);
  }

  return result;
}

module.exports = transformStateWithClones;
