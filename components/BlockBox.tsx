import Image from "next/image";

interface BlockProps {
  icon: string;
  name: string;
  value: string | number;
}

const BlockBox = ({ icon, name, value }: BlockProps) => {
  return (
    <div className="xl:bg-[#383838] xl:pl-2 xl:pr-3.5  xl:px-9 xl:py-5 py-2 flex gap-1 xl:gap-2">
      <Image
        className="w-[48px] h-[48px] hidden xl:block"
        src={icon}
        width={48}
        height={48}
        aria-hidden={true}
        alt="icon"
      />
      <div className="text-center flex gap-2 xl:block">
        <h2 className="uppercase font-bold xl:font-normal text-[13px] xl:text-lg text-bold">
          {name}
        </h2>
        <span className="xl:text-base">{value}</span>
      </div>
    </div>
  );
};

export default BlockBox;
