'use client';

import { SignupForm } from '@/components/SignupForm';
import { useParams } from 'next/navigation';

export default function SignupPage() {
  const params = useParams();
  const userType = params.type as 'doctor' | 'patient' | 'lab' | 'pharmacy';

  return (
    <div className="container mx-auto">
      <SignupForm userType={userType} />
    </div>
  );
}