'use client';

import Image from 'next/image';
import { mockCars } from '@/constants';

const CarCard = ({
  car,
}: {
  car: (typeof mockCars)[number];
}) => {
  const { make, model, year, transmission, drive, city_mpg } = car;
  const carRent = Math.floor((30 / city_mpg) * year * 0.02) || 52;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={car.image}
          alt={`${make} ${model}`}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarCatalogue = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore cars you might like — demo data for this portfolio deploy.</p>
      </div>

      <div className="home__cars-wrapper">
        {mockCars.map((car) => (
          <CarCard key={`${car.make}-${car.model}-${car.year}`} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarCatalogue;
