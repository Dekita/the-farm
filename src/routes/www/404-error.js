

const RenderHelper = require('../render-data');

module.exports = {
    route: '/*', // take any routes not defined previously as 404
    get: async (req, res) => {
        const render_data = RenderHelper.getRenderData(req, {page_id:'404'});
        res.status(404).render('builder', {render_data});
    },
}
