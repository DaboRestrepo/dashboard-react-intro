import Immutable from 'immutable';

const { List } = Immutable;

export const getListObject = (array) => List(array);

export const addElementToList = (list, element) => list.push(element);
