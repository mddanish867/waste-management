import { Facebook, Twitter, Instagram } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-white py-4 px-6 flex justify-between items-center flex-col md:flex-row">
      <div className="text-gray-600 mb-4 md:mb-0">Follow us:</div>
      <div className="flex space-x-4">
        <Facebook className="h-6 w-6 text-green-500 hover:text-green-600 cursor-pointer" />
        <Twitter className="h-6 w-6 text-green-500 hover:text-green-600 cursor-pointer" />
        <Instagram className="h-6 w-6 text-green-500 hover:text-green-600 cursor-pointer" />
      </div>
    </footer>
  );
}
