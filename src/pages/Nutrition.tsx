import React from 'react';
import { Apple, Coffee, Utensils } from 'lucide-react';

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
            alt="Healthy food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nutrition Guide</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the power of balanced nutrition and make informed choices for your health.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Apple className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Meal Planning</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Learn how to create balanced meal plans that fit your lifestyle and nutritional needs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Weekly meal templates</li>
              <li>• Portion control guides</li>
              <li>• Shopping lists</li>
              <li>• Meal prep tips</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Utensils className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Healthy Recipes</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Explore our collection of nutritious and delicious recipes for every meal.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Breakfast ideas</li>
              <li>• Quick lunches</li>
              <li>• Dinner solutions</li>
              <li>• Healthy snacks</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Coffee className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Dietary Guidance</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Get expert advice on different dietary approaches and nutritional requirements.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Dietary restrictions</li>
              <li>• Nutritional facts</li>
              <li>• Supplement guides</li>
              <li>• Hydration tips</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;