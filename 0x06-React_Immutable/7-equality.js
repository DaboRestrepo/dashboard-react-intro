import Immutable from 'immutable';

const { is } = Immutable;

const areMapsEqual = (map1, map2) => {
  is(map1, map2);
};

export default areMapsEqual;
