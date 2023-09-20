import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-5 ">
        <span className="block text-sm text-center text-gray-500">
          © 2023{' '}
          <a href="" className="hover:underline">
            Qrunch
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
