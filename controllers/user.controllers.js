const User = require('../models/user.models');
let response = {
  msg: '',
  exito: false
};

exports.create = function(req, res) {
  let user = new User({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    email: req.body.email,
    direccion: req.body.direccion,
  });

  user.save(function(err) {
    if (err) {
      console.log(err);
      response.exito = false;
      response.msg = "Error al guardar";
      res.json(response);
      return;
    }
    response.exito = true;
    response.msg = "Se guardo el usuario";
    res.json(response);
  });
};
