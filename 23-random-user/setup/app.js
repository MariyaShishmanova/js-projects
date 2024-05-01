import getElement from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = getElement('.btn');

const showUser = async () => {
  // get user fro API
  const person = await getUser();
  displayUser(person);
  // display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
