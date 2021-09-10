import { Router } from 'express'
import { makeCreatePostController } from '../factory/post/create-post-controller-factory'
import { makeDeletePostController } from '../factory/post/delete-post-controller-factory'
import { makeLoadPostByTitleController } from '../factory/post/load-post-by-title-factory'
import { makeLoadPostController } from '../factory/post/load-post-controller-factory'
import { makeUpdatePostController } from '../factory/post/update-post-controller-factory'

const postRouter = Router()

postRouter.post('/posts', makeCreatePostController)
postRouter.get('/posts', makeLoadPostController)
postRouter.get('/posts/:title', makeLoadPostByTitleController)
postRouter.put('/posts/:id', makeUpdatePostController)
postRouter.delete('/posts/:id', makeDeletePostController)

export default postRouter
