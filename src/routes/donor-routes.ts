import { Router } from 'express'
import { makeCreateDonorController } from '../factory/donor/create-donor-controller-factory'
import { makeDeleteDonorController } from '../factory/donor/delete-donor-controller-factory'
import { makeDonorLoadByEmailController } from '../factory/donor/load-by-email-donor-controller-factory'
import { makeLoadDonorController } from '../factory/donor/load-donor-controller-factory'

const donorRouter = Router()

donorRouter.post('/donors', makeCreateDonorController)
donorRouter.get('/donors/:email', makeDonorLoadByEmailController)
donorRouter.get('/donors', makeLoadDonorController)
donorRouter.delete('/donors/:id', makeDeleteDonorController)

export default donorRouter
