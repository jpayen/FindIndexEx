const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(users, username) {
    return users.find(function(user) {
        return user.username === username;
    })
}

function removeUser(users, username) {
    let index = users.findIndex(function(user) {
        return user.username === username;
    })
    if (index === -1) return;

    return users.splice(index, 1)[0];

}