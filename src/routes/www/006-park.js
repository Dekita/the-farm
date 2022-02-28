

const RenderHelper = require('../render-data');

module.exports = {
    route: '/park', 
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'park'});
        res.render('builder', {render_data});
    },
}
