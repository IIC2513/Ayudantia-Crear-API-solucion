const Router = require('koa-router');
const router = new Router();
const { vendidoEn } = require('../models');

router.get('/', async (ctx) => {
  try {
    const relaciones = await vendidoEn.findAll();
    ctx.status = 200;
    ctx.body = relaciones;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar los productos por stand' };
  }
});

module.exports = router;