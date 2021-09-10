import { model, Schema } from 'mongoose'

export interface Post {
  id: string,
  title: string,
  description: string,
  photo: string[],
  tags: string[],
  category: string,
  createdAt: string
}

const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: [String], required: true },
  tags: { type: [String], required: true },
  category: { type: String, required: true },
  createdAt: { type: String, required: true }
})

export const PostModel = model<Post>('Posts', postSchema)
