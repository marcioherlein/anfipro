"use client";

import { useEffect, useState } from "react";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading leads");
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-extrabold text-stone-900">
          Leads recibidos
        </h1>

        {loading && (
          <p className="text-stone-500">Cargando...</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {!loading && !error && leads.length === 0 && (
          <p className="text-stone-500">No hay leads todavía.</p>
        )}

        {!loading && leads.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-left text-xs font-semibold uppercase tracking-wide text-stone-500">
                <tr>
                  <th className="px-6 py-4">Nombre</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Teléfono</th>
                  <th className="px-6 py-4">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-medium text-stone-900">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 text-stone-600">{lead.email}</td>
                    <td className="px-6 py-4 text-stone-600">{lead.phone}</td>
                    <td className="px-6 py-4 text-stone-400">
                      {new Date(lead.createdAt).toLocaleString("es-AR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-4 text-xs text-stone-400">
          {leads.length} lead{leads.length !== 1 ? "s" : ""} en total
        </p>
      </div>
    </main>
  );
}
