import { Request, Response } from 'express'
import { LoadPostByCategoryService } from '../../services/post/load-by-category-post-service'

export class LoadPostByCategoryController {
  constructor (
    private loadByCategoryService: LoadPostByCategoryService
  ) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { category } = req.params
      const { limit, offset } = req.query

      if (category && limit && offset) {
        const result = await this.loadByCategoryService.loadByCategory(category, Number(limit), Number(offset))
        res.json(result)
      } else {
        const result = await this.loadByCategoryService.loadByCategory(category, null, null)
        res.json(result)
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
