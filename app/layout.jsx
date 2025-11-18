import './globals.css';

export const metadata = {
  title: 'เสื้อเฉลิมฉลองเมือง 243 ปี | ศรีสะเกษ',
  description: 'เสื้อเฉลิมฉลองเมืองศรีสะเกษ 243 ปี',
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