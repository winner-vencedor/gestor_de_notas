import { Bell, BookOpenText, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-full gap-6 px-4 md:px-8 py-5 bg-lieaar-to-b from-orange-50/30 to-white">
      {/* 🔍 Topbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            Painel Central
          </h1>
          <p className="text-sm text-gray-600">
            Visão geral do seu desempenho acadêmico
          </p>
        </div>

        <div className="flex gap-2 items-center">
          {/* Barra de pesquisa */}
          <div className="flex items-center group gap-2 border border-gray-300/70 bg-white px-3 py-2 rounded-xl shadow-sm focus-within:border-orange-600 w-48 md:w-64 transition">
            <Search className="text-gray-500 size-5 group-focus-within:text-orange-600 transition" />
            <input
              type="text"
              placeholder="Pesquisar..."
              className="outline-none text-sm w-full placeholder:text-gray-500/70"
            />
          </div>

          {/* Notificação */}
          <Button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-100 transition">
            <Bell className="text-gray-600 hover:text-orange-600 size-5 transition" />
          </Button>
        </div>
      </div>

      {/* 🧮 Cards de resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <StatCard
          title="Instituições"
          description="Instituições registradas"
          value="3"
          icon={
            <BookOpenText className="text-orange-600 size-5 absolute right-6" />
          }
        />
        <StatCard
          title="Médias gerais"
          description="Média global do aluno"
          value="8.7"
          icon={
            <TrendingUp className="text-orange-600 size-5 absolute right-6" />
          }
        />
        <StatCard
          title="Avaliações"
          description="Notas lançadas recentemente"
          value="12"
          icon={
            <TrendingUp className="text-orange-600 size-5 absolute right-6" />
          }
        />
      </div>

      {/* 📋 Tabela de notas */}
      <Card className="border-orange-100 shadow-sm hover:shadow-md transition">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Últimas notas lançadas</span>
            <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
              Atualizado
            </span>
          </CardTitle>
          <CardDescription>Suas avaliações mais recentes</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableCaption>
              Disciplinas que foram recentemente editadas
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Instituição</TableHead>
                <TableHead>Trimestre</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "123",
                  inst: "IPPPF",
                  trim: "1º",
                  disc: "Matemática",
                  data: "2025-01-20",
                },
                {
                  id: "234",
                  inst: "IPPPF",
                  trim: "2º",
                  disc: "Português",
                  data: "2025-02-15",
                },
                {
                  id: "345",
                  inst: "IPPPF",
                  trim: "3º",
                  disc: "História",
                  data: "2025-03-10",
                },
                {
                  id: "456",
                  inst: "IPPPF",
                  trim: "3º",
                  disc: "TLP",
                  data: "2025-03-10",
                },
              ].map((nota) => (
                <TableRow
                  key={nota.id}
                  className="hover:bg-orange-50/60 transition-colors"
                >
                  <TableCell className="font-medium">{nota.inst}</TableCell>
                  <TableCell>{nota.trim}</TableCell>
                  <TableCell>{nota.disc}</TableCell>
                  <TableCell>{nota.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  title,
  description,
  value,
  icon,
}: {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200 transition relative bg-white">
      <CardHeader>
        <CardTitle className="text-gray-700">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="min-w-52 -mt-5">
          <div className="flex items-baseline gap-1.5">
            <h1 className="text-3xl font-bold text-orange-600">{value}</h1>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
