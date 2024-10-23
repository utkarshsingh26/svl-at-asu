import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `The Sonoran Visualization Laboratory at Arizona State University researches data visualization, human-computer interaction, and advanced interfaces for data science, under the direction of Professor Chris Bryan. Our focuses include advanced interfaces for complex data, explainable AI, and using virtual reality to understand 3D data.`;

export function TextGenerateEffectDemo() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
    <TextGenerateEffect words={words} />
    </div>
  );
}
