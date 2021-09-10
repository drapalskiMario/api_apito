import { Request, Response } from 'express'
import { LoadDonorByEmailService } from '../../services/donor/load-by-email-donor-service'

export class LoadDonorByEmailController {
  constructor (private loadByEmailService: LoadDonorByEmailService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params

      if (email) {
        const result = await this.loadByEmailService.loadByEmail(email)
        res.json(result)
      } else {
        res.status(400).json({ error: 'missing param: email' })
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
