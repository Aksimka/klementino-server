import { prismaConnection } from '../../server'

export default () => {
  const getAllUsers = () => {
    return prismaConnection.users.findMany()
  }

  const createNewUser = (payload) => {
    const { userData } = payload
    try {
      return prismaConnection.users.create({ data: userData })
    } catch (e) {
      return e
    }
  }

  return { getAllUsers, createNewUser }
}
