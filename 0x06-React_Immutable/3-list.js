import Immutable from 'immutable';

const { List } = Immutable;

export function getListObject(array) {
  List(array);
}

export function addElementToList(list, element) {
  const newList = getListObject(list);
  newList.push(element);
  return newList;
}
