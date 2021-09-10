import { Request, Response } from 'express'
import { LoadPostByCategoryController } from '../../controllers/post/load-post-by-categorycontroller'
import { PostModel } from '../../entities/Post'
import { LoadPostByCategoryService } from '../../services/post/load-by-category-post-service'

export const makeLoadByCategoryPostController = (req: Request, res: Response) => {
  const loadByCategoryPostService = new LoadPostByCategoryService(PostModel)
  const loadByCategoryPostController = new LoadPostByCategoryController(loadByCategoryPostService)
  return loadByCategoryPostController.handler(req, res)
}
