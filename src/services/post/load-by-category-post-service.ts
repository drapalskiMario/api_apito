import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

export class LoadPostByCategoryService {
  constructor (private postModel: Model<Post>) {}

  async loadByCategory (category: string, limit: number, skip: number): Promise <Post[]> {
    return await this.postModel.find({ category }).limit(limit).skip(skip)
  }
}
