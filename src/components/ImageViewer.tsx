'use client'

import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  CircularProgress,
  Box,
  Typography
} from '@mui/material'
import { useState, useEffect } from 'react'
import { ArrowForward, ArrowBack, Close } from '@mui/icons-material'
import Image from 'next/image'

type ImageViewerProps = {
  fetchImages: () => Promise<{
    imageUrls: string[] | null
    error: string | null
  }>
  open: boolean
  onClose: () => void
  isText: boolean
  isModal: boolean
}

export default function ImageViewer({
  fetchImages,
  open,
  onClose,
  isText,
  isModal
}: ImageViewerProps) {
  const [images, setImages] = useState<string[] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [_error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getAndSetImages = async () => {
      const { imageUrls, error } = await fetchImages()
      if (error) {
        setError(error)
      }
      if (imageUrls) {
        setImages(imageUrls)
      }
    }
    if (open) {
      setLoading(true)
      setError(null)
      getAndSetImages()
      setLoading(false)
    }
  }, [open, fetchImages])

  const handleNext = () => {
    if (images)
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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isModal ? false : 'lg'}
      fullScreen={!isModal}
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
      {isModal && images && images.length > 0 && (
        <Box
          sx={{
            position: { xs: 'absolute', md: 'relative' }, // Absolute on mobile, relative on desktop
            top: { xs: 56, md: 0 }, // Position below close button on mobile only
            left: { xs: 0, md: 'auto' },
            right: { xs: 0, md: 'auto' },
            marginTop: { xs: 0, md: 2 }, // Add margin only on desktop
            paddingX: { xs: 2, md: 3 },
            paddingY: { xs: 1, md: 0 },
            zIndex: 1
          }}
        >
          <Typography color="white">
            Próximo evento: Domingo 22 de febrero a las 12 del día
          </Typography>
          <a href="https://maps.app.goo.gl/HKNabeLzYbNgtgfEA" target="blank">
            {' '}
            <Typography>Hotel y Spa Hacienda de Cortés, Cuernavaca</Typography>
          </a>
        </Box>
      )}
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
            height: isModal ? 'auto' : '95vh',
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
          ) : _error ? (
            <div
              style={{ color: 'white', padding: '20px', textAlign: 'center' }}
            >
              {_error}
            </div>
          ) : (
            images &&
            images.length > 0 && (
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  transform: isText ? 'scale(1.12)' : 'scale(1.05)'
                }}
                width={isModal ? 800 : 1000}
                height={isModal ? 600 : 800}
                priority
              />
            )
          )}
        </Box>
      </DialogContent>

      {!loading && !_error && images && images.length > 0 && !isModal && (
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
