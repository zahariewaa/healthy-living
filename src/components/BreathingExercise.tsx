import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface BreathingPattern {
  name: string;
  inhale: number;
  hold1: number;
  exhale: number;
  hold2: number;
  description: string;
}

const breathingPatterns: BreathingPattern[] = [
  {
    name: 'Box Breathing',
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    description: 'Classic technique used by Navy SEALs for stress control'
  },
  {
    name: '4-7-8 Breathing',
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0,
    description: 'Natural tranquilizer for the nervous system'
  },
  {
    name: 'Relaxing Breath',
    inhale: 6,
    hold1: 0,
    exhale: 8,
    hold2: 0,
    description: 'Helps reduce anxiety and prepare for sleep'
  }
];

const BreathingExercise = () => {
  const [selectedPattern, setSelectedPattern] = useState<BreathingPattern>(breathingPatterns[0]);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [timeLeft, setTimeLeft] = useState(selectedPattern.inhale);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const playSound = useCallback(() => {
    if (isSoundEnabled) {
      const audio = new Audio('/soft-ding.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  }, [isSoundEnabled]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Inhale';
      case 'hold1':
        return 'Hold';
      case 'exhale':
        return 'Exhale';
      case 'hold2':
        return 'Hold';
      default:
        return '';
    }
  };

  const getPhaseTime = (currentPhase: string): number => {
    switch (currentPhase) {
      case 'inhale':
        return selectedPattern.inhale;
      case 'hold1':
        return selectedPattern.hold1;
      case 'exhale':
        return selectedPattern.exhale;
      case 'hold2':
        return selectedPattern.hold2;
      default:
        return selectedPattern.inhale;
    }
  };

  const nextPhase = useCallback(() => {
    playSound();
    switch (phase) {
      case 'inhale':
        if (selectedPattern.hold1 > 0) {
          setPhase('hold1');
          setTimeLeft(selectedPattern.hold1);
        } else {
          setPhase('exhale');
          setTimeLeft(selectedPattern.exhale);
        }
        break;
      case 'hold1':
        setPhase('exhale');
        setTimeLeft(selectedPattern.exhale);
        break;
      case 'exhale':
        if (selectedPattern.hold2 > 0) {
          setPhase('hold2');
          setTimeLeft(selectedPattern.hold2);
        } else {
          setPhase('inhale');
          setTimeLeft(selectedPattern.inhale);
        }
        break;
      case 'hold2':
        setPhase('inhale');
        setTimeLeft(selectedPattern.inhale);
        break;
    }
  }, [phase, selectedPattern, playSound]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      nextPhase();
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft, nextPhase]);

  const toggleExercise = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setPhase('inhale');
      setTimeLeft(selectedPattern.inhale);
    }
  };

  const handlePatternChange = (pattern: BreathingPattern) => {
    setSelectedPattern(pattern);
    setIsActive(false);
    setPhase('inhale');
    setTimeLeft(pattern.inhale);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Breathing Exercise</h2>
        <p className="text-gray-600">{selectedPattern.description}</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          {breathingPatterns.map((pattern) => (
            <button
              key={pattern.name}
              onClick={() => handlePatternChange(pattern)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPattern.name === pattern.name
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {pattern.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-48 h-48 mx-auto mb-8">
        <div
          className={`absolute inset-0 border-4 rounded-full transition-all duration-1000 ${
            isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
          } ${
            phase === 'inhale' ? 'border-blue-500 scale-125' :
            phase === 'hold1' ? 'border-green-500' :
            phase === 'exhale' ? 'border-purple-500 scale-75' :
            'border-yellow-500'
          }`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white/80 px-3 py-1 rounded-lg mb-2">
            <span className="text-2xl font-bold">{timeLeft}s</span>
          </div>
          <div className="bg-white/80 px-3 py-1 rounded-lg">
            <span className="text-lg text-gray-600">{getPhaseText()}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleExercise}
          className={`px-6 py-2 rounded-lg font-medium flex items-center space-x-2 ${
            isActive
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span>{isActive ? 'Pause' : 'Start'}</span>
        </button>
        <button
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className={`px-4 py-2 rounded-lg font-medium ${
            isSoundEnabled
              ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isSoundEnabled ? (
            <Volume2 className="h-5 w-5" />
          ) : (
            <VolumeX className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BreathingExercise;