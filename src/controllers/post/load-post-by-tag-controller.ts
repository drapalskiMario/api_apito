import { Request, Response } from 'express'
import { LoadPostsByTagService } from '../../services/post/load-by-tag-post-service'

export class LoadPostByTagController {
  constructor (
    private loadByTagService: LoadPostsByTagService
  ) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { tag } = req.params
      const { limit, offset } = req.query

      if (tag && limit && offset) {
        const result = await this.loadByTagService.loadByTag(Array(tag), Number(limit), Number(offset))
        res.json(result)
      } else {
        const result = await this.loadByTagService.loadByTag(Array(tag), null, null)
        res.json(result)
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
