module.exports = {
    boardList : `select * from t_board_board`,
    boardInfo : `select * from t_board_board where no = ?`,
    boardUpdate : `update t_board_board set ? where no = ?`,
    boardInsert : `insert into t_board_board set ?`
}


