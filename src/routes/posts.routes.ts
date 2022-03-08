import {Router} from 'express'
import { getAll } from '../controllers/posts.controllers';

const router = Router()

router.get('/posts', getAll)

export default router;