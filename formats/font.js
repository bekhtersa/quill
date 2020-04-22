import * as Parchment from 'parchment';
const Scope = Parchment.Scope();
const ClassAttributor = Parchment.ClassAttributor();
const StyleAttributor = Parchment.StyleAttributor();

const config = {
  scope: Scope.INLINE,
  whitelist: ['serif', 'monospace'],
};

const FontClass = new ClassAttributor('font', 'ql-font', config);

class FontStyleAttributor extends StyleAttributor {
  value(node) {
    return super.value(node).replace(/["']/g, '');
  }
}

const FontStyle = new FontStyleAttributor('font', 'font-family', config);

export { FontStyle, FontClass };
