/* import { getIn } from "immutable"; */

export default function accessImmutableObject(object, array) {
  object.getIn([array[0][array[1]]]);
}
