/* import { getIn, from } from "immutable"; */

export default function accessImmutableObject(object, array) {
  const nested = object.getIn([array[0][array[1]]]);
  return nested;
}
