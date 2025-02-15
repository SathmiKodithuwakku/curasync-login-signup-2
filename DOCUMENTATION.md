# CuraSync - Healthcare Management System Documentation

## Project Overview

CuraSync is a comprehensive healthcare management system built with Next.js 14, React 18, TypeScript, and Tailwind CSS. The system connects healthcare providers and patients in a secure, unified platform.

## File Structure Analysis

### 1. Root Configuration Files

#### `package.json`
- Defines project metadata and dependencies
- Scripts for development, building, and linting
- Key dependencies:
  - next: 14.1.0 (React framework)
  - react: 18.2.0
  - react-dom: 18.2.0
  - react-icons: 5.0.1
- Development dependencies for TypeScript, ESLint, and Tailwind CSS

#### `tsconfig.json`
- TypeScript configuration
- Target: ES5
- Strict mode enabled
- Path aliases: "@/*" maps to "./src/*"
- Next.js specific configurations

#### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom color: primary (#6C5CE7)
- Content paths for component styling
- Extended theme configurations

### 2. Core Application Files

#### `src/app/layout.tsx`
- Root layout component
- Implements Inter font
- Sets metadata (title and description)
- Includes global navigation bar
- Wraps all pages in a consistent layout

#### `src/app/page.tsx`
- Homepage component
- User type selection interface
- Features four user types:
  1. Doctor
  2. Patient
  3. Laboratory
  4. Pharmacy
- Responsive grid layout
- Navigation to login pages

### 3. Authentication Components

#### `src/app/(auth)/[type]/login/page.tsx`
- Dynamic login page
- Handles different user types via URL parameter
- Renders LoginForm component with appropriate user type

#### `src/app/(auth)/[type]/signup/page.tsx`
- Dynamic signup page
- Handles different user types via URL parameter
- Renders SignupForm component with appropriate user type

### 4. Form Components

#### `src/components/LoginForm.tsx`
- Handles user authentication
- Features:
  - Email/password inputs
  - Remember me checkbox
  - Social login options (Google, Apple)
  - Link to signup page
  - Error handling
  - Form validation
- Responsive design with illustration

#### `src/components/SignupForm.tsx`
- Complex registration form with user type-specific fields
- Common fields across all user types:
  - Full name
  - Email
  - Password
  - Phone number
  - Address

##### Doctor-specific fields:
- License number
- Specialization
- Years of experience
- Consultation fees
- Availability hours
- Work address

##### Patient-specific fields:
- Date of birth
- Gender
- Blood group
- Emergency contact details
- Health insurance information

##### Laboratory-specific fields:
- Laboratory name
- Registration number
- Accreditation details
- Tests offered
- Working hours

##### Pharmacy-specific fields:
- Pharmacy name
- Registration number
- License details
- Pharmacist information
- Operating hours
- Delivery service option

### 5. Navigation Component

#### `src/components/Navbar.tsx`
- Global navigation bar
- Features:
  - Logo and brand name
  - Navigation links
  - Social media links
  - Conditional "Get Started" button
- Responsive design
- Dynamic routing integration

### 6. Styling

#### `src/app/globals.css`
- Global styles
- Tailwind CSS imports
- Root variables:
  - Foreground color
  - Background color
- Minimum dimensions for layout

### 7. Public Assets

- `logo.png`: Brand logo
- `login-illustration.svg`: Login page illustration
- `signup-illustration.svg`: Signup page illustration

## Key Features Implementation

### 1. Authentication Flow
- User type selection
- Login/Signup options
- Form validation
- Social authentication options

### 2. Responsive Design
- Mobile-first approach
- Breakpoints for different screen sizes
- Grid and flexbox layouts
- Conditional rendering of elements

### 3. Form Handling
- Controlled form components
- Input validation
- Error handling
- File upload handling
- Checkbox and radio inputs

### 4. Navigation
- Dynamic routing
- Protected routes
- User type-specific paths
- Breadcrumb navigation

### 5. UI/UX Features
- Consistent color scheme
- Interactive elements
- Loading states
- Error feedback
- Success messages

## Technical Implementation Details

### 1. State Management
- React hooks for local state
- Form state handling
- User authentication state
- Navigation state

### 2. TypeScript Integration
- Strong typing for components
- Interface definitions
- Type safety for props
- Enum types for user roles

### 3. Styling Architecture
- Tailwind CSS utility classes
- Custom color definitions
- Responsive design utilities
- Component-specific styles

### 4. Security Measures
- Password validation
- Form data sanitization
- Protected routes
- Authentication checks

## Development Guidelines

### 1. Code Organization
- Component-based architecture
- Separation of concerns
- Modular file structure
- Clear naming conventions

### 2. Best Practices
- TypeScript strict mode
- ESLint configuration
- Proper error handling
- Performance optimization
- Accessibility considerations

### 3. Component Structure
- Functional components
- Props validation
- Error boundaries
- Loading states
- Type definitions

### 4. Form Validation Rules
- Required fields
- Email format
- Password strength
- Phone number format
- File type restrictions

## Future Enhancements

1. Dashboard Implementation
2. Appointment Scheduling
3. Electronic Health Records
4. Digital Prescriptions
5. Laboratory Results Management
6. Inventory Tracking
7. Billing Integration
8. Notification System

## Deployment Considerations

1. Environment Configuration
2. Build Optimization
3. Security Headers
4. Performance Monitoring
5. Error Tracking
6. Analytics Integration
7. Backup Strategies

## Maintenance Guidelines

1. Regular Updates
2. Security Patches
3. Performance Monitoring
4. User Feedback Integration
5. Feature Enhancement
6. Bug Fixing Protocol
7. Documentation Updates