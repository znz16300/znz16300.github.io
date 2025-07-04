
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

interface TrainingItem {
  id: string
  "Працівник, який пройшов курсову підготовку": string
  "Назва курсів, семінару, вебінару тощо": string
  "Кількість годин": string
  "З них з інклюзії": string
  "З них з надання психологічної підтримки учасникам освітнього процесу": string
  "Тип документа": string
  "Номер документа (якщо номера немає, вкажіть \"бн\" без лапок)": string
  "Дата видачі документа": string
}

interface TrainingTableWithTooltipProps {
  visibleItems: TrainingItem[]
  selectedItems?: string[]
  onSelectionChange?: (selectedIds: string[]) => void
}

export function TrainingTableWithTooltip({ 
  visibleItems, 
  selectedItems = [], 
  onSelectionChange 
}: TrainingTableWithTooltipProps) {
  const [internalSelected, setInternalSelected] = useState<string[]>(selectedItems)
  
  const handleItemToggle = (itemId: string, checked: boolean) => {
    const newSelected = checked 
      ? [...internalSelected, itemId]
      : internalSelected.filter(id => id !== itemId)
    
    setInternalSelected(newSelected)
    onSelectionChange?.(newSelected)
  }

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked ? visibleItems.map(item => item.id) : []
    setInternalSelected(newSelected)
    onSelectionChange?.(newSelected)
  }

  const isAllSelected = visibleItems.length > 0 && internalSelected.length === visibleItems.length
  const isPartiallySelected = internalSelected.length > 0 && internalSelected.length < visibleItems.length

  return (
    <TooltipProvider>
      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={isAllSelected || isPartiallySelected}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
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
              <Tooltip key={item.id || index}>
                <TooltipTrigger asChild>
                  <TableRow className="hover:bg-muted/50 cursor-pointer">
                    <TableCell>
                      <Checkbox
                        checked={internalSelected.includes(item.id)}
                        onCheckedChange={(checked) => handleItemToggle(item.id, checked as boolean)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
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
                </TooltipTrigger>
                <TooltipContent className="max-w-sm p-4">
                  <div className="space-y-2 text-sm">
                    <div><strong>Працівник:</strong> {item["Працівник, який пройшов курсову підготовку"]}</div>
                    <div><strong>Курс:</strong> {item["Назва курсів, семінару, вебінару тощо"]}</div>
                    <div><strong>Загальна кількість годин:</strong> {item["Кількість годин"]}</div>
                    <div><strong>Години з інклюзії:</strong> {item["З них з інклюзії"]}</div>
                    <div><strong>Документ:</strong> {item["Тип документа"]} №{item["Номер документа (якщо номера немає, вкажіть \"бн\" без лапок)"]}</div>
                    <div><strong>Дата видачі:</strong> {item["Дата видачі документа"]}</div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  )
}
