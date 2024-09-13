const Router = require('koa-router');
const fondas = require('./routes/fondas');
const stands = require('./routes/stands');
const productos = require('./routes/productos');
const vendidoEn = require('./routes/vendidoEn');

const router = new Router();

router.use('/fondas', fondas.routes());
router.use('/stands', stands.routes());
router.use('/productos', productos.routes()); 
router.use('/vendidoEn', vendidoEn.routes()); 

router.get('/', async (ctx) => {
    ctx.body = 'Hello, world!';
  });
  
module.exports = router;
