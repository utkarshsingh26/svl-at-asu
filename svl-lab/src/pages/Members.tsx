import { NavbarDemo } from '../components/NavbarDemo';
import { AnimatedTooltipPreview } from '../components/AnimatedTooltipPreview';
import { ExpandableCardDemo } from '../components/ExpandableCardDemo';

function Members() {
  return (
          <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <NavbarDemo />
      <div className="mt-4"> 
        <AnimatedTooltipPreview />
      </div>
      <div className="mt-4"> 
        <ExpandableCardDemo />
      </div>
      <div className="mt-4 w-full flex justify-end">
        <AnimatedTooltipPreview />
      </div>
    </div>

  );
}

export default Members;
