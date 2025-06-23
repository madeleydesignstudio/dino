'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const CabinetOfCuriosities = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rotatingContainerRef = useRef<HTMLDivElement>(null)
  const incrRef = useRef(0)

  // Generate media items with duplicates
  const mediaItems = [
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=600&fit=crop',
  ]
  // Duplicate the array for seamless rotation
  const allMediaItems = [...mediaItems, ...mediaItems]

  useGSAP(
    () => {
      if (!rotatingContainerRef.current) return

      // Initial setup for media positioning
      gsap.set('.cabinet-media', { yPercent: -50 })

      // Rotate each media evenly and assign random classes
      const medias = rotatingContainerRef.current.querySelectorAll('.inner-media')
      const mediasTotal = medias.length

      medias.forEach((media, index) => {
        const randomClass = Math.floor(Math.random() * 3) + 1
        media.classList.add(`media-${randomClass}`)
        gsap.set(media, {
          rotation: (360 / mediasTotal) * index,
        })
      })

      // QuickTo functions for smooth animations
      const rotTo = gsap.quickTo(rotatingContainerRef.current, 'rotation', {
        duration: 0.8,
        ease: 'power4',
      })

      const yTo1 = gsap.quickTo('.media-1 .cabinet-media', 'yPercent', {
        duration: 1,
        ease: 'power3',
      })

      const yTo2 = gsap.quickTo('.media-2 .cabinet-media', 'yPercent', {
        duration: 2,
        ease: 'power3',
      })

      const yTo3 = gsap.quickTo('.media-3 .cabinet-media', 'yPercent', {
        duration: 3,
        ease: 'power3',
      })

      const handleWheel = (e: WheelEvent) => {
        const deltaY = e.deltaY
        incrRef.current -= deltaY / 40
        rotTo(incrRef.current)

        // Extra animation effects
        const val = -Math.abs(deltaY / 4) - 50
        yTo1(val)
        yTo2(val)
        yTo3(val)
      }

      window.addEventListener('wheel', handleWheel, { passive: true })

      return () => {
        window.removeEventListener('wheel', handleWheel)
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className=" overflow-hidden h-screen fixed top-0 left-0 w-full">
      <section className="w-full h-full">
        <div
          ref={rotatingContainerRef}
          className="absolute"
          style={{
            width: '300vw',
            height: '300vw',
            left: '-100vw',
            willChange: 'transform',
          }}
        >
          {allMediaItems.map((src, index) => (
            <div
              key={index}
              className="inner-media absolute top-0 left-0 w-full h-full flex justify-center"
            >
              <img
                className="cabinet-media object-contain"
                src={src}
                alt=""
                style={{
                  width: '20vw',
                  height: '26vw',
                  marginTop: '50vh',
                  objectPosition: '50% 100%',
                  willChange: 'transform',
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CabinetOfCuriosities
