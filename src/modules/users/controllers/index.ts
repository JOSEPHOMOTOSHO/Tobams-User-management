import { userSchema, UserSchemaType } from './schemas'
import * as UserService from '../services'
import { ControllerInput } from '../../../types'

export const createAppUser = async ({
  input,
}: ControllerInput<UserSchemaType>) => {
  await userSchema.parseAsync(input)
  return UserService.createAppUser(input)
}

export const login = async ({ input }: ControllerInput<UserSchemaType>) => {
  await userSchema.parseAsync(input)
  return UserService.login(input)
}
