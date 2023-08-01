import { Router } from 'express'
import { userRoutes } from './users/routes'
import { dashboard } from './dashboard/routes'

const router = Router()

router.use('/api/users', userRoutes)

router.use('/api/dashboard', dashboard)

export { router as ApiRouter }
