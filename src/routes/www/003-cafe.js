

const RenderHelper = require('../render-data');

module.exports = {
    route: '/cafe', 
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'cafe'});
        res.render('builder', {render_data});
    },
}
