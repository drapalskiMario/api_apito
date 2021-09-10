import { Request, Response } from 'express'
import { LoadPostByTitleController } from '../../controllers/post/load-post-by-title-controller'
import { PostModel } from '../../entities/Post'
import { LoadPostByTitleService } from '../../services/post/load-by-title-post-service'

export const makeLoadPostByTitleController = (req: Request, res: Response) => {
  const loadPostByTitleService = new LoadPostByTitleService(PostModel)
  const loadPostByTitleController = new LoadPostByTitleController(loadPostByTitleService)
  return loadPostByTitleController.handler(req, res)
}
