import { model, Schema } from 'mongoose'

export interface Admin {
  id: string,
  email: string,
  password: string,
}

const adminSchema = new Schema<Admin>({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

export const AdminModel = model<Admin>('Admin', adminSchema)
