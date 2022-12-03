import { User } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";


const userCreateService = async ({name, email, phone}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    
    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists){
        throw new Error ("Email Already Exists")
    }

    const user = new User()
    user.name = name
    user.email = email
    user.phone = phone

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService