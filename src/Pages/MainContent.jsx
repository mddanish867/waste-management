import { ArrowRightCircle } from "lucide-react";

export default function MainContent() {
  return (
    <main className="flex items-center justify-between px-6 py-12 bg-white flex-col md:flex-row">
      <div className="max-w-xl mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          Manage Your Own Waste
        </h1>
        <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block mb-4">
          Save Environment
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 flex items-center">
          Read More
          <ArrowRightCircle className="ml-2 h-5 w-5" />
        </button>
      </div>
      <div className="relative w-full max-w-xs">
        <div className="bg-green-100 rounded-full p-4">
          <img
            src="https://picsum.photos/seed/picsum/400/400"
            alt="Person sorting waste"
            className="rounded-full"
          />
        </div>
        <div className="absolute top-0 right-0 bg-green-500 h-8 w-8 rounded-full"></div>
        <div className="absolute bottom-0 left-0 bg-green-500 h-8 w-8 rounded-full"></div>
      </div>
    </main>
  );
}
