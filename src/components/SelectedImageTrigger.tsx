'use client'

import { useState } from 'react'
import { Box } from '@mui/material'

import SelectedImageViewer from './SelectedImageViewer'

type GalleryTriggerProps = {
  children: React.ReactNode
  images: string[]
  startingIndex: number
  isText: boolean
}

export default function SelectedImageTrigger({
  children,
  images,
  startingIndex,

  isText
}: GalleryTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box style={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
        {children}
      </Box>

      <SelectedImageViewer
        images={images}
        startingIndex={startingIndex}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        isText={isText}
      />
    </>
  )
}
