import Immutable from 'immutable';

const { fromJS } = Immutable;

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
