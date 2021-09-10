import { Request, Response } from 'express'
import { LoadPostController } from '../../controllers/post/load-post-controller'
import { PostModel } from '../../entities/Post'
import { LoadAllPostService } from '../../services/post/load-all-post-service'
import { LoadPostByCategoryService } from '../../services/post/load-by-category-post-service'
import { LoadPostsByTagService } from '../../services/post/load-by-tag-post-service'

export const makeLoadPostController = (req: Request, res: Response) => {
  const loadAllPostService = new LoadAllPostService(PostModel)
  const loadPostByCategoryService = new LoadPostByCategoryService(PostModel)
  const loadPostByTagService = new LoadPostsByTagService(PostModel)
  const loadPostController = new LoadPostController(loadAllPostService, loadPostByCategoryService, loadPostByTagService)
  return loadPostController.handler(req, res)
}
