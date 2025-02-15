'use client';

import { LoginForm } from '@/components/LoginForm';
import { useParams } from 'next/navigation';

export default function LoginPage() {
  const params = useParams();
  const userType = params.type as 'doctor' | 'patient' | 'lab' | 'pharmacy';

  return <LoginForm userType={userType} />;
}