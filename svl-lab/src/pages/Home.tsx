import { Vortex } from '../components/ui/vortex';
import { NavbarDemo } from '../components/NavbarDemo';

function Home() {

  return (
    <>
      <Vortex backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
            <NavbarDemo></NavbarDemo>
      </Vortex>
    </>
  );
}

export default Home;


