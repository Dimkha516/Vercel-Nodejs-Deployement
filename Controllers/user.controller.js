const { UsersModel2 } = require("../Models/user2.model");

module.exports.getAllUsers = async (req, res) => {
  const allUsers = await UsersModel2.find();
  allUsers
    ? res.status(200).json(allUsers)
    : res.status(400).json({ message: "aucun utilisateur trouvé !" });
};

module.exports.getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UsersModel2.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Utilisateur non trouvé " + err });
  }
};

module.exports.createUser = async (req, res) => {
  const { nomComplet, phone, adress } = req.body;

  try {
    const newUser = await UsersModel2.create({
      nomComplet,
      phone,
      adress, 
    }); 
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: "Erreur création utilisateur " + err });
  }
};

module.exports.deleteUser = async () => {
  try {
    const userId = req.params.id;
    const deletedUser = await UsersModel2.findByIdAndDelete(userId);
    res.status(200).json({ message: "Utilisateur supprimé avec succès ! " });
  } catch (err) {
    res.status(400).json({ message: "Erreur suppression utilisateur " + err });
  }
};
