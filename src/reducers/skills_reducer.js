const skills = (state = [], action) => {
  switch (action.type) {
    case 'SORT_SKILLS':
      return Object.assign({}, state, { sortCriterion: action.criterion });
    default:
      return state;
  }
};

export default skills;
