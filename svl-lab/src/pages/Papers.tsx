import { NavbarDemo } from '../components/NavbarDemo';
import { TimelineDemo } from '../components/TimelineDemo';

function Papers() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <NavbarDemo />
      <br />
      <TimelineDemo />
    </div>
  );
}

export default Papers;



