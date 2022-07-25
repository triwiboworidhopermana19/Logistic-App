
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
    firstName: 'DexignZone',
    lastName: 'Team',
    users: null,
    usersLoading: false,
  },
  getters: {
    products({ state }) {
      return state.products;
    },
    usersLoading: ({ state }) => state.usersLoading,
    users: ({ state }) => state.users,
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    helloWorld(ctx) {
      app.dialog.alert('Hello world');
    },
    loadUsers({ state }) {
      state.usersLoading = true;
      setTimeout(() => {
        state.usersLoading = false;
        state.users = ['Aaron', 'Alexander', 'Candy', 'Chloe', 'Vladimir'];
      }, 3000);
    },
  },
})
export default store;
