import React from "react";

const navigation = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sandhiyaek",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.67V9h2.67v10zm-1.34-11.5c-.83 0-1.5-.67-1.5-1.5S6.17 4.5 7 4.5s1.5.67 1.5 1.5S7.83 7.5 7 7.5zm13 11.5h-2.67v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5H9.67V9h2.67v1.5c.59-.89 1.59-1.5 2.66-1.5 1.93 0 3.5 1.57 3.5 3.5v6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/sandhiyaek",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Portfolio",
    href: "http://sandhiyaek.me/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-4-8a8.01 8.01 0 0016 0 8.01 8.01 0 00-16 0zm4-6a6 6 0 110 12 6 6 0 010-12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            Sandhiya E K | Tiruvannamalai, Tamil Nadu, 606802 | sandhiyaek589@gmail.com | +91 7397192797
          </p>
          <p className="text-center text-xs leading-5 text-gray-500 mt-2">
            &copy; 2025 Sandhiya E K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
