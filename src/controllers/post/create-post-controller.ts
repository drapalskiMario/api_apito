import { Request, Response } from 'express'
import { CreatePostService } from '../../services/post/create-post-service'

export class CreatePostController {
  constructor (private createPostService: CreatePostService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { title, description, photo, tags, category } = req.body
      const createdAt = new Date().toLocaleDateString('pt-br')

      if (title && description && photo && tags && category && createdAt) {
        const result = await this.createPostService.create({ title, description, photo, tags, category, createdAt })
        if (result) {
          res.json(result)
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
