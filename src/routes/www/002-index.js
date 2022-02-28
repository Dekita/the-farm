

const RenderHelper = require('../render-data');

module.exports = {
    route: '/', // base site route (home page)
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'index'});
        res.render('builder', {render_data});
    },
}
