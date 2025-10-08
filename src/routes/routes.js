import express from 'express'

import authRoutes from './api/auth/authRoutes.js'
import taskRoutes from './api/tasks/taskRoutes.js'
import userRoutes from './api/users/userRoutes.js'

import { 
  renderHomePage, 
  renderLoginPage, 
  renderRegisterPage,
} from '../controller/pageController.js'

const router = express.Router()

router.get('/', renderHomePage)
router.get('/login', renderLoginPage)
router.get('/register', renderRegisterPage)


router.use('/auth', authRoutes)
router.use('/tasks', taskRoutes)
router.use('/users', userRoutes)

export default router