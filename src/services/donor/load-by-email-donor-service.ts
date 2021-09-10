import { Model } from 'mongoose'
import { Donor } from '../../entities/Donor'

export class LoadDonorByEmailService {
  constructor (private donorModel: Model<Donor>) {}

  async loadByEmail (email: string): Promise <Donor> {
    return await this.donorModel.findOne({ email })
  }
}
