export default function HomePage() {
  const problemCards = [
    {
      icon: "$",
      title: "El dilema ARS/USD",
      body: "Cobras en dolares pero tus costos son en pesos. Las herramientas de pricing no entienden la inflacion argentina ni el dolar turista.",
    },
    {
      icon: "EN",
      title: "Todo en ingles",
      body: "PriceLabs, Rankbreeze, Beyond Pricing. Buenas herramientas, pero diseñadas para hosts de Estados Unidos y Europa. Sin soporte en español.",
    },
    {
      icon: "$$",
      title: "Suscripciones caras",
      body: "$20 USD por mes por anuncio. Para un host argentino con 2 propiedades, eso es un costo fijo que no cierra. AnfiPro cobra una vez, no todos los meses.",
    },
  ];

  const pricingCards = [
    {
      label: "Gratis",
      title: "Checklist del Anuncio Perfecto",
      price: "$0",
      body: "PDF con los 15 puntos que todo anuncio necesita.",
      badge: "Autoevaluacion inmediata",
    },
    {
      label: "Diagnostico",
      title: "Diagnostico Express",
      price: "$15-25",
      body: "Auditoria profesional con recomendaciones especificas. Entrega en 48hs por WhatsApp.",
      badge: "+Vistas en 30 dias",
    },
    {
      label: "Optimizacion",
      title: "Optimizacion Completa",
      price: "$75-120",
      body: "Reescritura completa, estrategia de precios, guia de fotos y recomendacion ARS/USD.",
      badge: "+Reservas en 60 dias",
    },
    {
      label: "Multi-propiedad",
      title: "Plan Multi-Propiedad",
      price: "$350-450",
      body: "Todo lo anterior para hasta 5 propiedades, mas pricing dinamico y seguimiento trimestral.",
      badge: "+RevPAN del portfolio",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Compartinos tu anuncio",
      body: "Mandanos el link de tu listing de Airbnb por WhatsApp. Nada mas.",
    },
    {
      number: "02",
      title: "Analizamos todo",
      body: "Fotos, titulo, descripcion, pricing, posicion en busqueda, competencia en tu zona.",
    },
    {
      number: "03",
      title: "Te mandamos el plan",
      body: "PDF profesional con cada mejora detallada. Listo para implementar o lo hacemos nosotros.",
    },
    {
      number: "04",
      title: "Ves los resultados",
      body: "Mas vistas, mejor posicion, mas reservas. Medimos el impacto y te mostramos los numeros.",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <nav className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-end gap-3">
            <span className="text-2xl font-extrabold tracking-tight text-stone-900">
              anfiPro
            </span>
            <span className="pb-0.5 text-sm text-stone-500">
              Para anfitriones argentinos
            </span>
          </div>
          <a
            href="#demo"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Pedí tu demo gratis
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm">
            Optimizacion profesional para hosts en Argentina
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Tu anuncio de Airbnb{" "}
            <span className="italic text-emerald-700">puede rendir el doble</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Servicios de optimizacion profesional para anfitriones argentinos. Sin
            suscripciones mensuales, sin dashboards en ingles. Te llega por
            WhatsApp, en tu idioma, con precios que tienen sentido.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-stone-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-lg font-bold text-stone-900">23K+</div>
              <div className="text-sm text-stone-500">Anuncios en BSAS</div>
            </div>
            <div className="rounded-full border border-stone-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-lg font-bold text-stone-900">70%</div>
              <div className="text-sm text-stone-500">Mal optimizados</div>
            </div>
            <div className="rounded-full border border-stone-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-lg font-bold text-stone-900">USD</div>
              <div className="text-sm text-stone-500">Precios accesibles</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/50">
          <div className="mb-6 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
            Después de AnfiPro
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4">
              <span className="text-sm font-medium text-stone-600">
                Posicion en busqueda
              </span>
              <span className="text-sm font-bold text-stone-900">
                Pag 14 → Pag 2
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4">
              <span className="text-sm font-medium text-stone-600">
                Vistas del anuncio
              </span>
              <span className="text-sm font-bold text-emerald-700">+180%</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4">
              <span className="text-sm font-medium text-stone-600">
                Tasa de reserva
              </span>
              <span className="text-sm font-bold text-emerald-700">+85%</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-stone-100 bg-stone-50 px-4 py-4">
              <span className="text-sm font-medium text-stone-600">
                Ingreso mensual
              </span>
              <span className="text-sm font-bold text-emerald-700">
                +$420 USD
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Las herramientas globales ignoran a los anfitriones argentinos
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-lg font-bold text-white">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900">{card.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{card.body}</p>
              </div>
            ))}
          </div>

          <div
            id="demo"
            className="mt-12 rounded-3xl border border-stone-200 bg-stone-900 p-8 text-white shadow-xl"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-stone-100">
                  Demo gratis
                </span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight">
                  Pedí una demo gratis
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-stone-300">
                  Dejanos tus datos y te mostramos como AnfiPro puede mejorar tu
                  anuncio. Simple, rapido y en tu idioma.
                </p>
              </div>

              <form className="grid gap-4 rounded-3xl bg-white p-6 text-stone-900 shadow-lg">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-stone-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-stone-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Telefono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+54 9 11 ..."
                    className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-stone-900"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Quiero mi demo gratis
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Elegí el nivel de optimizacion que necesitas
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                Muy pronto
              </div>

              <div className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                {card.label}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-stone-900">
                {card.title}
              </h3>
              <div className="mt-4 text-3xl font-extrabold text-stone-900">
                {card.price}
              </div>
              <p className="mt-4 min-h-[96px] leading-7 text-stone-600">
                {card.body}
              </p>

              <div className="mt-6 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {card.badge}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Sin apps, sin dashboards. Todo por WhatsApp.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
              >
                <div className="text-sm font-bold tracking-[0.2em] text-emerald-700">
                  {step.number}
                </div>
                <h3 className="mt-3 text-xl font-bold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
          Tu propiedad ya esta en Airbnb. Ahora hacela rendir.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
          Los anfitriones argentinos merecen herramientas pensadas para ellos. No
          mas suscripciones caras en dolares, no mas tutoriales en ingles, no mas
          herramientas que no entienden la economia local. AnfiPro existe para
          cerrar esa brecha.
        </p>
        <a
          href="#demo"
          className="mt-8 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
        >
          Sumate a la demo gratis
        </a>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-stone-500">
          AnfiPro — Optimizacion de Airbnb para anfitriones argentinos
        </div>
      </footer>
    </main>
  );
}