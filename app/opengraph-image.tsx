import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Example App';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const Image = async () => {
  return new ImageResponse(
    (
      <div tw="text-white flex items-center justify-center h-full w-full font-bold bg-green-500">
        <h1 tw="text-8xl">Example App</h1>
        <p tw="text-4xl text-gray-500">
          Next.js example app. It&apos;s awesome!
        </p>
      </div>
    )
  );
};

export default Image;
