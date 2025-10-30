// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Rất quan trọng: Đảm bảo đường dẫn này đúng.
  // Nó sẽ quét tất cả các file có đuôi .js, .jsx, .ts, .tsx trong thư mục src.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};