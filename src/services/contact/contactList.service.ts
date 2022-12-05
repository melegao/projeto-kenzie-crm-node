import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"



const contactListService = async (id: string) => {

    console.log(id)

    // const contactRepository = AppDataSource.getRepository(Contact)

    // const contact = await contactRepository.findOneBy({id})

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const teste = users.find(user => user.id === id)

    

    return teste
}

export default contactListService