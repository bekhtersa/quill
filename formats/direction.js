import * as Parchment from 'parchment';
const Scope = Parchment.Scope();
const ClassAttributor = Parchment.ClassAttributor();
const StyleAttributor = Parchment.StyleAttributor();
const Attributor = Parchment.Attributor();

const config = {
  scope: Scope.BLOCK,
  whitelist: ['rtl'],
};

const DirectionAttribute = new Attributor('direction', 'dir', config);
const DirectionClass = new ClassAttributor('direction', 'ql-direction', config);
const DirectionStyle = new StyleAttributor('direction', 'direction', config);

export { DirectionAttribute, DirectionClass, DirectionStyle };
