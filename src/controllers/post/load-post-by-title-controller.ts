import { Request, Response } from 'express'
import { LoadPostByTitleService } from '../../services/post/load-by-title-post-service'

export class LoadPostByTitleController {
  constructor (private loadByTitle: LoadPostByTitleService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { title } = req.params

      if (title) {
        const result = await this.loadByTitle.loadByTitle(title)
        res.json(result)
      } else {
        res.status(400).json({ error: 'missing param: title' })
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
