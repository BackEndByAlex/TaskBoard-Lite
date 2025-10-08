import express from 'express'

import authRoutes from './api/auth/authRoutes.js'
import taskRoutes from './api/tasks/taskRoutes.js'
import userRoutes from './api/users/userRoutes.js'

import { pageController } from '../controller/pageController.js'

const router = express.Router()

router.get('/', pageController) // home page route

router.use('/auth', authRoutes)
router.use('/tasks', taskRoutes)
router.use('/users', userRoutes)

export default router