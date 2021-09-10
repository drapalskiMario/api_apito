import { Request, Response } from 'express'
import { DeleteDonorService } from '../../services/donor/delete-donor-service'

export class DeleteDonorController {
  constructor (private deleteDonorService: DeleteDonorService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params

      if (id) {
        const result = await this.deleteDonorService.delete(id)
          if (result) {
            res.json({ sucess: 'donor deleted' })
          } else {
            res.json({ info: 'donor not found' })
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
