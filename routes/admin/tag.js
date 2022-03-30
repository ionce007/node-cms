const express = require('express');
const router = express.Router();
// 数据库
let pool = require('../../config/mysql');

/**
 * @apiDefine Authorization
 * @apiHeader {String} Authorization 登录或者注册之后返回的token，请在头部headers中设置Authorization: `Bearer ${token}`.
 */

/**
 * @api {get} /tag/list 获取标签列表
 * @apiName TagList
 * @apiGroup Tag
 * @apiPermission 后台系统
 *
 * @apiUse Authorization
 *
 * @apiSampleRequest /tag/list
 */
router.get('/list', async (req, res) => {
    const sql = 'SELECT * FROM tag';
    let [results] = await pool.query(sql);
    res.json({
        status: true,
        data: results
    });
});

/**
 * @api {post} /tag/ 创建新的标签
 * @apiName AddTag
 * @apiGroup Tag
 * @apiPermission 后台系统
 *
 * @apiUse Authorization
 * 
 * @apiBody { String } name 标签名.
 *
 * @apiSampleRequest /tag/
 */
router.post('/', async (req, res) => {
    let { name } = req.body;
    const sql = 'INSERT INTO tag (name) values (?)';
    let [{ insertId, affectedRows }] = await pool.query(sql, [name]);
    if (affectedRows) {
        res.json({
            msg: "创建成功！",
            status: true,
            data: {
                id: insertId
            }
        });
    }
});

/**
 * @api {put} /tag/:id 编辑标签
 * @apiName EditTag
 * @apiGroup Tag
 * @apiPermission 后台系统
 *
 * @apiUse Authorization
 * 
 * @apiParam { Number } id 标签id.
 * @apiBody { String } name 标签名称.
 *
 * @apiExample {js} 参数示例:
 * /tag/3
 *
 * @apiParamExample {json} body参数:
 * {
 *    "name": 'typescript',
 * }
 *
 * @apiSampleRequest /tag/
 */
router.put('/:id', async (req, res) => {
    let { id } = req.params;
    let { name } = req.body;
    let sql = 'UPDATE tag SET name = ? WHERE id = ?';
    let [{ affectedRows }] = await pool.query(sql, [name, id]);
    if (!affectedRows) {
        res.json({
            status: false,
            msg: "修改失败！"
        });
        return;
    }
    res.json({
        status: true,
        msg: "修改成功！"
    })
});

/**
 * @api {delete} /tag/:id 删除标签
 * @apiDescription 有文章与标签关联，不允许删除标签；将关联文章删除，标签没有关联，可以删除标签；
 * @apiName RemoveTag
 * @apiGroup Tag
 * @apiPermission 后台系统
 *
 * @apiUse Authorization
 * 
 * @apiParam { Number } id 标签id.
 *
 * @apiExample {js} 参数示例:
 * /tag/3
 *
 * @apiSampleRequest /tag/remove
 */
router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    // 获取一个连接
    const connection = await pool.getConnection();

    try {
        // 开启事务
        await connection.beginTransaction();
        // 删除标签_文章关联
        let delete_article_sql = 'DELETE FROM FROM article_tag WHERE tag_id = ?';
        let [{ affectedRows: article_affected_rows }] = await connection.query(delete_article_sql, [id]);
        if (article_affected_rows === 0) {
            await connection.rollback();
            res.json({ status: false, msg: "标签_文章关系删除失败！" });
            return;
        }
        // 删除标签
        let delete_tag_sql = 'DELETE FROM tag WHERE id = ?';
        let [{ affectedRows: tag_affected_rows }] = await pool.query(delete_tag_sql, [id]);
        if (tag_affected_rows === 0) {
            await connection.rollback();
            res.json({ status: false, msg: "标签tag删除失败！" });
            return;
        }
        // 一切顺利，提交事务
        await connection.commit();
        res.json({
            status: true,
            msg: "删除成功"
        });
    } catch (error) {
        await connection.rollback();
        throw error;
    }
});

module.exports = router;
