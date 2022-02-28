

const RenderHelper = require('../render-data');

module.exports = {
    route: '/trails', 
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'trails'});
        res.render('builder', {render_data});
    },
}
