import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, Shield, Activity, Network, Send, Sun, Moon } from "lucide-react";

// ==========================
// Landing Page — Cyberfrota (Light/Dark Toggle)
// A11y: alto contraste + modo escuro opcional
// ==========================

export default function CyberfrotaLanding() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-emerald-100 dark:bg-neutral-950 dark:text-neutral-100 dark:selection:bg-neutral-800">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200 dark:supports-[backdrop-filter]:bg-neutral-950/60 dark:border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500" />
              <span className="font-semibold tracking-wide">Cyberfrota</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
              <a href="#solucao" className="hover:text-neutral-900 dark:hover:text-white">Solução</a>
              <a href="#como-funciona" className="hover:text-neutral-900 dark:hover:text-white">Como funciona</a>
              <a href="#socios" className="hover:text-neutral-900 dark:hover:text-white">Sócios</a>
              <a href="#contato" className="hover:text-neutral-900 dark:hover:text-white">Contato</a>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-neutral-300 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900" onClick={()=> setDark(d => !d)}>
                {dark ? (<><Sun className="h-4 w-4"/> Claro</>) : (<><Moon className="h-4 w-4"/> Escuro</>)}
              </Button>
              <Button className="gap-1" size="sm">
                Começar <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
            >
              Inteligência simples para sua frota.
              <span className="block text-neutral-600 dark:text-neutral-400 font-normal mt-2 md:mt-3 text-lg md:text-2xl">
                Monitoramento em tempo real, alertas inteligentes e dados que viram decisões.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" className="gap-2">
                Solicitar demonstração <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900">
                Ver documentação
              </Button>
            </motion.div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Instalação rápida",
                "Baixa latência",
                "Criptografia fim a fim",
                "Dashboards claros",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  <span>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradiente sutil */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" />
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="border-t border-neutral-200 dark:border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border border-neutral-200 shadow-sm dark:bg-neutral-950 dark:border-neutral-900">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-xl grid place-items-center bg-neutral-100 dark:bg-neutral-900 mb-4">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Telemetria unificada</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Dados de veículos e máquinas em um único painel: posição, consumo, horas de motor e saúde dos componentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-neutral-200 shadow-sm dark:bg-neutral-950 dark:border-neutral-900">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-xl grid place-items-center bg-neutral-100 dark:bg-neutral-900 mb-4">
                    <Network className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Alertas inteligentes</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Anomalias detectadas em tempo real e notificações claras para decisões rápidas, reduzindo paradas e custos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-neutral-200 shadow-sm dark:bg-neutral-950 dark:border-neutral-900">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-xl grid place-items-center bg-neutral-100 dark:bg-neutral-900 mb-4">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Segurança de ponta</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Criptografia em trânsito e em repouso, autenticação forte e controle de acesso por perfis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-t border-neutral-200 dark:border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">Como funciona</h2>
                <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4">
                  Dispositivos enviam dados por MQTT/HTTP. Nosso backend processa, armazena e expõe APIs e webhooks para integrar ao seu ERP e operações.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>Instalação plug‑and‑play e suporte remoto.</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>Dashboards prontos e relatórios sob demanda.</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>APIs documentadas para integrações rápidas.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-900 dark:bg-neutral-950">
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    {[
                      { k:"Eventos/min", v:"12.480" },
                      { k:"Veículos", v:"268" },
                      { k:"Alertas hoje", v:"34" },
                      { k:"Disponibilidade", v:"99,95%" },
                      { k:"Atraso médio", v:"120 ms" },
                      { k:"APIs ativas", v:"7" },
                    ].map((m)=> (
                      <div key={m.k} className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-900">
                        <div className="text-neutral-600 dark:text-neutral-400">{m.k}</div>
                        <div className="text-base font-medium">{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute -z-10 -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 blur-2xl"/>
              </div>
            </div>
          </div>
        </section>

        {/* SÓCIOS */}
        <section id="socios" className="border-t border-neutral-200 dark:border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Sócios</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[ 
                {
                  nome: "Marcelo Savazi",
                  cargo: "Co‑Founder • Operações & Produto",
                  bio: "Experiência em gestão de frotas e operações, foco em confiabilidade e eficiência do ciclo de vida dos ativos.",
                  fotoAlt: "Foto de Marcelo Savazi",
                },
                {
                  nome: "Luiz Guilherme",
                  cargo: "Co‑Founder • Tecnologia & Estratégia",
                  bio: "Engenharia, telemetria e IA aplicada ao campo. Conecta dados ao resultado do negócio.",
                  fotoAlt: "Foto de Luiz Guilherme",
                }
              ].map((p) => (
                <Card key={p.nome} className="bg-white border border-neutral-200 shadow-sm dark:bg-neutral-950 dark:border-neutral-900">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {/* Placeholder de foto minimalista */}
                      <div aria-label={p.fotoAlt} className="h-16 w-16 rounded-full bg-neutral-100 grid place-items-center text-neutral-500 text-lg font-medium dark:bg-neutral-900 dark:text-neutral-400">
                        {p.nome.split(" ").map(n=>n[0]).slice(0,2)}
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{p.nome}</div>
                        <div className="text-neutral-600 text-sm dark:text-neutral-400">{p.cargo}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-neutral-800 leading-relaxed dark:text-neutral-200">{p.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="border-t border-neutral-200 dark:border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">Vamos conversar</h2>
                <p className="text-neutral-800 leading-relaxed mb-6 dark:text-neutral-200">
                  Conte rapidamente sobre sua operação e receba um retorno com demonstração e próximos passos.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>Resposta em até 1 dia útil</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>Implantação guiada</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>Integrações sob medida</li>
                </ul>
              </div>

              <Card className="bg-white border border-neutral-200 shadow-sm dark:bg-neutral-950 dark:border-neutral-900">
                <CardContent className="p-6">
                  <form className="space-y-4" onSubmit={(e)=> e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-3">
                      <Input placeholder="Seu nome" required className="bg-white border-neutral-300 dark:bg-neutral-950 dark:border-neutral-800"/>
                      <Input type="email" placeholder="Seu e‑mail" required className="bg-white border-neutral-300 dark:bg-neutral-950 dark:border-neutral-800"/>
                    </div>
                    <Input placeholder="Empresa / Frota" className="bg-white border-neutral-300 dark:bg-neutral-950 dark:border-neutral-800"/>
                    <Textarea placeholder="Descreva brevemente a necessidade" className="min-h-[120px] bg-white border-neutral-300 dark:bg-neutral-950 dark:border-neutral-800"/>
                    <Button className="gap-2 w-full md:w-auto">
                      Enviar <Send className="h-4 w-4" />
                    </Button>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Ao enviar, você concorda com nosso contato para fins comerciais.</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="border-t border-neutral-200 dark:border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500" />
              <span>Cyberfrota</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200">Termos</a>
              <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200">Privacidade</a>
              <span className="text-neutral-400">© {new Date().getFullYear()} Cyberfrota</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
