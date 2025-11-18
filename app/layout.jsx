import './globals.css';

export const metadata = {
  title: 'เสื้อSISAKET ROBOTICS | ศรีสะเกษ',
  description: 'SISAKET ROBOTICS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  );
}