'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Center } from '@react-three/drei'
import { Group } from 'three'
import TypewriterChatBubble from './TypewriterChatBubble'

function EeveeMesh({ onCenterChanged }: { onCenterChanged?: (x: number, y: number, z: number) => void }) {
  const { scene } = useGLTF('/eevee.glb')
  const meshRef = useRef<Group>(null)
  // const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
    }
  })

  useEffect(() => {
    if (meshRef.current && onCenterChanged) {
      const { x, y, z } = meshRef.current.position
      onCenterChanged(x, y, z)
    }
  }, [onCenterChanged])

  useEffect(() => {
    if (meshRef.current && onCenterChanged) {
      const { x, y, z } = meshRef.current.position
      onCenterChanged(x, y, z)
    }
  }, [isMobile, onCenterChanged])

  return (
    <group
      ref={meshRef}
      // onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
      scale={isMobile ? [3.5, 3.5, 3.5] : [2.5, 2.5, 2.5]}
      // scale={[2.5, 2.5, 2.5]}
      rotation={[0.04, 0, 0]}
      //small-devices
		position={isMobile ? [0, -0.45, 0] : [-1.35, -0.1, 0]}
      //big-devices
      // position={[-0.5, -0.1, 0]}
    >
      <Center disableX disableZ>
        <primitive object={scene} />
      </Center>
    </group>
  )
}

const EeveeModel = () => {
  const controlsRef = useRef<any>(null)
  const updateTarget = (x: number, y: number, z: number) => {
    if (controlsRef.current) {
      controlsRef.current.target.set(x, y, z)
      controlsRef.current.update()
    }
  }
  return (
    <div className="w-full h-full">
      <Canvas

        camera={{ position: [1, 1.5, 5], fov: 35 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[1, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        
        <EeveeMesh onCenterChanged={updateTarget} />
        
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

export default EeveeModel
