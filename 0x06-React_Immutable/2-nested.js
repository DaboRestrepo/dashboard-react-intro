import { getIn, fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
  getIn(fromJS(object), array);
}
