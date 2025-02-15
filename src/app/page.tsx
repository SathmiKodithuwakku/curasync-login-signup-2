'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserMd, FaUser, FaFlask, FaPrescriptionBottleAlt } from 'react-icons/fa';

const userTypes = [
  {
    title: 'Doctor',
    icon: FaUserMd,
    description: 'Medical professional account',
    path: 'doctor',
    ariaLabel: 'Sign in as a Doctor'
  },
  {
    title: 'Patient',
    icon: FaUser,
    description: 'Patient account for appointments',
    path: 'patient',
    ariaLabel: 'Sign in as a Patient'
  },
  {
    title: 'Laboratory',
    icon: FaFlask,
    description: 'Lab testing facility account',
    path: 'lab',
    ariaLabel: 'Sign in as a Laboratory'
  },
  {
    title: 'Pharmacy',
    icon: FaPrescriptionBottleAlt,
    description: 'Pharmacy store account',
    path: 'pharmacy',
    ariaLabel: 'Sign in as a Pharmacy'
  }
];

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleNavigation = async (path: string) => {
    try {
      setIsLoading(path);
      await router.push(`/${path}/login`);
    } catch (error) {
      console.error('Navigation failed:', error);
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to CuraSync</h1>
        <p className="text-gray-600">Choose your account type to continue</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {userTypes.map((type) => (
          <button
            key={type.path}
            onClick={() => handleNavigation(type.path)}
            disabled={isLoading !== null}
            aria-label={type.ariaLabel}
            className={`
              p-6 bg-white rounded-lg shadow-sm 
              hover:shadow-md transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:-translate-y-1
            `}
          >
            <type.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
            <p className="text-gray-600 text-sm">{type.description}</p>
            {isLoading === type.path && (
              <div className="mt-2">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}