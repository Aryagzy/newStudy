import db from '../db/index.js'
// 使用ES6语法的按需导出，将getAllUser方法导出去
export async function getAllUser(req, res) {
  const [rows] = await db.query('select id, username, nickname from ev_users')
  // console.log(rows)
  res.send({
    status: 0,
    message: '获取用户列表成功',
    data: rows
  })
}
