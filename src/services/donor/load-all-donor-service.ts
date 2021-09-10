import { Model } from 'mongoose'
import { Donor } from '../../entities/Donor'

export class LoadAllDonorService {
  constructor (private donorModel: Model<Donor>) {}

  async loadAll (limit: number, skip: number): Promise <Donor[]> {
    return await this.donorModel.find({}).limit(limit).skip(skip)
  }
}
