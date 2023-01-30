import { Canvas } from "@react-three/fiber";
import { Blob } from "../../components/Blob";
import { OrbitControls } from '@react-three/drei';

export function Home() {

    return (
        <div className="container">
            <Canvas>
                <Blob />
                <OrbitControls />
            </Canvas>
            <h1>Blob animation React</h1>
        </div>
    )
}
