

module.exports = class RenderHelper {

    // returns default render data
    static getRenderData(req, options={}) {
        const render_data = {
            canonical_path: '/',
            page_title: "The Farm: By Dekita",
            page_id: 'index',
            user: null, 
            ...options, 
        };
        this.setCannon(render_data);
        return render_data;
    }

    // updates canonical_path from render_data.page
    static setCannon(render_data) {
        if (render_data.page_id !== 'index') {
            render_data.canonical_path = `/${render_data.page_id}`;
        } else {
            render_data.canonical_path = `/`;
        }
    }
}
