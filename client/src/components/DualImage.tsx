// client/components/DualImage.tsx
import Image from 'next/image';
import React from 'react';

interface DualImageProps {
  src1: string;
  src2: string;
  alt1: string;
  alt2: string;
}

const DualImage: React.FC<DualImageProps> = ({ src1, src2, alt1, alt2 }) => {
  return (
    <div className="flex justify-center items-start space-x-4">
      <div className="relative h-72 w-48 md:h-96 md:w-64 lg:h-[28rem] lg:w-[20rem] z-10">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-t-full border-8 p-4 border-amber-500 flex justify-center ml-24">
          <Image
            src={src1}
            alt={alt1}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative h-72 w-48 md:h-96 md:w-64 lg:h-[28rem] lg:w-[20rem] md:-ml-24 lg:-ml-32 z-20 mt-8 md:mt-12 lg:mt-16">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-t-full border-8 p-4 border-amber-400 flex justify-center">
          <Image
            src={src2}
            alt={alt2}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DualImage;
