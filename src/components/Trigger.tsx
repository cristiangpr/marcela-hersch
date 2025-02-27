'use client'

import { useState } from 'react'
import { Button } from '@mui/material'
import ImageViewer from './ImageViewer'
import { getImageUrls } from '@/app/actions/getImages'

type GalleryTriggerProps = {
  label: string
  bucket: string
  folder: string
  isText: boolean
}

export default function GalleryTrigger({
  label,
  bucket,
  folder,
  isText
}: GalleryTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  // You can directly use the server action here
  const fetchImages = async () => {
    return getImageUrls(bucket, folder)
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{ width: '150px' }}
        onClick={() => setIsOpen(true)}
      >
        {label}
      </Button>

      <ImageViewer
        fetchImages={() => fetchImages()}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        isText={isText}
      />
    </>
  )
}
