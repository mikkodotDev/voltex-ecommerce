import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import type { Group } from "three";

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={scene} scale={0.7} position={[0, 0, 0]} />
    </group>
  );
};

// Fallback loader component
const LoaderFallback: React.FC = () => {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f8f8f6" wireframe />
      </mesh>
    </group>
  );
};

const Model3DViewer: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-10, -15, -5]} intensity={0.6} />

      {/* Model with Suspense */}
      <Suspense fallback={<LoaderFallback />}>
        <Model url="/models/scene.gltf" />
      </Suspense>

      {/* OrbitControls */}
      <OrbitControls enableZoom={true} enablePan={true} autoRotate={false} />
    </Canvas>
  );
};

export default Model3DViewer;
