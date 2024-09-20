import performImage from './perform.jpg';

export default function Performance() {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <div className="flex">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
            55%
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg text-center">
            27%
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
            25%
          </div>
          <div className="bg-pink-500 text-white p-4 rounded-lg text-center">
            10%
          </div>
        </div>
        <div className="ml-4 grow">
          <h2 className="text-xl font-bold text-left">Performance Summary</h2>
          <img
            src={performImage}
            alt="Summary Image"
            className="w-24 h-16 object-cover mt-2 ml-2"
          />
          <div className="flex items-center mt-2">
            <span className="bg-blue-500 size-4 rounded-full inline-block mr-2"></span>{' '}
            Complete
            <span className="bg-orange-500 size-4 rounded-full inline-block mx-2"></span>{' '}
            On Track
            <span className="bg-pink-500 size-4 rounded-full inline-block mx-2"></span>{' '}
            Ahead
            <span className="bg-red-500 size-4 rounded-full inline-block ml-2"></span>{' '}
            Lagging
          </div>
        </div>
        <div className="ml-4"></div>
      </div>
    </div>
  );
}
