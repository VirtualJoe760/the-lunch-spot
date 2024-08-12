import React from 'react';
import { Link } from 'gatsby';

const LinkButton = ({
  to,
  external = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'mx-auto lg:mx-0 hover:underline bg-white text-navy hover:text-red font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out';

  const combinedClasses = `${baseClasses} ${className}`;

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={combinedClasses} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
