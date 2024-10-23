import { NavbarDemo } from '../components/NavbarDemo';
import { TextGenerateEffectDemo } from '../components/TextGenerateEffectDemo';

function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <NavbarDemo />
      <TextGenerateEffectDemo />

    </div>
  );
}

export default About;



