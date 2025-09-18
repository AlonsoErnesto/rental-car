import Navbar from '@/components/shared/Navbar/Navbar';
import DriveToday from './components/DriveToday/DriveToday';
import Features from './components/Features/Features';
import FirstBlock from './components/FirstBlock/FirstBlock';
import OurFleet from './components/OurFleet/OurFleet';
import SliderBrands from './components/SliderBrands/SliderBrands';

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
}
