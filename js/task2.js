// Перепиши функцию toggleUserState() так,
//  чтобы она не использовала callback-функцию callback,
//   а принимала всего два параметра allUsers и userName
//    и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const toggleUserState = (allUsers, userName) => {
  return new Promise ((resolve, reject) => {
    const updatedUsers = allUsers.map(user);
})
  if (user.name === userName) {
      active: !user.active  } 
  const error = user, ;
  reject(error);
  // callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);