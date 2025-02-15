// Component to display a list of files with basic operations
import React from 'react';
import { fileHelpers } from '../utils/fileHelpers';

interface FileListProps {
  files: File[];                    // Array of files to display
  onDelete: (index: number) => void; // Function to handle file deletion
  onDownload: (file: File) => void;  // Function to handle file download
}

export function FileList({ files, onDelete, onDownload }: FileListProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-2 border-b">
        <h3 className="font-medium">Uploaded Files</h3>
      </div>

      {/* File list */}
      <div className="divide-y">
        {files.length === 0 ? (
          <p className="p-4 text-gray-500 text-center">
            No files uploaded yet
          </p>
        ) : (
          files.map((file, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              {/* File information */}
              <div className="flex-1">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-sm text-gray-600">
                  {fileHelpers.formatFileSize(file.size)}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => onDownload(file)}
                  className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                >
                  Download
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}