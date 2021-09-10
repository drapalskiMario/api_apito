import { Request, Response } from 'express'
import { CreatePostController } from '../../controllers/post/create-post-controller'
import { PostModel } from '../../entities/Post'
import { CreatePostService } from '../../services/post/create-post-service'

export const makeCreatePostController = (req: Request, res: Response) => {
  const createPostService = new CreatePostService(PostModel)
  const createPostController = new CreatePostController(createPostService)
  return createPostController.handler(req, res)
}
