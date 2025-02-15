import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaUser, FaFlask, FaPrescriptionBottleAlt } from 'react-icons/fa';

export default function UserSelection() {
  const navigate = useNavigate();

  const userTypes = [
    {
      title: 'Doctor',
      icon: FaUserMd,
      description: 'Access your medical practice dashboard',
      path: '/doctor'
    },
    {
      title: 'Patient',
      icon: FaUser,
      description: 'Manage your health records and appointments',
      path: '/patient'
    },
    {
      title: 'Laboratory',
      icon: FaFlask,
      description: 'Manage lab tests and results',
      path: '/lab'
    },
    {
      title: 'Pharmacy',
      icon: FaPrescriptionBottleAlt,
      description: 'Handle prescriptions and inventory',
      path: '/pharmacy'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to CuraSync</h1>
        <p className="text-gray-600 text-center mb-12">Please select your user type to continue</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userTypes.map((type) => (
            <button
              key={type.path}
              onClick={() => navigate(`${type.path}/login`)}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <type.icon className="w-16 h-16 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
              <p className="text-gray-600 text-center text-sm">{type.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}