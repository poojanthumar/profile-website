module.exports.home = function(req, res){
    return res.render('home', {});
}

module.exports.contact = function(req, res){
    console.log(req.body);
    return res.redirect('back');
}
