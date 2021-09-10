import { Request, Response } from 'express'
import { LoadDonorController } from '../../controllers/donor/load-donor-controller'
import { DonorModel } from '../../entities/Donor'
import { LoadAllDonorService } from '../../services/donor/load-all-donor-service'

export const makeLoadDonorController = (req: Request, res: Response) => {
  const loadAllDonorService = new LoadAllDonorService(DonorModel)
  const loadDonorController = new LoadDonorController(loadAllDonorService)
  return loadDonorController.handler(req, res)
}
