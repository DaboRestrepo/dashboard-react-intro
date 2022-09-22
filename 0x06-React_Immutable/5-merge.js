import Immutable, { concat, merge } from 'immutable';

const { List, Map } = Immutable;

export const concatElements = (page1, page2) => {
  const list1 = List(page1);
  const list2 = List(page2);
  return concat(list1, list2);
};

export const mergeElements = (page1, page2) => {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return merge(map1, map2);
};
