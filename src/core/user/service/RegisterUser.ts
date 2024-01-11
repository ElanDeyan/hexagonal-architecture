import UseCase from "@/core/shared/UseCase";
import User from "../model/User";

export default class RegisterUser implements UseCase<User, void> {
  async run(user: User): Promise<void> {
    const cryptographicPassword = user.password.split("").reverse().join()
    console.log(cryptographicPassword)
  }
}
