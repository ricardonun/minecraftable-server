import { hashSync, compare, compareSync } from "bcrypt";

class CryptoPassword {
  createCryptPassword(password: string) {
    let cryptoPass = hashSync(password, 10);
    return cryptoPass;
  }

  authenticate(password: string, hash: string) {
    let isAuthenticate = compareSync(password, hash);

    return isAuthenticate;
  }
}

export { CryptoPassword };
