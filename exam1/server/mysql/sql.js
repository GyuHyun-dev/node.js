module.exports = {
    // inner join 하면 댓글이 없으면 게시글이 안보임 조심해야함 
    boardList : `SELECT b.no, b.title, b.writer, b.content, b.created_date, b.updated_date, COUNT(c.no)  as comment
                 FROM t_board_board b LEFT OUTER JOIN t_comment_board c  
                                      ON b.no = c.bno                
                GROUP by b.no, b.title, b.writer, b.content, b.created_date, b.updated_date
                ORDER BY b.no`,
    boardInfo : `SELECT no, title, writer, content, created_date, updated_date, (SELECT COUNT(no) FROM t_comment_board WHERE bno = t_board_board.no) as comment
                FROM t_board_board
                WHERE no = ?`,  // 물음표 한개 배열 x 객체타입
    boardInsert : `INSERT INTO t_board_board SET ? `,  // 물음표 한개 배열 x 단일값
    boardUpdate : `UPDATE t_board_board SET ? WHERE no = ? ` // 배열 / where no = ? 는 number라고 지정되어있어서 단일값
}