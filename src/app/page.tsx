"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        
        {/* Ícono para dar una sensación amigable, sin usar fotos */}
        <div className="text-4xl mb-6">🤝</div>
        
        {/* Título principal */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          ¡Gracias por Confiar en Belén!
        </h1>
        
        {/* Descripción breve */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          Belén cuida de tus niños con dedicación mientras disfrutas tu comida.  
          Si deseas agradecer su labor, puedes dejar una propina.
        </p>
        
        {/* Datos de la cuenta */}
        <div className="w-full bg-gray-100 p-4 rounded-xl flex flex-col items-center mb-6">
          <p className="text-gray-700 font-medium mb-1">MiDinero Nº Cuenta:</p>
          <p className="text-amber-600 text-xl font-semibold mb-3">3701553248</p>
          <p className="text-amber-600 text-xl font-semibold mb-3">Milagros Belen Guales Romano</p>
          <p className="text-sm text-gray-500">Banco: MiDinero</p>
        </div>
        
        {/* Botón para copiar el alias */}
        <button 
          onClick={() => navigator.clipboard.writeText("3701553248")}
          className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white rounded-full text-base font-medium transition-colors"
        >
          Copiar Nº Cuenta
        </button>

        {/* Mensaje final */}
        <p className="mt-4 text-gray-500 text-sm text-center">
          ¡Tu contribución es muy apreciada!
        </p>
      </div>
    </main>
  );
}
