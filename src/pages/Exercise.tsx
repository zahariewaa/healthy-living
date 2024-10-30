import React from 'react';
import { Dumbbell, Timer, Heart } from 'lucide-react';

const Exercise = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
            alt="Exercise equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Exercise Programs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Transform your body and mind with our comprehensive exercise programs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Dumbbell className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Strength Training</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Build strength and muscle with our comprehensive weight training programs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Beginner routines</li>
              <li>• Advanced workouts</li>
              <li>• Form guides</li>
              <li>• Equipment tips</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Timer className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Cardio Workouts</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Improve your endurance and heart health with varied cardio exercises.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Running plans</li>
              <li>• HIIT workouts</li>
              <li>• Swimming guides</li>
              <li>• Cycling routines</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-600 mr-2" />
              <h2 className="text-xl font-semibold">Recovery & Flexibility</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Enhance your recovery and maintain flexibility with targeted exercises.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Stretching routines</li>
              <li>• Yoga flows</li>
              <li>• Recovery tips</li>
              <li>• Mobility work</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercise;