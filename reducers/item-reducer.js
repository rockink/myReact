var items = [{
  name: "momo",
  price: 10,
  src: "/pic/momo.jpg"
  },
  {
    name: "pizza",
    price: 50,
    src: "/pic/momo.jpg"
  },
  {
    name: "crunch",
    price: 20,
    src: "/pic/momo.jpg"
  },
  {
    name: "nmol1",
    price: 10,
    src: "/pic/momo.jpg"
  },
  {
    name: "pizza1",
    price: 50,
    src: "/pic/momo.jpg"
  },
  {
    name: "pizza2",
    price: 20,
    src: "/pic/momo.jpg"
  }
];

export const itemReducer = (state = items, action) => {

  if (action.type == 'NEW_ITEM'){
      state = Object.assign([], state);
      state.push(action.payload);
    }

  return state;
};
