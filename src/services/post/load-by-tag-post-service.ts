import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

export class LoadPostsByTagService {
  constructor (private postModel: Model<Post>) {}

  async loadByTag (tag: string, limit: number, skip: number): Promise <Post[]> {
    return await this.postModel.find({ tags: tag }).limit(limit).skip(skip)
  }
}
