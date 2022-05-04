import UserRepository from "../repositories/user.repository.js";

class CreateUserService {
  execute(data) {
    /*
      username
      name
      id
    */

    if (!data.username) {
      throw new Error("Username é obrigatório");
    }

    const userRepository = UserRepository;

    // Verificar se username existe no banco de dados
    const existUser = userRepository.findByUsername(data.username);

    if (existUser) {
      throw new Error("Usuário já cadastrado!");
    }

    // Salvar o usuário

    return userRepository.save(data);
  }
}

export { CreateUserService };
