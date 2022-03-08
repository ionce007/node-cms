var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');

/**
 * @api {get} /notice/detail 获取指定id的公告详情
 * @apiName NoticeDetail
 * @apiPermission 后台系统、前台
 * @apiGroup Notice
 *
 * @apiQuery { Number } id 公告id
 *
 * @apiSampleRequest /notice/detail
 */
router.get('/detail', async (req, res) => {
    let { id } = req.query;
    const sql = 'SELECT * FROM notice WHERE id = ?';
    let results = await db.query(sql, [id]);
    res.json({
        status: true,
        msg: "获取成功",
        data: results[0]
    });
});

/**
 * 1   LIMIT 10    OFFSET 0
 * 2   LIMIT 10    OFFSET 10
 * 3   LIMIT 10    OFFSET 20
 * 4   LIMIT 10    OFFSET 30
 * ....
 * n   LIMIT 10    OFFSET 10*(n-1)
 */
/**
 * @api {get} /notice/list 获取所有公告列表
 * @apiDescription 注意：置顶公告排序靠前，正常公告默认按照日期降序排序
 * @apiName NoticeList
 * @apiPermission 后台系统、前台
 * @apiGroup Notice
 *
 * @apiQuery { Number } pagesize 每一页公告数量.
 * @apiQuery { Number } pageindex 第几页.
 *
 * @apiSuccess {Object[]} data 公告数组.
 *
 * @apiSampleRequest /notice/list
 */
router.get("/list", async (req, res) => {
    let { pagesize, pageindex } = req.query;
    pagesize = parseInt(pagesize);
    const offset = pagesize * (pageindex - 1);
    const sql = '(SELECT * FROM notice WHERE is_sticky = 1 ORDER BY update_date DESC LIMIT 9999999) UNION ALL SELECT * FROM (SELECT * FROM notice WHERE is_sticky = 0 ORDER BY create_date DESC LIMIT 9999999) AS temp LIMIT ? OFFSET ?';
    let results = await db.query(sql, [pagesize, offset, pagesize, offset]);
    res.json({
        status: true,
        msg: "获取成功",
        data: results,
    });
});

module.exports = router;