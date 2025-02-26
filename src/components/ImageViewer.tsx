'use client'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button
} from '@mui/material'
import { useState } from 'react'
import { ArrowForward, ArrowBack } from '@mui/icons-material'
import Image from 'next/image'

export default function ImageViewer({
  images
}: // isOpen
{
  images: string[]
  isOpen: boolean
}) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClose = () => setOpen(false)
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div>
      {/* Trigger to open modal */}
      <Button onClick={() => setOpen(true)}>View Images</Button>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Image Viewer</DialogTitle>
        <DialogContent>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
          />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
          >
            <ArrowForward />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
