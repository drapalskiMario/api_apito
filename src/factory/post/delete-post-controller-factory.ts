import { Request, Response } from 'express'
import { DeletePostController } from '../../controllers/post/delete-post-controller'
import { PostModel } from '../../entities/Post'
import { DeletePostService } from '../../services/post/delete-post-service'

export const makeDeletePostController = (req: Request, res: Response) => {
  const deletePostService = new DeletePostService(PostModel)
  const deletePostController = new DeletePostController(deletePostService)
  return deletePostController.handler(req, res)
}
