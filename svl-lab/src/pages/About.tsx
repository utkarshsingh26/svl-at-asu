import { NavbarDemo } from '../components/NavbarDemo';
import { TextGenerateEffectDemo } from '../components/TextGenerateEffectDemo';
import { VortexDemoSecond } from '../components/VortexDemoSecond';

function About() {
  return (
      <VortexDemoSecond>
      <div className=" text-white min-h-screen flex flex-col items-center justify-center">
      <NavbarDemo />
      <TextGenerateEffectDemo />
    </div>
      </VortexDemoSecond>
  );
}

export default About;



