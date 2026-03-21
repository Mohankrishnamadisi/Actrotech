import { supabase } from './supabaseClient'

export const subscribeToUpdates = async (email: string, name: string) => {
  const { data, error } = await supabase
    .from('subscribers')
    .insert([{ email, name }])

  if (error) throw error
  return data
}

export const sendContactMessage = async (name: string, email: string, message: string) => {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, message }])

  if (error) throw error
  return data
}

export const applyForJob = async (name: string, email: string, phone: string, role: string, resume_url: string) => {
  const { data, error } = await supabase
    .from('job_applications')
    .insert([{ name, email, phone, role, resume_url }])

  if (error) throw error
  return data
}