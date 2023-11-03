import phonePng from "@/public/phone.png";
import campSvg from "@/public/camp.svg";
import Image from "next/image";
import { FEATURES } from "@/src/data";

function Features() {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src={phonePng} alt="phone" className="feature-phone" />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src={campSvg} alt="camp" className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} alt={feature.alt} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  title: string;
  icon: any;
  description: string;
  alt: string;
};

const FeatureItem = ({ title, icon, description, alt }: FeatureProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt={alt} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</p>
    </li>
  );
};

export default Features;
