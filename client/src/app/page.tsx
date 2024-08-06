import DualImage from '../components/DualImage';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Features from '../components/Features';
import { VisitorsGraph } from '@/components/VisitorsGraph';
import { TripleGraphs } from '@/components/TripleGraphs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-12 text-black dark:text-white bg-stone-50 dark:bg-stone-950 max-w-screen-xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold italic mb-6 text-amber-400 dark:text-amber-500">Umineko API</h1>
          <p className="text-lg md:text-xl mb-3">
            A Web API for visual novel series Umineko When They Cry
          </p>
          <p className="text-lg md:text-xl mb-6">
            Access Information about Characters, Soundtrack, and More!
          </p>
          <Link href='/docs'>
            <Button variant="outline" className="bg-amber-400 dark:bg-amber-500 px-8 py-1.5 hover:bg-stone-50 border-stone-200 dark:border-stone-800 dark:hover:bg-stone-950">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hidden md:block">
          <DualImage
            src1="/thumbnail6.jpg"
            alt1="First Image"
            src2="/thumbnail2.jpg"
            alt2="Second Image"
          />
        </div>
      </div>
      <Features />
      <VisitorsGraph />
      <TripleGraphs />
      <Testimonials/>
      
    </>
  );
};

export default Home;
