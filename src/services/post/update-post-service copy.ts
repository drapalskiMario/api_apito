import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

interface UpdatePostDTO {
  title: string,
  description: string,
  photo: string[],
  tags: string[],
  category: string,
}

export class UpdatePostService {
  constructor (private postModel: Model<Post>) {}

  async update (id: string, updateParams: UpdatePostDTO): Promise<boolean> {
    const updated = await this.postModel.updateOne({ _id: id }, updateParams)
    if (updated) {
      return true
    } else {
      return null
    }
  }
}
