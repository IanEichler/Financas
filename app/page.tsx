const cards = [
  {
    title: "Entradas",
    value: "R$ 7.840,56",
    description: "Somada todas as entradas do período.",
    color: "text-green-400",
  },
  {
    title: "Saídas",
    value: "R$ 1.580,45",
    description: "Somada todas as saídas do período.",
    color: "text-red-400",
  },
  {
    title: "Balanço",
    value: "R$ 6.260,11",
    description: "Somada todas as entradas e saídas do período.",
    color: "text-green-400",
  },
];

export default function HeaderSummary() {
  return (
    <div className="bg-gray-900 p-6 flex justify-between items-center gap-4 rounded-lg">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 p-5 rounded-lg flex-1 shadow-md text-white"
        >
          <p className="text-sm">{card.title}</p>
          <strong className={`text-2xl ${card.color}`}>{card.value}</strong>
          <p className="text-xs mt-1 text-gray-400">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
