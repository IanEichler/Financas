
import './globals.css';

export const metadata = {
  title: 'Finanças',
  description: 'Controle financeiro pessoal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#121212] text-white">{children}</body>
    </html>
  );
}
