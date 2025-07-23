import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Orçamento solicitado!",
      description: "Entraremos em contato em breve.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
          Solicite seu Orçamento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Data do Evento</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="event">Tipo de Evento</Label>
            <Input
              id="event"
              name="event"
              placeholder="Ex: Festa de aniversário, casamento, confraternização..."
              value={formData.event}
              onChange={handleChange}
              required
              className="bg-background/50 border-primary/30 focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Observações</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Nos conte mais detalhes sobre seu evento..."
              value={formData.message}
              onChange={handleChange}
              className="bg-background/50 border-primary/30 focus:border-primary min-h-24"
            />
          </div>
          <Button type="submit" variant="hero" className="w-full">
            Enviar Solicitação
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}