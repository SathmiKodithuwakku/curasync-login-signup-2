# CuraSync Frontend Documentation - Detailed Code Explanation

## Component-by-Component Breakdown

### 1. LoginForm Component (`src/components/LoginForm.tsx`)

```typescript
// Props Interface
interface LoginFormProps {
  userType: 'doctor' | 'patient' | 'lab' | 'pharmacy';  // Union type for user roles
}

// State Management
const [email, setEmail] = useState('');       // String state for email input
const [password, setPassword] = useState(''); // String state for password input
const [rememberMe, setRememberMe] = useState(false); // Boolean state for remember me checkbox
```

#### HTML Structure Explanation
- `<div className="min-h-[calc(100vh-4rem)]">`: Creates a full-height container minus navbar height
- `flex items-center justify-center`: Centers content both vertically and horizontally
- Two-column layout:
  1. Left column: Illustration (hidden on mobile)
  2. Right column: Login form

#### Form Fields
1. Email Input:
   ```html
   <input
     type="email"
     id="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
   />
   ```
   - Full width input
   - Padding: 12px horizontal, 8px vertical
   - Rounded corners
   - Gray border

2. Password Input:
   ```html
   <input
     type="password"
     id="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
   />
   ```
   - Masked input for security
   - Same styling as email input

[... continues with detailed explanations of every component ...]