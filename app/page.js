"use client";

import { useState, useEffect, useRef } from "react";

// Scroll-reveal wrapper — fades up when entering the viewport
function FadeUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(36px)",
        transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroImageOpacity = Math.max(0, 1 - scrollY / (typeof window !== "undefined" ? window.innerHeight * 0.65 : 500));

  const problemCards = [
    {
      icon: "$",
      title: "El dilema ARS/USD",
      body: "Cobras en dólares pero tus costos son en pesos. Las herramientas de pricing no entienden la inflación argentina ni el dólar turista.",
    },
    {
      icon: "EN",
      title: "Todo en inglés",
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
      badge: "Autoevaluación inmediata",
    },
    {
      label: "Diagnóstico",
      title: "Diagnóstico Express",
      price: "$15–25",
      body: "Auditoría profesional con recomendaciones específicas. Entrega en 48hs por WhatsApp.",
      badge: "+Vistas en 30 días",
    },
    {
      label: "Optimización",
      title: "Optimización Completa",
      price: "$75–120",
      body: "Reescritura completa, estrategia de precios, guía de fotos y recomendación ARS/USD.",
      badge: "+Reservas en 60 días",
    },
    {
      label: "Multi-propiedad",
      title: "Plan Multi-Propiedad",
      price: "$350–450",
      body: "Todo lo anterior para hasta 5 propiedades, más pricing dinámico y seguimiento trimestral.",
      badge: "+RevPAN del portfolio",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Compartinos tu anuncio",
      body: "Mandanos el link de tu listing de Airbnb por WhatsApp. Nada más.",
    },
    {
      number: "02",
      title: "Analizamos todo",
      body: "Fotos, título, descripción, pricing, posición en búsqueda, competencia en tu zona.",
    },
    {
      number: "03",
      title: "Te mandamos el plan",
      body: "PDF profesional con cada mejora detallada. Listo para implementar o lo hacemos nosotros.",
    },
    {
      number: "04",
      title: "Ves los resultados",
      body: "Más vistas, mejor posición, más reservas. Medimos el impacto y te mostramos los números.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    listingUrl: "",
    city: "",
    propertyCount: "",
    mainProblem: "",
    occupancy: "",
    revenueRange: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");
      setStatus({
        loading: false,
        error: "",
        success: "Gracias. Recibimos tus datos y te vamos a contactar pronto.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        listingUrl: "",
        city: "",
        propertyCount: "",
        mainProblem: "",
        occupancy: "",
        revenueRange: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || "Error al enviar el formulario",
        success: "",
      });
    }
  }

  return (
    <main className="bg-black text-white">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl" style={{ background: `rgba(0,0,0,${Math.min(0.85, 0.2 + scrollY / 300)})` }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-extrabold tracking-tight">anfiPro</span>
            <span className="pb-0.5 text-xs text-white/40">Para anfitriones argentinos</span>
          </div>
          <a
            href="#demo"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/85"
          >
            Pedí tu demo
          </a>
        </div>
      </nav>

      {/* ── HERO BACKGROUND IMAGE (fixed, fades on scroll) ──────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: heroImageOpacity }}
      >
        <img
          src="/images/001-chic-cozy-airbnb-apartment-a-modern-stay-in-athens-1050x700.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        {/* subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(52,211,153,0.12) 0%, transparent 70%)",
          }}
        />

        <FadeUp delay={100}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Optimización profesional para hosts en Argentina
          </div>
        </FadeUp>

        <FadeUp delay={250}>
          <h1 className="max-w-5xl text-5xl font-extrabold leading-none tracking-tight sm:text-7xl lg:text-8xl">
            Tu anuncio de Airbnb
            <br />
            <span className="text-emerald-400">puede rendir el doble.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={420}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Sin suscripciones mensuales. Sin dashboards en inglés.
            <br />
            Por WhatsApp, en tu idioma, con precios que tienen sentido.
          </p>
        </FadeUp>

        <FadeUp delay={560}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#demo"
              className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Pedí tu demo gratis
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Cómo funciona ↓
            </a>
          </div>
        </FadeUp>
      </section>

{/* ── MARKET INTELLIGENCE ─────────────────────────────────────── */}
      <section className="relative z-10 bg-stone-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Inteligencia de mercado
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              31.598 anuncios analizados.<br />Esto es lo que muestran los datos.
            </h2>
            <p className="mt-4 text-sm text-white/35">
              Fuente: dataset público de Airbnb Buenos Aires · Tipo de cambio MEP $1.164 (ene 2025)
            </p>
          </FadeUp>

          {/* ── KPI row ── */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "31.6K", label: "Anuncios con precio analizado", color: "text-white" },
              { value: "USD 34", label: "Tarifa mediana por noche en CABA", color: "text-emerald-400" },
              { value: "USD 25–50", label: "Rango típico del mercado", color: "text-sky-400" },
              { value: "USD 79+", label: "Top 10% del mercado", color: "text-amber-400" },
            ].map((kpi, i) => (
              <FadeUp key={kpi.label} delay={i * 80}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <div className={`text-4xl font-extrabold tracking-tight ${kpi.color}`}>{kpi.value}</div>
                  <div className="mt-3 text-sm leading-6 text-white/50">{kpi.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ── Neighborhood bars ── */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <FadeUp>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="mb-6 text-lg font-bold text-white">Tarifa mediana por barrio (USD/noche)</h3>
                {[
                  { name: "Palermo", median: 37.9, listings: "10.4K anuncios", pct: 100 },
                  { name: "Recoleta", median: 36.1, listings: "4.5K anuncios", pct: 95 },
                  { name: "Belgrano", median: 36.1, listings: "1.6K anuncios", pct: 95 },
                  { name: "Retiro", median: 34.4, listings: "1.5K anuncios", pct: 91 },
                  { name: "San Nicolás", median: 29.8, listings: "2.2K anuncios", pct: 79 },
                ].map((row) => (
                  <div key={row.name} className="mb-5">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-white/80">{row.name}</span>
                      <span className="text-sm font-bold text-emerald-400">USD {row.median}</span>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: `${row.pct}%`, transition: "width 1.2s ease" }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-white/30">{row.listings}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <div className="flex flex-col gap-6">
                {/* Price distribution */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <h3 className="mb-6 text-lg font-bold text-white">Distribución de precios — CABA</h3>
                  {[
                    { label: "P25 (25% más barato)", value: "USD 25.5", barW: "25%", color: "bg-sky-500" },
                    { label: "Mediana (P50)", value: "USD 34.3", barW: "40%", color: "bg-emerald-500" },
                    { label: "P75", value: "USD 49.6", barW: "60%", color: "bg-amber-500" },
                    { label: "P90 (top 10%)", value: "USD 79.4", barW: "80%", color: "bg-orange-500" },
                    { label: "P95 (top 5%)", value: "USD 108.9", barW: "100%", color: "bg-rose-500" },
                  ].map((row) => (
                    <div key={row.label} className="mb-4">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs text-white/50">{row.label}</span>
                        <span className="text-sm font-bold text-white">{row.value}</span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full ${row.color}`} style={{ width: row.barW }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Room type */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <h3 className="mb-6 text-lg font-bold text-white">Mediana por tipo de alojamiento</h3>
                  {[
                    { label: "Departamento entero", value: "USD 35.4", icon: "🏠", highlight: true },
                    { label: "Habitación privada", value: "USD 18.0", icon: "🛏️", highlight: false },
                    { label: "Habitación compartida", value: "USD 11.3", icon: "🛋️", highlight: false },
                  ].map((row) => (
                    <div key={row.label} className={`mb-3 flex items-center justify-between rounded-2xl border px-5 py-4 ${row.highlight ? "border-emerald-500/30 bg-emerald-500/10" : "border-white/10 bg-white/3"}`}>
                      <span className="text-sm text-white/70">{row.icon} {row.label}</span>
                      <span className={`text-sm font-bold ${row.highlight ? "text-emerald-400" : "text-white/60"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Bottom callout ── */}
          <FadeUp delay={100}>
            <div className="mt-10 rounded-3xl border border-emerald-500/25 bg-emerald-500/8 p-8">
              <p className="leading-8 text-white/70">
                <span className="font-semibold text-white">La conclusión es clara:</span> en un mercado donde
                la mayoría de los departamentos enteros se publica entre USD 25 y USD 50 por noche, la diferencia
                entre quedar en la media y capturar la demanda premium no es el precio — es el posicionamiento,
                las fotos y la optimización del anuncio.
              </p>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── PROBLEM SECTION ─────────────────────────────────────────── */}
      <section className="relative z-10 bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              El problema
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Las herramientas globales ignoran a los anfitriones argentinos.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problemCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 120}>
                <div className="h-full rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-lg font-bold text-white">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">{card.title}</h3>
                  <p className="mt-4 leading-7 text-stone-600">{card.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTY PHOTOS ─────────────────────────────────────────── */}
      <section className="relative z-10 overflow-hidden bg-stone-950 py-24">
        <FadeUp className="mb-12 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
            El tipo de propiedades con las que trabajamos
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            Cada anuncio tiene potencial sin explotar.
          </h2>
        </FadeUp>

        {/* Horizontal scroll strip */}
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}>
          {[
            { src: "/images/property-1.jpg", location: "Palermo, CABA" },
            { src: "/images/property-2.jpg", location: "Villa Crespo, CABA" },
            { src: "/images/property-3.jpg", location: "Bariloche, Río Negro" },
            { src: "/images/property-4.jpg", location: "San Telmo, CABA" },
          ].map((img, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden rounded-3xl"
              style={{ width: "340px", scrollSnapAlign: "start" }}
            >
              <img
                src={img.src}
                alt={img.location}
                className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-sm font-medium text-white/80">{img.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section id="como-funciona" className="relative z-10 bg-white text-stone-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              El proceso
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sin apps, sin dashboards.
              <br />
              Todo por WhatsApp.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 110}>
                <div className="relative h-full rounded-3xl border border-stone-200 bg-stone-50 p-8">
                  <div className="mb-4 text-xs font-bold tracking-[0.2em] text-emerald-600">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">{step.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{step.body}</p>
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-stone-300 xl:block">
                      →
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="relative z-10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Precios
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Elegí el nivel de optimización que necesitás.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-4 lg:grid-cols-4">
            {pricingCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 100}>
                <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <div className="absolute right-5 top-5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                    Muy pronto
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    {card.label}
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{card.title}</h3>
                  <div className="mt-4 text-4xl font-extrabold text-emerald-400">
                    {card.price}
                  </div>
                  <p className="mt-4 flex-1 leading-7 text-white/55">{card.body}</p>
                  <div className="mt-6 inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
                    {card.badge}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO / FORM ─────────────────────────────────────────────── */}
      <section id="demo" className="relative z-10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

            {/* Left: copy */}
            <FadeUp>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Demo gratis
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Pedí una demo gratis.
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-white/55">
                Dejanos tus datos y te mostramos cómo AnfiPro puede mejorar tu
                anuncio. Simple, rápido y en tu idioma.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { metric: "Pag 14 → Pag 2", label: "Posición en búsqueda" },
                  { metric: "+180%", label: "Vistas del anuncio", highlight: true },
                  { metric: "+85%", label: "Tasa de reserva", highlight: true },
                  { metric: "+$420 USD", label: "Ingreso mensual", highlight: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <span className="text-sm text-white/55">{row.label}</span>
                    <span
                      className={`text-sm font-bold ${
                        row.highlight ? "text-emerald-400" : "text-white"
                      }`}
                    >
                      {row.metric}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right: form */}
            <FadeUp delay={150}>
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-white/50">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-medium text-white/50">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+54 9 11 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-white/50">
                    Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="listingUrl" className="mb-2 block text-xs font-medium text-white/50">
                    Link de tu anuncio en Airbnb
                  </label>
                  <input
                    id="listingUrl"
                    type="url"
                    placeholder="https://airbnb.com/rooms/..."
                    value={formData.listingUrl}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-emerald-500"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-2 block text-xs font-medium text-white/50">
                      Ciudad / Barrio
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Palermo, Bariloche..."
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyCount" className="mb-2 block text-xs font-medium text-white/50">
                      Cant. de propiedades
                    </label>
                    <select
                      id="propertyCount"
                      value={formData.propertyCount}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/15 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500"
                    >
                      <option value="">Elegí una opción</option>
                      <option value="1">1 propiedad</option>
                      <option value="2-3">2–3 propiedades</option>
                      <option value="4-5">4–5 propiedades</option>
                      <option value="6+">6 o más</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="occupancy" className="mb-2 block text-xs font-medium text-white/50">
                      Ocupación promedio
                    </label>
                    <select
                      id="occupancy"
                      value={formData.occupancy}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/15 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500"
                    >
                      <option value="">Elegí una opción</option>
                      <option value="<30%">Menos del 30%</option>
                      <option value="30-50%">30–50%</option>
                      <option value="50-70%">50–70%</option>
                      <option value="70-90%">70–90%</option>
                      <option value=">90%">Más del 90%</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="revenueRange" className="mb-2 block text-xs font-medium text-white/50">
                      Ingresos mensuales (USD)
                    </label>
                    <select
                      id="revenueRange"
                      value={formData.revenueRange}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/15 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500"
                    >
                      <option value="">Elegí una opción</option>
                      <option value="<500">Menos de $500</option>
                      <option value="500-1000">$500–$1.000</option>
                      <option value="1000-2500">$1.000–$2.500</option>
                      <option value="2500-5000">$2.500–$5.000</option>
                      <option value=">5000">Más de $5.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mainProblem" className="mb-2 block text-xs font-medium text-white/50">
                    ¿Cuál es tu mayor problema hoy?
                  </label>
                  <select
                    id="mainProblem"
                    value={formData.mainProblem}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/15 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500"
                  >
                    <option value="">Elegí una opción</option>
                    <option value="pocas-vistas">Pocas vistas al anuncio</option>
                    <option value="pocas-reservas">Muchas vistas, pocas reservas</option>
                    <option value="precios">No sé cómo poner los precios</option>
                    <option value="fotos">Mis fotos no son buenas</option>
                    <option value="resenas">Pocas o malas reseñas</option>
                    <option value="competencia">La competencia me gana en precio</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="mt-2 rounded-2xl bg-emerald-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.loading ? "Enviando..." : "Quiero mi demo gratis"}
                </button>

                {status.error && (
                  <p className="text-sm font-medium text-red-400">{status.error}</p>
                )}
                {status.success && (
                  <p className="text-sm font-medium text-emerald-400">{status.success}</p>
                )}
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/30">
          AnfiPro — Optimización de Airbnb para anfitriones argentinos
        </div>
      </footer>

    </main>
  );
}
