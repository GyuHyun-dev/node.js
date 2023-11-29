module.exports = {
    usersList : `select * from t_users`,
    usersInfo : `select * from t_users where user_id = ?`,
    usersInsert : `insert into t_users set ?`,
    usersUpdate : `update t_users set ? where user_id = ?`,
    usersDelete : `delete from t_users where user_id = ?`
}