import React, { useState, useEffect } from 'react';
import { Scale, Ruler } from 'lucide-react';

interface BMICategory {
  range: string;
  color: string;
  description: string;
  recommendations: string[];
}

const BMICategories: Record<string, BMICategory> = {
  underweight: {
    range: '< 18.5',
    color: 'text-blue-600',
    description: 'You are underweight',
    recommendations: [
      'Consult with a healthcare provider',
      'Increase caloric intake with nutrient-rich foods',
      'Include protein-rich foods in every meal',
      'Consider strength training to build muscle mass'
    ]
  },
  normal: {
    range: '18.5 - 24.9',
    color: 'text-green-600',
    description: 'You have a healthy weight',
    recommendations: [
      'Maintain a balanced diet',
      'Regular physical activity',
      'Regular health check-ups',
      'Continue your healthy lifestyle habits'
    ]
  },
  overweight: {
    range: '25 - 29.9',
    color: 'text-yellow-600',
    description: 'You are overweight',
    recommendations: [
      'Focus on portion control',
      'Increase physical activity',
      'Choose whole, unprocessed foods',
      'Consider consulting a nutritionist'
    ]
  },
  obese: {
    range: '≥ 30',
    color: 'text-red-600',
    description: 'You are in the obese range',
    recommendations: [
      'Consult with healthcare professionals',
      'Create a sustainable weight loss plan',
      'Regular exercise routine',
      'Monitor other health markers'
    ]
  }
};

const BMICalculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      
      if (heightInMeters > 0 && weightInKg > 0) {
        const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
        setBMI(calculatedBMI);
        
        if (calculatedBMI < 18.5) setCategory('underweight');
        else if (calculatedBMI < 25) setCategory('normal');
        else if (calculatedBMI < 30) setCategory('overweight');
        else setCategory('obese');
      }
    } else {
      setBMI(null);
      setCategory('');
    }
  }, [height, weight]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">BMI Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Ruler className="h-5 w-5 mr-2" />
              Height (cm)
            </div>
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter height"
            min="0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Scale className="h-5 w-5 mr-2" />
              Weight (kg)
            </div>
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter weight"
            min="0"
          />
        </div>
      </div>

      {bmi && category && (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">
              Your BMI: <span className={BMICategories[category].color}>{bmi.toFixed(1)}</span>
            </p>
            <p className={`text-xl ${BMICategories[category].color}`}>
              {BMICategories[category].description}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-6">
            {Object.entries(BMICategories).map(([key, value]) => (
              <div
                key={key}
                className={`p-2 rounded-md text-center ${
                  category === key ? 'ring-2 ring-offset-2 ring-green-500' : ''
                }`}
              >
                <div className={`font-medium ${value.color}`}>{value.range}</div>
                <div className="text-xs text-gray-600">{key}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-3">Recommendations:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {BMICategories[category].recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;