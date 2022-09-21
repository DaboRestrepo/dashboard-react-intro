import Immutable from 'immutable';

const { List } = Immutable;

export function getListObject(array) {
  List(array);
}

export function addElementToList(list, element) {
  list.push(element);
  return list;
}
