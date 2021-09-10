import { model, Schema } from 'mongoose'

export interface Donor {
  id: string
  name: string,
  lastName: string,
  email: string,
  phone: string
}

const donorSchema = new Schema<Donor>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
})

export const DonorModel = model<Donor>('Donors', donorSchema)
