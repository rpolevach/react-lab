import { ADD_GOOD, REMOVE_GOOD, EDIT_GOOD } from "../constants";

const GOODS = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание первого товара"
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание второго товара"
  },
  {
    id: 3,
    name: "Товар 3",
    description: "Описание третьего товара"
  },
  {
    id: 4,
    name: "Товар 4",
    description: "Описание цчетвертого товара"
  }
];

const goods = (state = GOODS, { id, name, description, type }) => {
  switch (type) {
    case ADD_GOOD:
      return [
        ...state,
        {
          id,
          name,
          description
        }
      ];
    case REMOVE_GOOD:
      return [...state].filter(task => task.id !== id);
    case EDIT_GOOD:
      const index = state.findIndex(task => task.id === id);
      state[index].name = name;
      state[index].description = description;
      return state;
    default:
      return state;
  }
};

export default goods;
