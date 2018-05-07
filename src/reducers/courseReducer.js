export default function courseReducer(state = [],action){
  switch(action.type){
    case 'CREATE_COURSE':
      return [...state, Object.assign({},action.course)  //Use of Spread operator ...state from es6, new array with course updated
        ];  //returns brand new state with course element modified
    default:
      return state;
  }
}
