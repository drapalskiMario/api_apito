import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

export class DeletePostService {
  constructor (private postModel: Model<Post>) {}

  async delete (id: string): Promise<boolean> {
    const deleted = await this.postModel.deleteOne({ _id: id })
    if (deleted.deletedCount > 0) {
      return true
    } else {
      return false
    }
  }
}
