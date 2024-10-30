import React from 'react';
import { ArrowRight, Salad, Dumbbell, Brain, Calculator, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
            alt="Healthy food spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Journey to a <span className="text-green-400">Healthier Life</span> Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the perfect balance of nutrition, exercise, and mental wellness for a happier, healthier you.
            </p>
            <Link
              to="/nutrition"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pillars of Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Salad className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nutrition</h3>
              <p className="text-gray-600 mb-4">
                Learn about balanced diets, meal planning, and healthy recipes that nourish your body.
              </p>
              <div className="bg-green-50 p-3 rounded-lg mb-4 w-full">
                <div className="flex items-center justify-center mb-2">
                  <Calculator className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium text-green-600">Featured: BMI Calculator</span>
                </div>
                <p className="text-sm text-gray-600">Calculate your Body Mass Index and get personalized recommendations</p>
              </div>
              <Link
                to="/nutrition"
                className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Dumbbell className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exercise</h3>
              <p className="text-gray-600 mb-4">
                Discover workouts, fitness tips, and exercise routines for all levels.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4 w-full">
                <div className="flex items-center justify-center mb-2">
                  <Timer className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-600">Featured: Workout Timer</span>
                </div>
                <p className="text-sm text-gray-600">Customizable intervals with rest periods and preset workouts</p>
              </div>
              <Link
                to="/exercise"
                className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mental Wellness</h3>
              <p className="text-gray-600 mb-4">
                Find resources and techniques for maintaining mental health and emotional balance.
              </p>
              <Link
                to="/mental-health"
                className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
                quote: "This program transformed my approach to healthy living. I've never felt better!",
                role: "Fitness Enthusiast"
              },
              {
                name: "Michael Chen",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                quote: "The nutrition guidance helped me achieve my health goals while enjoying delicious meals.",
                role: "Software Developer"
              },
              {
                name: "Emma Williams",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
                quote: "The mental wellness resources have been invaluable for maintaining work-life balance.",
                role: "Teacher"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;