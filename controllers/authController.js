const { hashPassword, comparePassword, generateToken } = require('../services/authService');
const User = require('../models/user');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica se o usuário já existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Email já registrado.' });
    }

    // Criptografa a senha
    const hashedPassword = await hashPassword(password);

    // Cria o usuário no banco de dados
    const newUser = await User.create({ name, email, password: hashedPassword });

    // Gera um token JWT
    const token = generateToken(newUser);

    return res.status(201).json({ token, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro no servidor.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
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

    return res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro no servidor.' });
  }
};

module.exports = { register, login };
