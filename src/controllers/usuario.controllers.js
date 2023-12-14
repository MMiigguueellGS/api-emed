const catchError = require('../utils/catchError');
const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Emed = require('../models/Emed.model');

const getAll = catchError(async(req, res) => {
    const usuarios = await Usuario.findAll({include:[{model: Emed, as:'UsuarioEmed'} ]})
    return res.status(200).json(usuarios)
});
const create = catchError(async(req,res)=>{
  const {idEmed,clave} = req.body
  const claveEncriptada = await bcrypt.hash(clave,10)
  const usuario = await Usuario.create({idEmed,clave: claveEncriptada})
  return res.status(201).json(usuario);
})

const login = catchError(async(req,res)=>{
  const {emed,clave}= req.body
  console.log(emed)
  const {id} = await Emed.findOne({where:{nombreEmed: emed}})

  const usuario = await Usuario.findOne({where:{idEmed: id}})

  if(!usuario) return res.status(401).json({mensaje:'credenciales invalidas'})
  const validacion = await bcrypt.compare(clave,usuario.clave)
  if(!validacion) return res.status(401).json({mensaje: 'credenciales invalidas'})

  const token = jwt.sign(
    { usuario}, // payload
		process.env.TOKEN_SECRET, // clave secreta
		{ expiresIn: '1d' } // OPCIONAL: Tiempo en el que expira el token
  )
   return res.status(201).json({usuario,token})
})

module.exports = {
    getAll,
    create,
    login
}