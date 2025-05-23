import React from 'react';
import SearchBar from '@/app/components/SearchBar';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Weather App
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Get real-time weather information for any city
        </p>
      </div>
      
      <SearchBar />
      
      <div className="text-center text-blue-100">
        <p>Enter a city name to get started</p>
      </div>
    </main>
  );
}