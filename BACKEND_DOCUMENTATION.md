# CuraSync Backend Documentation - Data Types & API Requirements

## Database Schema

### 1. Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  user_type VARCHAR(20) NOT NULL CHECK (user_type IN ('doctor', 'patient', 'lab', 'pharmacy')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 2. User Profiles

#### Doctor Profile
```sql
CREATE TABLE doctor_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  license_number VARCHAR(50) NOT NULL UNIQUE,
  specialization VARCHAR(100) NOT NULL,
  years_experience INTEGER NOT NULL,
  consultation_fees DECIMAL(10,2) NOT NULL,
  availability_hours JSONB,
  work_address TEXT NOT NULL,
  hospital_name VARCHAR(255),
  medical_council VARCHAR(255),
  verification_status VARCHAR(20) DEFAULT 'pending'
);
```

#### Patient Profile
```sql
CREATE TABLE patient_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  date_of_birth DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  blood_group VARCHAR(5),
  emergency_contact_name VARCHAR(255) NOT NULL,
  emergency_contact_phone VARCHAR(20) NOT NULL,
  health_insurance_number VARCHAR(50),
  medical_history JSONB
);
```

[... continues with all database schemas ...]

## API Endpoints

### Authentication

#### 1. Login
```typescript
POST /api/auth/login
Request {
  email: string;
  password: string;
  userType: 'doctor' | 'patient' | 'lab' | 'pharmacy';
  rememberMe?: boolean;
}
Response {
  token: string;
  user: {
    id: string;
    email: string;
    userType: string;
    profile: DoctorProfile | PatientProfile | LabProfile | PharmacyProfile;
  }
}
```

#### 2. Registration
```typescript
POST /api/auth/register
Request {
  // Common fields
  email: string;
  password: string;
  userType: 'doctor' | 'patient' | 'lab' | 'pharmacy';
  fullName: string;
  phoneNumber: string;
  address: string;

  // Doctor specific fields
  doctor?: {
    licenseNumber: string;
    specialization: string;
    yearsExperience: number;
    consultationFees: number;
    availabilityHours: string;
    workAddress: string;
    hospitalName?: string;
    medicalCouncil?: string;
  };

  // Patient specific fields
  patient?: {
    dateOfBirth: string;
    gender: string;
    bloodGroup?: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    healthInsurance?: string;
    medicalHistory?: string;
  };

  // Lab specific fields
  lab?: {
    laboratoryName: string;
    registrationNumber: string;
    accreditationDetails?: string;
    testsOffered: string[];
    workingHours: string;
  };

  // Pharmacy specific fields
  pharmacy?: {
    pharmacyName: string;
    registrationNumber: string;
    licenseNumber: string;
    pharmacistName: string;
    pharmacistLicenseNumber: string;
    deliveryAvailable: boolean;
    openingHours: string;
    closingHours: string;
  };
}
```

[... continues with all API endpoints and their specifications ...]

## Security Requirements

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

### Token Management
- JWT tokens with RS256 algorithm
- Token expiration: 1 hour
- Refresh token expiration: 30 days
- Token rotation on refresh

### Rate Limiting
- Login: 5 attempts per minute
- Registration: 3 attempts per hour
- API calls: 100 requests per minute per user

[... continues with all security specifications ...]

## Data Validation Rules

### Email Validation
- RFC 5322 compliant
- Domain MX record check
- Disposable email blacklist

### Phone Number Validation
- E.164 format
- Country code required
- Local number format validation

[... continues with all validation rules ...]

## Error Codes and Messages

```typescript
enum ErrorCodes {
  INVALID_CREDENTIALS = 'AUTH001',
  ACCOUNT_LOCKED = 'AUTH002',
  INVALID_TOKEN = 'AUTH003',
  EXPIRED_TOKEN = 'AUTH004',
  INSUFFICIENT_PERMISSIONS = 'AUTH005',
  VALIDATION_ERROR = 'VAL001',
  RESOURCE_NOT_FOUND = 'RES001',
  DUPLICATE_ENTRY = 'DAT001',
  SERVER_ERROR = 'SRV001'
}
```

[... continues with all error handling specifications ...]