import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "../context/ThemeContext.jsx";
import * as THREE from "three";

import skyScene from "../assets/3d/sky.glb";

export function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  const { isDarkMode } = useTheme();
  
  // Set up materials for day/night transitions
  useEffect(() => {
    if (sky.scene) {
      // Traverse all objects in the sky scene
      sky.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          // Clone materials to avoid modifying the original
          if (!child.originalMaterial) {
            child.originalMaterial = child.material.clone();
          }
          
          // Apply dark mode changes
          if (isDarkMode) {
            // Create a dark version of the material
            const darkMaterial = child.originalMaterial.clone();
            darkMaterial.color.multiplyScalar(0.15); // Darken
            darkMaterial.emissive = new THREE.Color(0x222244); // Add blue-ish glow
            child.material = darkMaterial;
          } else {
            // Restore original material
            child.material = child.originalMaterial.clone();
          }
        }
      });
    }
  }, [sky.scene, isDarkMode]);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
      
      {/* Add stars only in dark mode */}
      {isDarkMode && (
        <group>
          {/* Generate a field of stars */}
          {[...Array(200)].map((_, i) => (
            <mesh 
              key={i} 
              position={[
                Math.random() * 800 - 400,
                Math.random() * 400 - 100,
                Math.random() * 800 - 400
              ]}
            >
              <sphereGeometry args={[0.3 + Math.random() * 0.5, 8, 8]} />
              <meshStandardMaterial 
                color={new THREE.Color(0xffffff)} 
                emissive={new THREE.Color(0xffffff)}
                emissiveIntensity={1}
              />
            </mesh>
          ))}
        </group>
      )}
    </mesh>
  );
}
