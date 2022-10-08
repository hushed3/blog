import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

export const BgParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: 'transparent',
            },
          },
          backgroundMask: {
            composite: 'destination-out',
            cover: {
              color: {
                value: '#fff',
              },
              opacity: 1,
            },
            enable: false,
          },
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'],
            },
            move: {
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              speed: 1,
            },
            number: {
              limit: 0,
              value: 50,
            },
            opacity: {
              value: {
                min: 0.05,
                max: 0.5,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 2,
                decay: 0,
                sync: false,
                destroy: 'none',
                startValue: 'random',
                minimumValue: 0.05,
              },
            },
            size: {
              value: 3,
              random: {
                enable: true,
                minimumValue: 1,
              },
            },
          },
        }}
      />
    </>
  )
}
