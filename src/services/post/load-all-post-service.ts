import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

export class LoadAllPostService {
  constructor (private postModel: Model<Post>) {}

  async loadAll (limit: number, skip: number): Promise <Post[]> {
    return await this.postModel.find({}).limit(limit).skip(skip)
  }
}
