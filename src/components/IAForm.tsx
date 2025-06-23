import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const IAForm: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Enviar dados para o Webhook do Make
      await fetch('https://hook.us2.make.com/vub82jji8v53lf62ktndxyqm76hfwryx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          whatsapp: form.whatsapp
        })
      });

      setLoading(false);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve.",
      });
      setForm({ nome: "", email: "", whatsapp: "" });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    }
  }

  return (
    <form
      className="bg-background/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full max-w-lg mx-auto border border-border flex flex-col gap-5"
      style={{ boxShadow: "0 0 64px 0 rgba(40,130,255,0.13)" }}
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold text-center mb-2 text-primary">Solicite uma demonstração gratuita</h3>
      <div className="grid gap-4">
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="text-lg"
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="text-lg"
        />
        <Input
          type="tel"
          name="whatsapp"
          placeholder="Telefone WhatsApp"
          value={form.whatsapp}
          onChange={handleChange}
          required
          className="text-lg"
        />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-md shadow-blue-400/30"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Solicitar demonstração"}
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-2">
        * Nunca enviaremos spam.
      </p>
    </form>
  );
};

export default IAForm;
