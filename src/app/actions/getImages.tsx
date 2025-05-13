'use server'
import { createClient } from '../../utils/supabase/server'
export async function getImageUrls(
  bucket: string,
  folder?: string
): Promise<{ imageUrls: string[] | null; error: string | null }> {
  const supabase = await createClient()

  const { data, error } = await supabase.storage.from(bucket).list(folder)

  if (error) {
    return { imageUrls: null, error: error.message }
  }
  const filtered = data?.filter(
    (file) => file.name !== '.emptyFolderPlaceholder'
  )

  const urls =
    filtered?.map(
      (file) =>
        supabase.storage
          .from(bucket)
          .getPublicUrl(folder ? `${folder}/${file.name}` : file.name).data
          .publicUrl
    ) || []

  return { imageUrls: urls, error: null }
}
