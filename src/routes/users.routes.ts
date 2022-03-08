import {Router} from 'express'
import { getAll } from '../controllers/users.controllers';

const router = Router()

router.get('/users', getAll)

export default router;