import React, { useCallback } from 'react';

interface SvgIconProps {
  link?: string;
  email?: string;
  icon: React.ReactNode;
  name: string;
}

const SvgIcon: React.FC<SvgIconProps> = React.memo(({ link, email, icon, name }) => {
  // Memoizing the click handler to avoid unnecessary re-creation
  const handleClick = useCallback(() => {
    if (link) {
      window.open(link, "_blank");
    } else if (email) {
      window.location.href = "mailto:" + email;
    }
  }, [link, email]);

  return (
    <div className="group relative">
      <button
        onClick={handleClick}
        className="p-2 hover:scale-125 duration-200 hover:text-primary-base"
      >
        {icon}
      </button>
      <span className="absolute -top-3 left-[50%] -translate-x-[50%] opacity-0 group-hover:opacity-100 rounded-lg border border-gray-300 bg-white p-2 text-sm font-bold shadow-md group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
        {name}
      </span>
    </div>
  );
});

export default SvgIcon;
