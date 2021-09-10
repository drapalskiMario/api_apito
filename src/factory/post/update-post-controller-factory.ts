import { Request, Response } from 'express'
import { UpdatePostController } from '../../controllers/post/update-post-controller'
import { PostModel } from '../../entities/Post'
import { UpdatePostService } from '../../services/post/update-post-service copy'

export const makeUpdatePostController = (req: Request, res: Response) => {
  const updatePostService = new UpdatePostService(PostModel)
  const updatePostController = new UpdatePostController(updatePostService)
  return updatePostController.handler(req, res)
}
