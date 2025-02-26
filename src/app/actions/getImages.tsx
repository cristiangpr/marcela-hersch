'use server'
import { createClient } from '../../utils/supabase/server'

export async function getImageUrls(
  bucket: string,
  folder: string
): Promise<string[] | undefined> {
  try {
    const supabase = await createClient()

    // Fetch the list of files from the bucket
    const { data, error } = await supabase.storage.from(bucket).list(folder)
    console.log('Supabase response data:', data)
    console.log('Supabase response error:', error)
    let imageUrls
    if (data) {
      imageUrls = data.map((file) => {
        const filePath = `${folder}/${file.name}`
        return supabase.storage.from(bucket).getPublicUrl(filePath).data
          .publicUrl // Get the public URL for each file
      })
    }
    return imageUrls
  } catch (error) {
    console.error('Error fetching images:', error)
    console.error('Error fetching gallery images:', error)
    throw new Error('Failed to load gallery images')
  }
}
