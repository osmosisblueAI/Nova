'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Store the current reference to avoid stale closures
    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Create globe geometry
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    
    // Create wireframe material with a darker blue color
    const material = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // blue-600 instead of cyan
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Position camera
    camera.position.z = 7;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    let frameId: number;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotate globe
      globe.rotation.y += 0.001;
      globe.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Create point lights
    const pointLight1 = new THREE.PointLight(0x4AAAE5, 0.8);
    pointLight1.position.set(10, 10, 10);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Dispose of resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default Globe; 