import ReactCountup from "react-countup";

type CountupProps = {
    name: string;
    number: number | string;
};

export const Countup = ({ name, number }: CountupProps) => {
    return (
        <div className="flex flex-col gap-2 self-center text-center md:max-w-[100px] md:flex-row md:gap-4 md:text-start">
            <ReactCountup end={Number(number)} duration={3} className="text-4xl font-extrabold xl:text-6xl" />
            <p className="text-sm text-white/50 xl:text-lg">{name}</p>
        </div>
    );
};
