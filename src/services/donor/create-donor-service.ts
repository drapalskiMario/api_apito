import { Model } from 'mongoose'
import { Donor } from '../../entities/Donor'

export interface CreateDonorDTO {
  name: string,
  lastName: string,
  email: string,
  phone: string
}

export class CreateDonorService {
  constructor (private donorModel: Model<Donor>) {}

  async create (createParams: CreateDonorDTO): Promise<Donor> {
    const post = await this.donorModel.create(createParams)
    const error = post.validateSync()
    if (!error) {
      return await post.save()
    }
    return null
  }
}
