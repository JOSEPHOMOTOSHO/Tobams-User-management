import { Router } from 'express'
import { OK } from 'http-status'

import * as Ctrl from '../controllers'
import { Auth, wrapCtrl } from '../../../common'

const router = Router()

router.get('/', Auth.allowUser, wrapCtrl(OK, Ctrl.getDashboardMessage))

export { router as dashboard }
