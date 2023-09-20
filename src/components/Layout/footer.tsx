import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-5 ">
        <div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">제목??</span>

          <ul className="flex flex-row items-center mb-6 text-sm font-medium text-gray-500  ">
            <li>
              <a href="/" className="mr-4 hover:underline ">
                About
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200   lg:my-8" />
        <span className="block text-sm text-center text-gray-500">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            제목
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
