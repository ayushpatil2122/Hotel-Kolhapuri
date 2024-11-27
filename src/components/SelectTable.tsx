'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'


const tables = [
  { id: 1, number: 1, capacity: 2 },
  { id: 2, number: 2, capacity: 4 },
  { id: 3, number: 3, capacity: 6 },
  { id: 4, number: 4, capacity: 2 },
  { id: 5, number: 5, capacity: 8 },
  { id: 6, number: 6, capacity: 4 },
  { id: 7, number: 7, capacity: 2 },
  { id: 8, number: 8, capacity: 6 },
]

export default function SelectTable() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null)

  console.log(selectedTable);

  const router = useRouter();

  const handleTableSelect = (tableId: number) => {
    setSelectedTable(tableId === selectedTable ? null : tableId)
  }

  const handleConfirm = () => {
    if (selectedTable) {
      router.push(`/order/table/${selectedTable}`)
    } else {
      alert('Please select a table first')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Select a Table</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {tables.map((table) => (
          <Card 
            key={table.id} 
            className={`cursor-pointer transition-all ${
              selectedTable === table.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleTableSelect(table.id)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Table {table.number}</h2>
                <p className="text-sm text-gray-500">Capacity: {table.capacity}</p>
              </div>
              {selectedTable === table.id && (
                <CheckCircle className="text-primary h-6 w-6" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Button 
        onClick={handleConfirm} 
        className="w-full"
        disabled={!selectedTable}
      >
        Confirm Selection
      </Button>
    </div>
  )
}