import { Request, Response } from 'express'
import { LoadDonorByEmailController } from '../../controllers/donor/load-donor-by-email-controller'
import { DonorModel } from '../../entities/Donor'
import { LoadDonorByEmailService } from '../../services/donor/load-by-email-donor-service'

export const makeDonorLoadByEmailController = (req: Request, res: Response) => {
  const loadDonorByEmailService = new LoadDonorByEmailService(DonorModel)
  const loadDonorByEmailController = new LoadDonorByEmailController(loadDonorByEmailService)
  return loadDonorByEmailController.handler(req, res)
}
