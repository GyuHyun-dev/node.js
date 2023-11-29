module.exports = {
    customerList : `select * from customers`,
    customerInfo : `select * from customers where id = ?`,
    costomerInsert : `insert into customers set ?`, 
    costomerUpdate : `update customers set ? where id = ?`,
    costomerDelete : `delete from customers where id = ?`
}