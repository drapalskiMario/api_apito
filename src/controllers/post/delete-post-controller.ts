import { Request, Response } from 'express'
import { DeletePostService } from '../../services/post/delete-post-service'

export class DeletePostController {
  constructor (private deletePostService: DeletePostService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      if (id) {
        const result = await this.deletePostService.delete(id)
        if (result) {
          res.json({ sucess: 'post deleted' })
        } else {
          res.json({ info: 'post not found' })
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
