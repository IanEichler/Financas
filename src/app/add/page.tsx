"use client";
export default function NovaTransacao() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log("Dados da transação:", data);
      alert("Transação registrada!");
    };
  
    const handleCancel = () => {
      const form = document.getElementById("formTransacao") as HTMLFormElement;
      form.reset();
    };
  
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center px-4">
        <div className="bg-zinc-800 p-6 rounded-lg w-full max-w-md shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-white text-2xl font-bold">Nova Transação</h2>
              <p className="text-sm text-zinc-400">
                Inclua suas entradas e saídas sem complicações!
              </p>
            </div>
            <button className="text-zinc-400 hover:text-white text-xl">×</button>
          </div>
  
          <form
            id="formTransacao"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-zinc-300 block mb-1">
                Descrição da transação
              </label>
              <input
                type="text"
                name="descricao"
                placeholder="Espetinho"
                className="w-full p-2 rounded bg-zinc-700 text-white"
              />
            </div>
  
            <div>
              <label className="text-zinc-300 block mb-1">Categoria</label>
              <input
                type="text"
                name="categoria"
                placeholder="Alimentação"
                className="w-full p-2 rounded bg-zinc-700 text-white"
              />
            </div>
  
            <div>
              <label className="text-zinc-300 block mb-1">Valor</label>
              <input
                type="text"
                name="valor"
                placeholder="30,00"
                className="w-full p-2 rounded bg-zinc-700 text-white"
              />
            </div>
  
            <div>
              <label className="text-zinc-300 block mb-1">Data</label>
              <input
                type="date"
                name="data"
                defaultValue="2025-03-21"
                className="w-full p-2 rounded bg-zinc-700 text-white"
              />
            </div>
  
            <div>
              <label className="text-zinc-300 block mb-1">Banco</label>
              <input
                type="text"
                name="banco"
                placeholder="BANCO BTG PACTUAL S.A."
                className="w-full p-2 rounded bg-zinc-700 text-white"
              />
            </div>
  
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  