import { PiggyBank } from 'lucide-react';

export default function Dashboard() {
  const categories = [
    { label: 'Alimentação', value: 1508.15 },
    { label: 'Mercado', value: 508.90 },
    { label: 'Transporte', value: 900.00 },
    { label: 'Lazer', value: 1200.00 },
  ];

  const maxValue = Math.max(...categories.map(c => c.value));
  const maxHeightPx = 160;
  const barColor = '#00c897';
  const barHoverColor = '#33d6a6';

  return (
    <main className="min-h-screen bg-[#1e1e1e] text-white px-6 py-6 font-sans">
      <header className="flex justify-between items-center mb-10">
        <div className="transition-transform hover:scale-110">
          <PiggyBank className="text-[#00c897]" size={45} />
        </div>
        <button className="bg-[#00c897] p-2 rounded-full hover:bg-[#00a97a] transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {[ 
          { title: 'Entradas', value: 'R$ 7.840,56', color: '#00ff9a', description: 'Somada todas as entradas do período.' },
          { title: 'Saídas', value: 'R$ 1.580,45', color: '#ff4e69', description: 'Somada todas as saídas do período.' },
          { title: 'Balanço', value: 'R$ 6.260,11', color: '#00ff9a', description: 'Somada todas as entradas e saídas do período.' },
        ].map((card, idx) => (
          <div key={idx} className="bg-[#121212] p-5 rounded-xl shadow border border-[#2f2f2f]">
            <p className="text-sm text-gray-400 mb-1">{card.title}</p>
            <h2 className="text-2xl font-bold" style={{ color: card.color }}>{card.value}</h2>
            <p className="text-xs text-gray-500 mt-1">{card.description}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Análise</h3>
          <div className="bg-[#121212] rounded-xl p-5 h-52 flex items-end gap-3 justify-between">
            {categories.map(({ label, value }, i) => {
              const heightPx = (value / maxValue) * maxHeightPx;
              return (
                <div key={i} className="flex flex-col items-center w-full max-w-[80px]">
                  <div
                    style={{
                      height: `${heightPx}px`,
                      width: '100%',
                      backgroundColor: barColor,
                      borderRadius: '8px 8px 0 0',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    title={`${label}: R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                    className="hover:bg-[#33d6a6]"
                  />
                  <span className="text-xs mt-2 text-center">{`R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#121212] rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Categorias</h3>
          <div className="space-y-2">
            {categories.map(({ label, value }, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-2 rounded text-sm bg-[#2c2c2c] text-white hover:bg-[#383838] cursor-pointer transition-colors"
              >
                <span>
                  {label === 'Alimentação' && '🍽️'}
                  {label === 'Mercado' && '🛒'}
                  {label === 'Transporte' && '🚗'}
                  {label === 'Lazer' && '🎉'} {label}
                </span>
                <span>{`${Math.round(value / 150)}`}</span>
                <span>{`R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Transações</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#121212] text-gray-400">
              <tr>
                <th className="p-3">Descrição</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Valor</th>
                <th className="p-3">Banco</th>
                <th className="p-3">Data</th>
                <th className="p-3">Parcelas</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((_, idx) => (
                <tr key={idx} className="bg-[#2c2c2c] border-b border-[#1a1a1a] hover:bg-[#383838] transition-colors cursor-pointer">
                  <td className="p-3">🛒 Supermercado Big Master</td>
                  <td className="p-3">Crédito</td>
                  <td className="p-3 text-[#ff4e69]">R$ 896,00</td>
                  <td className="p-3">Nubank</td>
                  <td className="p-3">21/03/2024</td>
                  <td className="p-3">1/1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
