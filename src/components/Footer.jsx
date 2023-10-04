import React from 'react'

function Footer() {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black "
            href="#"
            aria-label="Brand"
          >
            Raheel Azmi
          </a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500">
            © Develop with ❤️ by{" "}
            <a href="https://raheelazmi.com/" target="_blank">
              Raheel Azmi
            </a>
          </p>
        </div>

     
      </div>
    </footer>
  );
}

export default Footer