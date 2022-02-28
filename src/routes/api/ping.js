
module.exports = {
    route: '/ping',
    get: async (req, res) => {
        res.sendStatus(200);
    },
}
