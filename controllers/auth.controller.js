const jwt = require ('jsonwebtoken');
const { User } = require('../models');

module.exports = {
    async login (req, res){
        try {
            const { email, senha } = req.body;
            if (!email || !senha){
                return res.status(400).json({
                    message:'Email e senha são obrigatórios'
                });
            }
            const user = await User.findOne({
                where: { email }
            });
            if (!user){
                return res.status(401).json({
                    message: 'Email ou senha inválidos'
                })
            }
            const senhaValida = await user.validarSenha(senha);
            if (!senhaValida){
                return res.status(401).json({
                    message: 'Email ou senha inválidos'
                });
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    nome:user.name,
                    email: user.email,
                    tipo_usuario: user.tipo_usuario
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_In || '1d'
                }
            );
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao fazer Login',
                error: error.message
            });
        }
    }
}