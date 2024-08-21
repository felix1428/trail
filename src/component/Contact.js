import React from "react";
import contact from "../images/contact.png";

export default function Contact() {
  return (
    <div className=" grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32my-8 bg-gray-800 bg-opacity-50 dark:bg-gray-100 dark:bg-opacity-50 text-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Us!</h2>
          <div className="text-gray-400 dark:text-gray-600">Have Any Queries?</div>
        </div>
        <img
          src={contact}
          alt="Contact Us"
          className="p-6 max-w-full h-auto md:h-64" // Ensures the image is responsive and fits the container
        />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">Coordinator</h3>
          <p className="text-gray-400 dark:text-gray-600">Name: John Doe</p>
          <p className="text-gray-400 dark:text-gray-600">Contact: 123-456-7890</p>
          <p className="text-gray-400 dark:text-gray-600">Email: johndoe@example.com</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">Staff Coordinator</h3>
          <p className="text-gray-400 dark:text-gray-600">Name: Jane Smith</p>
          <p className="text-gray-400 dark:text-gray-600">Contact: 987-654-3210</p>
          <p className="text-gray-400 dark:text-gray-600">Email: janesmith@example.com</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">Register Team</h3>
          <p className="text-gray-400 dark:text-gray-600">Name: Registration Team</p>
          <p className="text-gray-400 dark:text-gray-600">Contact: 555-555-5555</p>
          <p className="text-gray-400 dark:text-gray-600">Email: registerteam@example.com</p>
        </div>
      </div>
    </div>
  );
}