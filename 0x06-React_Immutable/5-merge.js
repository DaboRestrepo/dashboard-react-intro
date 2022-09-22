import Immutable from 'immutable';

const { List, Map } = Immutable;

export const concatElements = (page1, page2) => {
  const list1 = List(page1);
  const list2 = List(page2);
  const list3 = list1.concat(list2);
  return list3;
};

export const mergeElements = (page1, page2) => {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const map3 = map1.merge(map2);
  return map3;
};
