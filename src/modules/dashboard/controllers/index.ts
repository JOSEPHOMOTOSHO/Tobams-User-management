import { ControllerInput } from '../../../types'

export const getDashboardMessage = async ({
  user,
}: ControllerInput<{}, {}, {}>) => {
  return { message: `Welcome to your dashboard, ${user?.username}` }
}
