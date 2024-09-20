import { AnimatedNumber } from '../components/ui/AnimatedText';
import { cn } from '../lib/utils';
const Statistics = () => {
  interface iStat {
    number: number;
    text: string;
  }
  // stats hold the stats
  const stats: iStat[] = [
    {
      number: 500,
      text: 'Total Students',
    },
    {
      number: 1000,
      text: 'Solid Tuitors',
    },
    {
      number: 4500,
      text: 'Satified Parents',
    },
  ];

  const SingleStats = ({ number, text }: iStat) => {
    return (
      <div // i used this //text-gray-400\\ insteand of text-white because white doesnot fit very well but you can update it for a better color
        className={cn(
          'flex font-semibold flex-col space-y-1  group text-gray-400 py-2 justify-center items-center mx-auto'
        )}
      >
        <h2 className="font-black text-2xl group-hover:scale-[1.20]  transition-all duration-300">
          {' '}
          <AnimatedNumber
            className="font-black text-4xl lg:text-6xl [text-shadow:_0_1px_0_var(--tw-shadow-color,blue)]"
            value={number}
          />{' '}
          <sup className="font-black text-3xl lg:text-5xl text-[#c8d6dd] [text-shadow:_0_1px_0_var(--tw-shadow-color,blue)]">
            +
          </sup>
        </h2>
        <p className="group-hover:scale-[0.9] transition-all duration-300 text-white">
          {text}
        </p>
      </div>
    );
  };

  return (
    <div
      className="bg-gradient-to-t py-2 pb-6 relative z-20 from-[var(--color-bg-sidebar)]
            
            "
    >
      <div className="max-w-6xl items-center gap-y-4 mx-auto justify-between grid grid-cols-[repeat(auto-fit,minmax(min(13rem,calc(100%-2rem)),1fr))]">
        {stats.map((stat) => {
          return <SingleStats key={stat.text} {...stat} />;
        })}
      </div>
    </div>
  );
};

export default Statistics;
