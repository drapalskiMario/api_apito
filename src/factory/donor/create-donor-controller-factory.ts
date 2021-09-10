import { Request, Response } from 'express'
import { CreateDonorController } from '../../controllers/donor/create-donor-controller'
import { DonorModel } from '../../entities/Donor'
import { CreateDonorService } from '../../services/donor/create-donor-service'

export const makeCreateDonorController = (req: Request, res: Response) => {
  const createDonorService = new CreateDonorService(DonorModel)
  const createDonnorController = new CreateDonorController(createDonorService)
  return createDonnorController.handler(req, res)
}
