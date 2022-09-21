const {fromJS} = require('immutable');

export default function getImmutableObject(object) {
  const map = fromJS(object);
}
