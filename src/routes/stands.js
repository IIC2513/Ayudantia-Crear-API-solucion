const Router = require('koa-router');
const router = new Router();
const { Stand } = require('../models');

router.get('/', async (ctx) => {
  try {
    const stands = await Stand.findAll();
    if (stands.length === 0) {
      ctx.status = 404;
      ctx.body = { error: 'No hay stands registrados' };
      return;
    }

    ctx.status = 200;
    ctx.body = stands;

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar los stands' };
  }
});

router.get('/:id', async (ctx) => {
  try {
    const stand = await Stand.findByPk(ctx.params.id);

    if (!stand) {
      ctx.status = 404;
      ctx.body = { error: 'Stand no encontrado' };
      return;
    }

    ctx.status = 200;
    ctx.body = stand;

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar el stand' };
  }
});

router.delete('/:id', async (ctx) => {
  try {
    const stand = await Stand.findByPk(ctx.params.id);

    if (!stand) {
      ctx.status = 404;
      ctx.body = { error: 'Stand no encontrado' };
      return;
    }

    await stand.destroy();
    ctx.status = 204;
    ctx.status = { message: 'Stand eliminado' };

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al eliminar el stand' };
  }
});

module.exports = router;

