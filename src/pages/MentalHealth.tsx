import React from 'react';
import { Brain, Sun, Moon, Wind } from 'lucide-react';
import { BreathingExercise } from '../components';

const MentalHealth = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80"
            alt="Peaceful meditation scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mental Wellness</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Nurture your mind and emotional well-being with our comprehensive resources.
            </p>
          </div>
        </div>
      </section>

      {/* Breathing Exercise Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Breathing Exercises</h2>
        <BreathingExercise />
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Mindfulness</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Learn techniques to stay present and reduce stress through mindfulness practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Meditation guides</li>
              <li>• Breathing exercises</li>
              <li>• Mindful living tips</li>
              <li>• Stress management</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Sun className="h-6 w-6 text-yellow-600 mr-2" />
              <h2 className="text-xl font-semibold">Daily Wellness</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Develop healthy daily habits that support your mental well-being.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Morning routines</li>
              <li>• Journaling prompts</li>
              <li>• Gratitude practices</li>
              <li>• Self-care rituals</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Moon className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Rest & Recovery</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Optimize your sleep and recovery for better mental health.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Sleep hygiene</li>
              <li>• Relaxation techniques</li>
              <li>• Evening routines</li>
              <li>• Stress relief</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealth;