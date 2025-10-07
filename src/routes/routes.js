import express from 'express'

import { pageController } from '../controller/pageController.js'

const router = express.Router()

router.get('/', pageController)

export { router }