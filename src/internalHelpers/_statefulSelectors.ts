// @flow
import PolishedError from './_errors';

import type { InteractionStates } from '../types/interactionStates';

function generateSelectors(template: Function, state: InteractionStates): string {
  const stateSuffix = state ? `:${state}` : '';
  return template(stateSuffix);
}

/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */
function statefulSelectors(
  states: Array<InteractionStates>,
  template: Function,
  stateMap?: Array<InteractionStates>
): string {
  if (!template) throw new PolishedError(67);
  if (states.length === 0) return generateSelectors(template, null);
  let selectors = [];
  for (let i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new PolishedError(68);
    }
    selectors.push(generateSelectors(template, states[i]));
  }
  selectors = selectors.join(',');
  return selectors;
}

export default statefulSelectors;
