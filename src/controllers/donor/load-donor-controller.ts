import { Request, Response } from 'express'
import { LoadAllDonorService } from '../../services/donor/load-all-donor-service'

export class LoadDonorController {
  constructor (private loadAllService: LoadAllDonorService) {}

  async handler (req: Request, res: Response): Promise<void> {
    try {
      const { limit, offset } = req.query

      if (limit && offset) {
        const result = await this.loadAllService.loadAll(Number(limit), Number(offset))
        res.json(result)
      } else {
        const result = await this.loadAllService.loadAll(null, null)
        res.json(result)
      }
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}
