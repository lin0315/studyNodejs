const path = require('path');

const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')

const app = new Koa()
const uploadRouter = new Router({ prefix: '/upload' })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage,
})

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = '文件上传成功'
})

app.use(uploadRouter.routes())

app.listen(8000, () => {
  console.log('服务器启动》》》');
})