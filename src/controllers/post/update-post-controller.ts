import { Request, Response } from 'express'
import { UpdatePostService } from '../../services/post/update-post-service copy'

export class UpdatePostController {
  constructor (private updatePostService: UpdatePostService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { title, description, photo, tags, category } = req.body
      const { id } = req.params

      if (title && description && photo && tags && category) {
        const result = await this.updatePostService.update(id, { title, description, photo, tags, category })
        if (result) {
          res.json({ success: 'post updated' })
        } else {
          res.json({ error: 'could not update post' })
        }
      } else {
        res.status(400).json({ error: 'invalid params' })
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
