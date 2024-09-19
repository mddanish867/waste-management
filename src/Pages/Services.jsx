import { Truck, RecycleIcon, Trash2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <Truck size={64} className="mx-auto mb-4 text-green-600" />
            <h2 className="text-2xl font-semibold">Waste Pickup</h2>
            <p>Scheduled and on-demand waste pickup services to ensure timely collection of all types of waste.</p>
          </div>
          <div className="text-center p-4">
            <RecycleIcon size={64} className="mx-auto mb-4 text-green-600" />
            <h2 className="text-2xl font-semibold">Recycling</h2>
            <p>Comprehensive recycling services for households and businesses, promoting sustainability.</p>
          </div>
          <div className="text-center p-4">
            <Trash2 size={64} className="mx-auto mb-4 text-green-600" />
            <h2 className="text-2xl font-semibold">Waste Disposal</h2>
            <p>Safe and environmentally friendly waste disposal services for hazardous and non-hazardous materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
