/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                  50: '#f9fafb',  // bardzo jasny szary, prawie biały
                  100: '#f3f4f6', // jasny szary
                  200: '#e5e7eb', // subtelny szary
                  300: '#d1d5db', // średni szary
                  400: '#9ca3af', // ciemniejszy szary
                  500: '#6b7280', // neutralny szary
                  600: '#4b5563', // ciemny szary
                  700: '#374151', // bardzo ciemny szary
                  800: '#1f2a44', // prawie czarny
                  900: '#111827', // głęboka czerń
                },
                background: '#ffffff', // czysty biały jako tło
                accent: {
                  500: '#3b82f6', // jasny niebieski jako akcent
                  600: '#2563eb', // ciemniejszy niebieski
                },
                text: {
                  primary: '#111827', // głęboka czerń dla tekstu głównego
                  secondary: '#6b7280', // szary dla tekstu drugorzędnego
                },
              },
        },
    },
    plugins: [],
}

