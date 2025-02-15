'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function PharmacySignupPage() {
  const [formData, setFormData] = useState({
    pharmacyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    pharmacyRegistrationNumber: '',
    pharmacyLicenseNumber: '',
    pharmacistName: '',
    pharmacistLicenseNumber: '',
    address: '',
    openingHours: '',
    closingHours: '',
    deliveryAvailable: false,
    agreeToTerms: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('All required fields must be filled');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      // Handle signup logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      console.log('Form submitted:', formData);
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="flex w-full max-w-6xl">
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/signup-illustration.svg"
            alt="Signup illustration"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-2">Get Started Now</h2>
          <p className="text-gray-600 text-center mb-8">
            Create your Pharmacy account and start your journey
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pharmacyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Pharmacy Name *
                </label>
                <input
                  type="text"
                  id="pharmacyName"
                  name="pharmacyName"
                  value={formData.pharmacyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="pharmacyRegistrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Pharmacy Registration Number *
                </label>
                <input
                  type="text"
                  id="pharmacyRegistrationNumber"
                  name="pharmacyRegistrationNumber"
                  value={formData.pharmacyRegistrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="pharmacyLicenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Pharmacy License Number *
                </label>
                <input
                  type="text"
                  id="pharmacyLicenseNumber"
                  name="pharmacyLicenseNumber"
                  value={formData.pharmacyLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="pharmacistName" className="block text-sm font-medium text-gray-700 mb-1">
                  Pharmacist Name *
                </label>
                <input
                  type="text"
                  id="pharmacistName"
                  name="pharmacistName"
                  value={formData.pharmacistName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="pharmacistLicenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Pharmacist License Number *
                </label>
                <input
                  type="text"
                  id="pharmacistLicenseNumber"
                  name="pharmacistLicenseNumber"
                  value={formData.pharmacistLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700 mb-1">
                  Opening Hours *
                </label>
                <input
                  type="text"
                  id="openingHours"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleInputChange}
                  placeholder="e.g., 9:00 AM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="closingHours" className="block text-sm font-medium text-gray-700 mb-1">
                  Closing Hours *
                </label>
                <input
                  type="text"
                  id="closingHours"
                  name="closingHours"
                  value={formData.closingHours}
                  onChange={handleInputChange}
                  placeholder="e.g., 6:00 PM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="deliveryAvailable"
                    checked={formData.deliveryAvailable}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    disabled={isLoading}
                  />
                  <span className="ml-2 text-sm text-gray-700">Delivery Service Available</span>
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
                disabled={isLoading}
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                I agree to the terms & policy *
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">or continue with</p>
          </div>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="h-5 w-5" />
              <span className="ml-2">Sign up with Google</span>
            </button>
            <button
              type="button"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaApple className="h-5 w-5" />
              <span className="ml-2">Sign up with Apple</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/pharmacy/login"
              className="text-primary hover:text-primary/90 font-medium"
              tabIndex={isLoading ? -1 : 0}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}