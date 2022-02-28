const config = require('../../config');
const {DateTime} = require("luxon");

let base_url = 'http://localhost/';
if (!config.dev_mode) {
    base_url = 'https://dekitarpg.com/the-farm/';
}

function getLastModDate(time = DateTime.now()) {
    return time.toISODate(); //  YYYY-MM-DD
};

function mapEntry(options={}) {
    // for sitemap creation information see 
    // https://www.sitemaps.org/protocol.html
    return {
        loc: options.loc, // !REQUIRED
        changefreq: options.changefreq || 'never', 
        lastmod: options.lastmod || getLastModDate(), 
        priority: options.priority || 0.5,
    }
}

module.exports = {
    route: '/sitemap.xml',
    get: async (request, response) => {
        const lastmod = getLastModDate();
        response.set('Content-Type', 'text/xml');
        response.render('sitemap', {render_data:{
            base_url, lastmod, sitemap: [
                mapEntry({lastmod, loc: 'cafe'}),
                mapEntry({lastmod, loc: 'shop'}),
                mapEntry({lastmod, loc: 'zoo'}),
                mapEntry({lastmod, loc: 'park'}),
                mapEntry({lastmod, loc: 'trails'}),
                mapEntry({lastmod, loc: 'error'}),
            ],
        }});
    },

}
