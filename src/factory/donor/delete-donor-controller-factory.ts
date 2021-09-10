import { Request, Response } from 'express'
import { DeleteDonorController } from '../../controllers/donor/delete-donor-controller'
import { DonorModel } from '../../entities/Donor'
import { DeleteDonorService } from '../../services/donor/delete-donor-service'

export const makeDeleteDonorController = (req: Request, res: Response) => {
  const deleteDonorService = new DeleteDonorService(DonorModel)
  const deleteDonorController = new DeleteDonorController(deleteDonorService)
  deleteDonorController.handler(req, res)
}
