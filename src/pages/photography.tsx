/* eslint-disable @next/next/no-img-element */
import MainLayout from '@/layouts/MainLayout';

export default function photography() {
  return (
    <MainLayout>
      <div className="">
        <div className="max-w-4xl w-full mx-auto p-4 flex flex-col gap-10">
          <h1 className="text-9xl font-semibold">
            <span>Photography</span>
          </h1>
          <div className="grid grid-cols-2 gap-5">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  className="rounded-2xl border border-gray-200 p-2 w-full object-cover bg-gray-50 hover:bg-gray-100"
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  alt="my photo"
                />
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
