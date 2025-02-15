// Component for viewing uploaded documents
import React from 'react';

interface DocumentViewerProps {
  file: File | null;              // The file to display
  fileType: 'image' | 'pdf' | 'text'; // Type of file being displayed
}

export function DocumentViewer({ file, fileType }: DocumentViewerProps) {
  // If no file is provided, show a placeholder
  if (!file) {
    return (
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <p className="text-gray-500">No document selected</p>
      </div>
    );
  }

  // Create a URL for the file
  const fileUrl = URL.createObjectURL(file);

  // Render different viewers based on file type
  const renderViewer = () => {
    switch (fileType) {
      case 'image':
        return (
          <img
            src={fileUrl}
            alt="Uploaded document"
            className="max-w-full h-auto rounded-lg"
          />
        );
      
      case 'pdf':
        return (
          <iframe
            src={fileUrl}
            className="w-full h-[500px] rounded-lg"
            title="PDF document"
          />
        );
      
      case 'text':
        // For text files, we'll read and display the content
        const reader = new FileReader();
        reader.onload = (e) => {
          const textContent = e.target?.result as string;
          return (
            <pre className="p-4 bg-gray-50 rounded-lg overflow-auto">
              {textContent}
            </pre>
          );
        };
        reader.readAsText(file);
        return null;
      
      default:
        return (
          <p className="text-gray-500">
            Preview not available for this file type
          </p>
        );
    }
  };

  return (
    <div className="border rounded-lg p-4">
      {/* File information */}
      <div className="mb-4">
        <h3 className="font-medium">File Details:</h3>
        <p className="text-sm text-gray-600">Name: {file.name}</p>
        <p className="text-sm text-gray-600">
          Size: {(file.size / 1024).toFixed(2)} KB
        </p>
        <p className="text-sm text-gray-600">Type: {file.type}</p>
      </div>

      {/* File preview */}
      <div className="mt-4">
        {renderViewer()}
      </div>
    </div>
  );
}