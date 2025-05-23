'use client'

import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  CircularProgress,
  Box
} from '@mui/material'
import { useState, useEffect } from 'react'
import { ArrowForward, ArrowBack, Close } from '@mui/icons-material'
import Image from 'next/image'

type SelectedImageViewerProps = {
  images: string[]
  startingIndex: number
  open: boolean
  onClose: () => void
  isText: boolean
}

export default function SelectedImageViewer({
  images,
  startingIndex,
  open,
  onClose,
  isText
}: SelectedImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    if (open) {
      setCurrentIndex(startingIndex)
      setError(null)
      setLoading(false)
    }
  }, [open, startingIndex])

  const handleNext = () => {
    setLoading(true)
    if (images)
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
    setLoading(false)
  }

  const handlePrevious = () => {
    setLoading(true)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
    setLoading(false)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullScreen
      PaperProps={{
        sx: {
          position: 'relative',
          margin: { xs: 1, sm: 2, md: 3 },
          width: { xs: 'calc(100% - 16px)', sm: 'auto' },
          maxHeight: '100vh',
          backgroundColor: 'black'
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'grey.500',
          zIndex: 1
        }}
      >
        <Close />
      </IconButton>
      <DialogContent sx={{ p: 0, position: 'relative', overflow: 'hidden' }}>
        <Box
          style={{
            width: '100%',
            height: '95vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'
          }}
        >
          {loading ? (
            <div
              style={{
                width: '100vh',
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CircularProgress color="primary" />
            </div>
          ) : error ? (
            <div
              style={{ color: 'white', padding: '20px', textAlign: 'center' }}
            >
              {error}
            </div>
          ) : !loading && images && images.length > 0 ? (
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                transform: isText ? 'scale(1.12)' : 'scale(1.05)'
              }}
              width={1000}
              height={800}
              priority
            />
          ) : (
            <div
              style={{ color: 'white', padding: '20px', textAlign: 'center' }}
            >
              No images available
            </div>
          )}
        </Box>
      </DialogContent>

      {!loading && !error && images && images.length > 0 && (
        <DialogActions
          sx={{
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            backgroundColor: '#f5f5f5',
            maxHeight: '40px'
          }}
        >
          <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
            <ArrowBack />
          </IconButton>
          <div>
            {currentIndex + 1} / {images.length}
          </div>
          <IconButton
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
          >
            <ArrowForward />
          </IconButton>
        </DialogActions>
      )}
    </Dialog>
  )
}
