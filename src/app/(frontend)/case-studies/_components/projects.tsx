'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

const CabinetOfCuriosities = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rotatingContainerRef = useRef<HTMLDivElement>(null)
  const incrRef = useRef(0)

  // Project data with slugs for navigation
  const projectItems = [
    {
      id: 'ocean-waves',
      title: 'Ocean Dynamics',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
      slug: 'ocean-dynamics',
    },
    {
      id: 'forest-canopy',
      title: 'Forest Ecosystem',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
      slug: 'forest-ecosystem',
    },
    {
      id: 'mountain-peak',
      title: 'Mountain Explorer',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      slug: 'mountain-explorer',
    },
    {
      id: 'lake-reflection',
      title: 'Lake Serenity',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
      slug: 'lake-serenity',
    },
    {
      id: 'desert-landscape',
      title: 'Desert Mirage',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=600&fit=crop',
      slug: 'desert-mirage',
    },
    {
      id: 'coastal-cliffs',
      title: 'Coastal Views',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=600&fit=crop',
      slug: 'coastal-views',
    },
  ]
  // Duplicate the array for seamless rotation
  const allProjectItems = [...projectItems, ...projectItems]

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

      // Function to update clickability based on rotation
      const updateClickability = () => {
        const containerRotation = incrRef.current % 360
        let closestToFront = 0
        let minDistance = Infinity

        medias.forEach((media, index) => {
          const mediaRotation = (360 / mediasTotal) * index
          const totalRotation = (containerRotation + mediaRotation) % 360
          const normalizedRotation = totalRotation < 0 ? totalRotation + 360 : totalRotation

          // Calculate distance from front (0 degrees)
          const distanceFromFront = Math.min(normalizedRotation, 360 - normalizedRotation)

          if (distanceFromFront < minDistance) {
            minDistance = distanceFromFront
            closestToFront = index
          }
        })

        // Enable clicks for the item closest to front and disable for others
        medias.forEach((media, index) => {
          const link = media.querySelector('.cabinet-media') as HTMLElement
          if (link) {
            const isClickable = index === closestToFront
            link.style.pointerEvents = isClickable ? 'auto' : 'none'
            link.style.zIndex = isClickable ? '20' : '10'
            // Add visual feedback for clickable items
            link.style.opacity = isClickable ? '1' : '0.7'
          }
        })
      }

      // QuickTo functions for smooth animations
      const rotTo = gsap.quickTo(rotatingContainerRef.current, 'rotation', {
        duration: 0.8,
        ease: 'power4',
        onUpdate: updateClickability,
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

      // Initial clickability setup
      updateClickability()

      window.addEventListener('wheel', handleWheel, { passive: true })

      return () => {
        window.removeEventListener('wheel', handleWheel)
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="overflow-hidden h-screen fixed top-0 left-0 w-full">
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
          {allProjectItems.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="inner-media absolute top-0 left-0 w-full h-full flex justify-center"
            >
              <Link
                href={`/case-studies/${project.slug}`}
                className="cabinet-media cursor-pointer hover:scale-105 transition-all duration-300"
                style={{
                  width: '20vw',
                  height: '26vw',
                  marginTop: '50vh',
                  willChange: 'transform',
                  display: 'block',
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <img
                  className="object-contain w-full h-full"
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                  style={{
                    objectPosition: '50% 100%',
                    pointerEvents: 'none',
                  }}
                />
                {/* Optional: Add title overlay for better UX */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CabinetOfCuriosities
