import { getCustomRepository, Repository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";
import { CryptoPassword } from "../utils/CryptoPassword";

interface user {
  name: string;
  last_name: string;
  password: string;
  email: string;
}

class UserService {
  private userService: Repository<User>;
  constructor() {
    this.userService = getCustomRepository(UserRepository);
  }

  /**Metodos */
  async create({ name, last_name, password, email }: user) {
    const user = this.userService.create({
      name,
      last_name,
      password,
      email,
    });

    await this.userService.save(user);

    return user;
  }

  async authenticate({ email, pass }) {
    const { password } = await this.userService.findOne(email);

    return password;
  }
}

export { UserService };
