
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TrainingItem {
  "Працівник, який пройшов курсову підготовку": string
  "Назва курсів, семінару, вебінару тощо": string
  "Кількість годин": string
  "З них з інклюзії": string
  "З них з надання психологічної підтримки учасникам освітнього процесу": string
  "Тип документа": string
  "Номер документа (якщо номера немає, вкажіть \"бн\" без лапок)": string
  "Дата видачі документа": string
}

interface TrainingTableProps {
  visibleItems: TrainingItem[]
}

export function TrainingTable({ visibleItems }: TrainingTableProps) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">Працівник</TableHead>
            <TableHead className="min-w-[250px]">Назва курсів</TableHead>
            <TableHead className="w-[100px]">Години</TableHead>
            <TableHead className="w-[100px]">Інклюзія</TableHead>
            <TableHead className="w-[120px]">Психологічна підтримка</TableHead>
            <TableHead className="w-[120px]">Тип документа</TableHead>
            <TableHead className="min-w-[200px]">Номер документа</TableHead>
            <TableHead className="w-[120px]">Дата видачі</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {item["Працівник, який пройшов курсову підготовку"]}
              </TableCell>
              <TableCell>
                {item["Назва курсів, семінару, вебінару тощо"]}
              </TableCell>
              <TableCell className="text-center">
                {item["Кількість годин"]}
              </TableCell>
              <TableCell className="text-center">
                {item["З них з інклюзії"]}
              </TableCell>
              <TableCell className="text-center">
                {item["З них з надання психологічної підтримки учасникам освітнього процесу"]}
              </TableCell>
              <TableCell>
                {item["Тип документа"]}
              </TableCell>
              <TableCell>
                {item["Номер документа (якщо номера немає, вкажіть \"бн\" без лапок)"]}
              </TableCell>
              <TableCell>
                {item["Дата видачі документа"]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
