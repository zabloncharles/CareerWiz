import { BsGlobe } from 'react-icons/bs';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

interface HeaderProps {
  name: string;
  label: string;
  email: string;
  phone: string;
  city: string;
  url: string;
}

export const Header = ({ name, label, email, phone, city, url }: HeaderProps) => {
  return (
    <header className="text-center border-b border-gray-200 pb-6">
      <h1 className="text-3xl font-light mb-2">{name}</h1>
      <h2 className="text-lg text-gray-600 mb-4">{label}</h2>

      <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
        {email && (
          <div className="flex items-center gap-1">
            <HiMail className="text-gray-400" />
            <span>{email}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-1">
            <HiPhone className="text-gray-400" />
            <span>{phone}</span>
          </div>
        )}
        {city && (
          <div className="flex items-center gap-1">
            <HiLocationMarker className="text-gray-400" />
            <span>{city}</span>
          </div>
        )}
        {url && (
          <div className="flex items-center gap-1">
            <BsGlobe className="text-gray-400" />
            <span>{url}</span>
          </div>
        )}
      </div>
    </header>
  );
};
