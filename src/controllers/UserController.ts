import { Request, Response } from "express";
import { UserService } from "../services/UserServices";
import { CryptoPassword } from "../utils/CryptoPassword";

class UserController {
  async create(req: Request, res: Response) {
    const userService = new UserService();
    const cryptoPassword = new CryptoPassword();

    const { name, last_name, email, pass } = req.body;
    const password = cryptoPassword.createCryptPassword(pass);

    const user = await userService.create({ name, last_name, email, password });

    return res.json(user);
  }

  async authenticate(req: Request, res: Response) {
    const { email, pass } = req.body;
    const cryptoPassword = new CryptoPassword();
    const userService = new UserService();

    const hash = await userService.authenticate(email);

    const isAuthenticate = cryptoPassword.authenticate(pass, hash.toString());

    return res.json(isAuthenticate);
  }
}

export { UserController };
