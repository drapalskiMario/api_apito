import { Request, Response } from 'express'
import { LoadPostByTagController } from '../../controllers/post/load-post-by-tag-controller'
import { PostModel } from '../../entities/Post'
import { LoadPostsByTagService } from '../../services/post/load-by-tag-post-service'

export const makeLoadPostByTagController = (req: Request, res: Response) => {
  const loadPostsByTagService = new LoadPostsByTagService(PostModel)
  const loadPostByTagController = new LoadPostByTagController(loadPostsByTagService)
  return loadPostByTagController.handler(req, res)
}
