
'use client'

export default function Home() {
  return (
    <main className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Card title="Entradas" value="R$ 7.840,56" description="Somada todas as entradas do período." color="text-green-400" />
        <Card title="Saídas" value="R$ 1.580,45" description="Somada todas as saídas do período." color="text-red-500" />
        <Card title="Balanço" value="R$ 6.260,11" description="Somada todas as entradas e saídas do período." color="text-green-400" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Análise</h2>
          <div className="bg-[#1e1e1e] h-52 rounded-xl" />
        </section>

        <section className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Categorias</h2>
          <div className="bg-[#1e1e1e] rounded-xl p-4 divide-y divide-[#333]">
            {[
              { nome: 'Alimentação', qtd: 10, total: 'R$ 1.508,15' },
              { nome: 'Mercado', qtd: 8, total: 'R$ 508,90' },
              { nome: 'Alimentação', qtd: 10, total: 'R$ 1.508,15' },
              { nome: 'Alimentação', qtd: 10, total: 'R$ 1.508,15' },
            ].map((cat, i) => (
              <div key={i} className="flex justify-between py-2 text-sm">
                <span>🍔 {cat.nome}</span>
                <span>{cat.qtd}</span>
                <span>{cat.total}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Transações</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-[#1e1e1e] rounded-xl">
            <thead>
              <tr className="text-left border-b border-[#333]">
                <th className="p-4">Descrição</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Banco</th>
                <th>Data</th>
                <th>Parcelas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#333]">
                <td className="p-4">🍔 Supermercado Big Master</td>
                <td>Crédito</td>
                <td className="text-red-500">R$ 896,00</td>
                <td>Nubank</td>
                <td>21/03/2024</td>
                <td>1/1</td>
              </tr>
              <tr className="border-t border-[#333]">
                <td className="p-4">🍔 Supermercado Big Master</td>
                <td>Crédito</td>
                <td className="text-red-500">R$ 896,00</td>
                <td>Nubank</td>
                <td>21/03/2024</td>
                <td>1/1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function Card({ title, value, description, color }: { title: string, value: string, description: string, color: string }) {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-xl flex-1">
      <h3 className="text-lg">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
