/* eslint-disable react/no-unknown-property */

import React from 'react'
import * as THREE from 'three'
import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'
import { Sphere } from '@react-three/drei'
import { Layout } from '@/layout/index'
import { useStyles } from '@/styles/pages/map.style'

export default function Map() {
  const { styles } = useStyles()

  const texture = useLoader(
    THREE.TextureLoader,
    'https://res.hc-cdn.com/cpage-pep-home-page/2.0.10/images/global-site-3d/%E5%9C%B0%E5%9B%BE.jpg'
  )
  return (
    <>
      <div className={styles.container}>
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} />
          <Sphere args={[1, 64, 64]}>
            <meshBasicMaterial attach="material" map={texture} />
          </Sphere>
          <OrbitControls
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
            autoRotate={true}
            autoRotateSpeed={0.2}
            enablePan={false}
          />
        </Canvas>
      </div>
    </>
  )
}

Map.Layout = Layout
