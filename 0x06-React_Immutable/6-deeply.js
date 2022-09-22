import Immutable from 'immutable';

const { Map } = Immutable;

const mergeDeeplyElements = (page1, page2) => {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const nested = map1.mergeDeep(map2);
  return nested;
};

export default mergeDeeplyElements;
