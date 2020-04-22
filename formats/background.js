import * as Parchment from 'parchment';
const Scope = Parchment.Scope();
const ClassAttributor = Parchment.ClassAttributor();

import { ColorAttributor } from './color';

const BackgroundClass = new ClassAttributor('background', 'ql-bg', {
  scope: Scope.INLINE,
});
const BackgroundStyle = new ColorAttributor('background', 'background-color', {
  scope: Scope.INLINE,
});

export { BackgroundClass, BackgroundStyle };
