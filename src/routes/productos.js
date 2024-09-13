const Router = require('koa-router');
const router = new Router();
const { Producto } = require('../models');
const getStandsByProductId = require('../controllers/getStandsByProductId');

router.get('/', async (ctx) => {
  try {
    const productos = await Producto.findAll();
    ctx.status = 200;
    ctx.body = productos;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar los productos' };
  }
});

router.get('/:id', async (ctx) => {
  try {
    const producto = await Producto.findByPk(ctx.params.id);

    if (!producto) {
      ctx.status = 404;
      ctx.body = { error: 'Producto no encontrado' };
      return;
    }

    ctx.status = 200;
    ctx.body = producto;

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar el producto' };
  }
});

router.get('/:id/stands', async (ctx) => {
  try {
    const stands = await getStandsByProductId(ctx.params.id);

    if (stands.status === 404) {
      ctx.status = 404;
      ctx.body = { error: stands.message };
    } else {
      ctx.status = 200;
      ctx.body = stands;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar los stands' };
  }
});


module.exports = router;