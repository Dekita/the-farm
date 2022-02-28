

const RenderHelper = require('../render-data');

module.exports = {
    route: '/zoo', 
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'zoo'});
        res.render('builder', {render_data});
    },
}
