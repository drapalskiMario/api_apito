import { Model } from 'mongoose'
import { Donor } from '../../entities/Donor'

export class DeleteDonorService {
  constructor (private donorModel: Model<Donor>) {}

  async delete (id: string): Promise<boolean> {
    const deleted = await this.donorModel.deleteOne({ _id: id })
    if (deleted.deletedCount > 0) {
      return true
    } else {
      return false
    }
  }
}
