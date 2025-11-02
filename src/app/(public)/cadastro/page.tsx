import { GraduationCap } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-5xl md:max-w-4xl overflow-hidden shadow-xl border-0 flex flex-col md:flex-row px-6">
        {/* Lado esquerdo (branding) */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-primary text-white p-10 relative rounded-lg">
          <GraduationCap className="size-32 mb-6 text-white drop-shadow-lg" />
          <h1 className="text-4xl font-bold mb-2 text-center">
            Crie sua conta
          </h1>
          <p className="text-orange-100 text-center text-sm max-w-xs">
            Registre-se e comece a gerenciar suas notas de forma prática e
            intuitiva.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500/30" />
        </div>

        {/* Lado direito (formulário) */}
        <div className="flex-1 bg-white p-8 sm:p-10 flex flex-col justify-center">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-semibold text-center text-orange-700">
              Crie sua conta ✨
            </CardTitle>
            <p className="text-center text-gray-500 text-sm mt-1">
              Preencha os campos abaixo para se cadastrar
            </p>
          </CardHeader>

          <CardContent className="p-0">
            <form className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" type="text" placeholder="Seu nome" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>

              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                type="submit"
              >
                Cadastrar
              </Button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  className="text-orange-600 hover:underline font-medium"
                >
                  Faça login
                </Link>
              </p>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
