// Simple component for handling file uploads
import React, { useState } from 'react';

// Props interface for type safety
interface FileUploadProps {
  label: string;                    // Label to show above the file input
  allowedTypes: string[];          // List of allowed file types (e.g., ['image/jpeg', 'image/png'])
  maxSizeInMB: number;            // Maximum file size in megabytes
  onFileSelect: (file: File) => void; // Function to handle the selected file
}

export function FileUpload({ 
  label, 
  allowedTypes, 
  maxSizeInMB, 
  onFileSelect 
}: FileUploadProps) {
  // State to store error messages
  const [error, setError] = useState<string>('');
  
  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Clear any previous errors
    setError('');
    
    // Get the selected file
    const file = event.target.files?.[0];
    
    // Check if a file was selected
    if (!file) {
      setError('Please select a file');
      return;
    }
    
    // Check file type
    if (!allowedTypes.includes(file.type)) {
      setError(`File type not allowed. Please use: ${allowedTypes.join(', ')}`);
      return;
    }
    
    // Check file size (convert MB to bytes)
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      setError(`File is too large. Maximum size is ${maxSizeInMB}MB`);
      return;
    }
    
    // If all checks pass, call the onFileSelect function
    onFileSelect(file);
  };

  return (
    <div className="mb-4">
      {/* File input label */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      {/* File input */}
      <input
        type="file"
        onChange={handleFileChange}
        accept={allowedTypes.join(',')}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}