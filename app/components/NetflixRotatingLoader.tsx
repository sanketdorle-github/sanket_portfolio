
import React from 'react';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

export interface NetflixRotatingLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  fullScreen?: boolean;
}

const NetflixRotatingLoader = ({ 
  text,
  fullScreen = false,
  className,
  ...props
}: NetflixRotatingLoaderProps) => {
  const containerClasses = cn(
    'flex flex-col items-center justify-center',
    fullScreen ? 'fixed inset-0 z-50' : 'p-8',
    className
  );

  const bgClasses = fullScreen ? 'bg-netflix-dark' : '';
  
  return (
    <div className={cn(containerClasses, bgClasses)} {...props}>
      <Loader className="w-14 h-14 text-netflix-red animate-netflix-rotate" />
      
      {text && (
        <p className="mt-4 text-lg font-medium text-netflix-light text-gray-50">{text}</p>
      )}
    </div>
  );
};

export default NetflixRotatingLoader;