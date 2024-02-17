const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  } = require('../../controllers/userController');

  
// router.get('/users', getAllUsers);
// router.post('/users', createUser);

  router.route("/").get(getAllUsers).post(createUser);


//  router.get('/users/:id', getUserById);
//  router.put('/users/:id', updateUser);
//  router.delete('/users/:id', deleteUser);

  router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);



//  router.post('/users/:userId/friends/:friendId', addFriend);
//  router.delete('/users/:userId/friends/:friendId', removeFriend);

  router
  .route('/:id/friends/:friendId')
  .delete(removeFriend);

  router
  .route('/:id/friends')
  .post(addFriend);



module.exports = router;
  