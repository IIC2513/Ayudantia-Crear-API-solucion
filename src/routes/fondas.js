const Router = require('koa-router');
const router = new Router();
const { Fonda } = require('../models');
const getProductosByFondaId = require('../controllers/getStandsByProductId.js');

router.get('/', async (ctx) => {
  try {
    const fondas = await Fonda.findAll();
    ctx.status = 200;
    ctx.body = fondas;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar las fondas' };
  }
});


router.get('/:id', async (ctx) => {
  try {
    const fonda = await Fonda.findByPk(ctx.params.id);
    if (!fonda) {
      ctx.status = 404;
      ctx.body = { error: 'Fonda no encontrada' };
      return;
    }
    ctx.status = 200;
    ctx.body = fonda;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar la fonda' };
  }
});

router.post('/', async (ctx) => {
  try {
    const fonda = await Fonda.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = fonda;

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al crear la fonda' };

  }
});

router.delete('/:id', async (ctx) => {
  try {
    const fonda = await Fonda.findByPk(ctx.params.id);

    if (!fonda) {
      ctx.status = 404;
      ctx.body = { error: 'Fonda no encontrada' };
      return;
    }

    await fonda.destroy();
    ctx.status = 204;
    ctx.body = { message: 'Fonda eliminada' };

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al eliminar la fonda' };
  }
});

router.put('/:id', async (ctx) => {
  try {
    const fonda = await Fonda.findByPk(ctx.params.id);

    if (!fonda) {
      ctx.status = 404;
      ctx.body = { error: 'Fonda no encontrada' };
      return;
    }

    await fonda.update(ctx.request.body);
    ctx.status = 200;
    ctx.body = fonda;

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al actualizar la fonda' };
  }
});
module.exports = router;