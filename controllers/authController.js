const { hashPassword, comparePassword, generateToken } = require('../services/authService');
const User = require('../models/user');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
      return res.status(200).json({ message: 'NAME EXIST' });
    }

    // Criptografa a senha
    const hashedPassword = await hashPassword(password);

    // Cria o usuário no banco de dados
    const newUser = await User.create({ username:username, password: hashedPassword });

    // Gera um token JWT
    const token = generateToken(newUser);

    return res.status(200).json({ token, user: { id: newUser.id, username: newUser.username} });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro no servidor.' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Email ou senha inválidos.' });
    }

    // Compara a senha
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email ou senha inválidos.' });
    }

    // Gera um token JWT
    const token = generateToken(user);

    return res.status(200).json({ token, user: { id: user.id, username: user.username } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'NAME EXIST' });
  }
};

module.exports = { register, login };
