import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';

describe('CourseReducer', () => {
  it('Default state = []', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });
  it('Correct FETCH_COURSE_SUCCESS return', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ]
    };
    const data = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const state = courseReducer(undefined, action);
    expect(state).toEqual(data);
  });
  it('SELECT_COURSE returns the data updated', () => {
    const action = {
      type: SELECT_COURSE,
      index: 2
    };
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const expectedData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });
  it('UNSELECT_COURSE update the rigth item', () => {
    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const expectedData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });
});
