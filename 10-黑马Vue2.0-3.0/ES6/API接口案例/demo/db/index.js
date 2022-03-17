// 创建db数据库操作模块
import mysql from 'mysql2'
// 数据库连接对象
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'my_db_01', // 要操作数据库的名称
  user: 'root',// 登录名
  password: 'admin123' // 用户密码
})
export default pool.promise()