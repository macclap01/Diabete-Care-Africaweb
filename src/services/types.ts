// src/types.ts

export interface UserData {
    id: string;
    name: string;
    age: number;
    weight: number;
    language: Language;
    lastGlucoseLevel: number;
    hasDiabetes: boolean;
    familyHistory: boolean;
    activities: UserActivity[];
    dailyCalorieGoal: number;
    email: string;
  }
  
  export interface Language {
    code: string;
    name: string;
    local: string;
    isLocal: boolean;
  }
  
  export interface GlucoseReading {
    date: Date;
    value: number;
  }
  
  export interface Notification {
    id: string;
    type: 'warning' | 'success' | 'info';
    message: string;
    timestamp: Date;
  }
  
  export interface Activity {
    id: string;
    name: string;
    caloriesPerHour: number;
    icon: string;
    category: 'cardio' | 'sport' | 'other';
  }
  
  export interface UserActivity {
    activityId: string;
    duration: number;
    frequency: 'daily' | 'weekly';
    preferredTime?: string;
  }
  
  export interface ActivityLog {
    id: string;
    userId: string;
    activityId: string;
    duration: number;
    caloriesBurned: number;
    date: Date;
    completed: boolean;
  }
  
  export interface Task {
    id: string;
    title: string;
    completed: boolean;
    points: number;
  }
  
  export interface RiskAssessmentData {
    age: string;
    weight: string;
    height: string;
    physicalActivity: string;
    waistCircumference: string;
    fruitsAndVegetables: string;
    highBloodPressure: string;
    highBloodSugar: string;
    familyHistory: string;
  }
  