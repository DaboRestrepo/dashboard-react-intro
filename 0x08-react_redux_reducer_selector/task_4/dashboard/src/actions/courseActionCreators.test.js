import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('ActionCreators', () => {
  it('selectCourse return', () => {
    const data = { type: SELECT_COURSE, index: 1 };
    const result = selectCourse(1);
    expect(result).toEqual(data);
  });
  it('unSelectCourse', () => {
    const data = { type: UNSELECT_COURSE, index: 1 };
    const result = unSelectCourse(1);
    expect(result).toEqual(data);
  });
});
