import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

export class LoadPostByTitleService {
  constructor (private postModel: Model<Post>) {}

  async loadByTitle (title: string): Promise <Post> {
    return await this.postModel.findOne({ title })
  }
}
