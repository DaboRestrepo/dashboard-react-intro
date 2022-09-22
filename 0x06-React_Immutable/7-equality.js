import Immutable from 'immutable';

const { is } = Immutable;

const areMapsEqual = (map1, map2) => {
  const isEqual = is(map1, map2);
  return isEqual;
};

export default areMapsEqual;
