import React from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";

interface CertificateCardProps {
  imagelink: string;
  company: string;
  desc: string;
  linkOfCertificate: string;
  date: string;
}

const CertificateCard: React.FC<CertificateCardProps> = (props) => {
  return (
    <div className="p-7 bg-neutral-900 w-[20rem] sm:w-[24rem] flex justify-center rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex flex-col gap-5 h-full w-full items-center">
        <Image
          className="h-[11rem] w-[20rem] sm:h-[13rem] sm:w-[24rem] object-contain"
          src={`/${props.imagelink}`}
          width={500}
          height={500}
          alt="Picture of the project"
        />
        <div className="h-auto flex flex-col gap-6 scale-95">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">{props.company}</h1>
            <div className="text-sm flex items-center gap-1">
              <CiCalendar size={20} />
              <h1 className="translate-y-[0.1rem]">{props.date}</h1>
            </div>
          </div>
          <h1 className="">{props.desc}</h1>
          <div>
            <a target="_blank" href={props.linkOfCertificate}>
              <button className="h-10 px-3 bg-neutral-700 rounded-3xl text-white  hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
                View Certificate
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
