import { Request, Response } from 'express'
import { CreateDonorService } from '../../services/donor/create-donor-service'

export class CreateDonorController {
  constructor (private createDonorService: CreateDonorService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { name, lastName, email, phone } = req.body

      if (name && lastName && email && phone) {
        const result = await this.createDonorService.create({ name, lastName, email, phone })
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
