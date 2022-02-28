

const RenderHelper = require('../render-data');

module.exports = {
    route: '/shop',
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'shop'});
        res.render('builder', {render_data});
    },
}
