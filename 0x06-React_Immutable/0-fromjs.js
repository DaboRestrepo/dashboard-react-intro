const { fromJS } = require('immutable');

export default function getImmutableObject(object) {
  fromJS(object);
};
