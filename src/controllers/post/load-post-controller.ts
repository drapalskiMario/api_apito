import { Request, Response } from 'express'
import { LoadAllPostService } from '../../services/post/load-all-post-service'
import { LoadPostByCategoryService } from '../../services/post/load-by-category-post-service'
import { LoadPostsByTagService } from '../../services/post/load-by-tag-post-service'

export class LoadPostController {
  constructor (
    private loadAllService: LoadAllPostService,
    private loadByCategoryService: LoadPostByCategoryService,
    private loadByTagService: LoadPostsByTagService
  ) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { limit, offset, category, tag } = req.query

      if (category && limit && offset) {
        const result = await this.loadByCategoryService.loadByCategory(String(category), Number(limit), Number(offset))
        res.json(result)
      } else if (tag && limit && offset) {
        const result = await this.loadByTagService.loadByTag(String(tag), Number(limit), Number(offset))
        res.json(result)
      } else if (limit && offset) {
        const result = await this.loadAllService.loadAll(Number(limit), Number(offset))
        res.json(result)
      } else {
        res.status(400).json({ error: 'invalid params' })
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
