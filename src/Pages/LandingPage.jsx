import { Truck, RecycleIcon, Globe } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      
      <section className="p-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <Truck className="mx-auto mb-4 text-green-500" size={48} />
            <h2 className="text-xl font-semibold">Pickup Services</h2>
            <p>Timely and efficient waste pickup services.</p>
          </div>
          <div className="text-center p-4">
            <RecycleIcon className="mx-auto mb-4 text-green-500" size={48} />
            <h2 className="text-xl font-semibold">Recycling Solutions</h2>
            <p>Environmentally responsible recycling programs.</p>
          </div>
          <div className="text-center p-4">
            <Globe className="mx-auto mb-4 text-green-500" size={48} />
            <h2 className="text-xl font-semibold">Global Impact</h2>
            <p>Contributing to a cleaner and healthier planet.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
