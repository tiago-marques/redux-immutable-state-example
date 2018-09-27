import PeopleModel from './PeopleModel';
export default (state = new PeopleModel(), { type, payload }) => {
  switch (type) {
    case 'UPDATE_NAME':
      return state.set('name', payload);
    default:
      return state;
  }
};
