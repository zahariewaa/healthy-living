import React, { useState, useEffect, useCallback } from 'react';
import { Timer, Save, Play, Pause, RotateCcw, Plus, Trash2 } from 'lucide-react';

interface TimerPreset {
  id: string;
  name: string;
  workTime: number;
  restTime: number;
  rounds: number;
}

const WorkoutTimer = () => {
  const [workTime, setWorkTime] = useState(30);
  const [restTime, setRestTime] = useState(10);
  const [rounds, setRounds] = useState(3);
  const [currentRound, setCurrentRound] = useState(1);
  const [isWorking, setIsWorking] = useState(true);
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isActive, setIsActive] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [presets, setPresets] = useState<TimerPreset[]>(() => {
    const saved = localStorage.getItem('workoutPresets');
    return saved ? JSON.parse(saved) : [];
  });

  const playSound = useCallback(() => {
    const audio = new Audio('data:audio/wav;base64,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');
    audio.play().catch(() => {});
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      playSound();
      if (isWorking && currentRound < rounds) {
        setIsWorking(false);
        setTimeLeft(restTime);
      } else if (!isWorking) {
        setCurrentRound((round) => round + 1);
        setIsWorking(true);
        setTimeLeft(workTime);
      } else {
        setIsActive(false);
        resetTimer();
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, isWorking, currentRound, rounds, workTime, restTime, playSound]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setCurrentRound(1);
    setIsWorking(true);
    setTimeLeft(workTime);
  };

  const savePreset = () => {
    if (presetName.trim()) {
      const newPreset: TimerPreset = {
        id: Date.now().toString(),
        name: presetName,
        workTime,
        restTime,
        rounds
      };
      const updatedPresets = [...presets, newPreset];
      setPresets(updatedPresets);
      localStorage.setItem('workoutPresets', JSON.stringify(updatedPresets));
      setPresetName('');
    }
  };

  const loadPreset = (preset: TimerPreset) => {
    setWorkTime(preset.workTime);
    setRestTime(preset.restTime);
    setRounds(preset.rounds);
    resetTimer();
  };

  const deletePreset = (id: string) => {
    const updatedPresets = presets.filter(preset => preset.id !== id);
    setPresets(updatedPresets);
    localStorage.setItem('workoutPresets', JSON.stringify(updatedPresets));
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Workout Timer</h2>
        <p className="text-gray-600">
          Round {currentRound} of {rounds} - {isWorking ? 'Work' : 'Rest'}
        </p>
      </div>

      <div className="text-center mb-8">
        <div className={`text-6xl font-bold mb-4 ${
          isWorking ? 'text-blue-600' : 'text-green-600'
        }`}>
          {formatTime(timeLeft)}
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleTimer}
            className={`p-3 rounded-full ${
              isActive ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
            }`}
          >
            {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button
            onClick={resetTimer}
            className="p-3 rounded-full bg-gray-100 text-gray-600"
          >
            <RotateCcw className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Time (seconds)
          </label>
          <input
            type="number"
            value={workTime}
            onChange={(e) => setWorkTime(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rest Time (seconds)
          </label>
          <input
            type="number"
            value={restTime}
            onChange={(e) => setRestTime(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rounds
          </label>
          <input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="1"
          />
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Saved Presets</h3>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            placeholder="Preset name"
            className="flex-1 p-2 border rounded-md mr-2"
          />
          <button
            onClick={savePreset}
            className="p-2 bg-blue-100 text-blue-600 rounded-md flex items-center"
          >
            <Save className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2">
          {presets.map((preset) => (
            <div
              key={preset.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
            >
              <div>
                <h4 className="font-medium">{preset.name}</h4>
                <p className="text-sm text-gray-600">
                  {preset.workTime}s work / {preset.restTime}s rest / {preset.rounds} rounds
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => loadPreset(preset)}
                  className="p-2 bg-green-100 text-green-600 rounded-md"
                >
                  <Play className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deletePreset(preset.id)}
                  className="p-2 bg-red-100 text-red-600 rounded-md"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutTimer;