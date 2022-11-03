const controller = {}

controller.index = (req, res, next) => {
    res.render('index', { title: 'My books' });
}















module.exports = controller;
