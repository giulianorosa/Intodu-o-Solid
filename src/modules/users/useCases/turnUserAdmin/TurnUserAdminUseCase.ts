import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const adm = this.usersRepository.findById(user_id);

    if (!adm) {
      throw new Error("User dont are ADM");
    }

    const admin = this.usersRepository.turnAdmin(adm);

    return admin;
  }
}

export { TurnUserAdminUseCase };
