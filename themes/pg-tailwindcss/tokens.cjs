/* Pinegrow generated Design Panel Begin */
/* eslint-disable */
/* prettier-disable */
/* @ts-nocheck */

const pg_colors = {
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  yellow: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  green: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  purple: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
  primary: {
    50: '#ebf3f6',
    100: '#cfe6eb',
    200: '#b3d8e0',
    300: '#95cad6',
    400: '#75bdcc',
    500: '#51afc1',
    600: '#12a2b7',
    700: '#1194a8',
    800: '#0f8798',
    900: '#0e7a89',
    950: '#0c6d7b',
    DEFAULT: '#0b606c',
  },
  secondary: {
    50: '#ececeb',
    100: '#c9c8c0',
    200: '#a8a697',
    300: '#878570',
    400: '#68664b',
    500: '#494828',
    600: '#2c2c04',
    700: '#282804',
    800: '#252504',
    900: '#212104',
    950: '#1d1e03',
    DEFAULT: '#1a1a02',
  },
  tertiary: {
    50: '#fef5ee',
    100: '#ffead6',
    200: '#ffdfbe',
    300: '#fed4a6',
    400: '#fcc98e',
    500: '#f9bf76',
    600: '#f5b45e',
    700: '#e0a556',
    800: '#cc964e',
    900: '#b88747',
    950: '#a4793f',
    DEFAULT: '#916a38',
  },
  neutral: {
    50: '#ebebeb',
    100: '#c4c4c4',
    200: '#9f9f9f',
    300: '#7b7b7b',
    400: '#585858',
    500: '#383838',
    600: '#1b1b1b',
    700: '#191919',
    800: '#171717',
    900: '#151515',
    950: '#131313',
    DEFAULT: '#101010',
  },
  success: {
    50: '#ecf0ec',
    100: '#cdddcb',
    200: '#aec9ab',
    300: '#90b68c',
    400: '#71a36d',
    500: '#519050',
    600: '#2e7d32',
    700: '#2a722e',
    800: '#26682a',
    900: '#235e26',
    950: '#1f5422',
    DEFAULT: '#519050',
  },
  warning: {
    50: '#fcefeb',
    100: '#ffd9c7',
    200: '#ffc4a4',
    300: '#ffae7f',
    400: '#fb985c',
    500: '#f58238',
    600: '#ed6c02',
    700: '#d96302',
    800: '#c55a02',
    900: '#b25102',
    950: '#9f4801',
    DEFAULT: '#f58238',
  },
  error: {
    50: '#f9ecec',
    100: '#f9cfca',
    200: '#f6b2a9',
    300: '#f19488',
    400: '#e97669',
    500: '#df564c',
    600: '#d32f2f',
    700: '#c12b2b',
    800: '#b02727',
    900: '#9e2323',
    950: '#8d2020',
    DEFAULT: '#df564c',
  },
  info: {
    50: '#ebf1f9',
    100: '#d0dff2',
    200: '#b4ccec',
    300: '#96bbe5',
    400: '#76a9df',
    500: '#5098d8',
    600: '#0288d1',
    700: '#027cbf',
    800: '#0271ae',
    900: '#02669d',
    950: '#015b8c',
    DEFAULT: '#5098d8',
  },
}

const pg_fonts = {
  sans: ["'Fira Sans', sans-serif"],
  serif: ["'Kalam', sans-serif"],
}

const pg_font_urls = [
  'https://fonts.googleapis.com/css?family=Fira+Sans:100,200,300,400,500,600,700,800,900|Kalam:300,400,700&display=swap',
]

const pg_backgrounds = {
  'design-image':
    "url('https://images.unsplash.com/photo-1689870215829-3e94e28ec328?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5MjM0MTY0N3w&ixlib=rb-4.0.3&q=85')",
  'design-image-large':
    "url('https://images.unsplash.com/photo-1689870215829-3e94e28ec328?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5MjM0MTY0N3w&ixlib=rb-4.0.3&q=85')",
}

const pg_background_urls = {
  'design-image':
    'https://images.unsplash.com/photo-1689870215829-3e94e28ec328?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5MjM0MTY0N3w&ixlib=rb-4.0.3&q=85',
  'design-image-large':
    'https://images.unsplash.com/photo-1689870215829-3e94e28ec328?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5MjM0MTY0N3w&ixlib=rb-4.0.3&q=85',
}

module.exports = {
  pg_colors,
  pg_fonts,
  pg_font_urls,
  pg_backgrounds,
  pg_background_urls,
}

/* Pinegrow generated Design Panel End */