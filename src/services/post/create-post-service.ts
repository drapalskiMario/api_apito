import { Model } from 'mongoose'
import { Post } from '../../entities/Post'

export interface CreatePostDTO {
  title: string,
  description: string,
  photo: string[],
  tags: string[],
  category: string,
  createdAt: string
}

export class CreatePostService {
  constructor (private postModel: Model<Post>) {}

  async create (createParams: CreatePostDTO): Promise<Post> {
    const post = await this.postModel.create(createParams)
    const error = post.validateSync()
    if (!error) {
      return await post.save()
    }
    return null
  }
}
