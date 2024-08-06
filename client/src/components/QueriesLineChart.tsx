"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Fake data for the last 7 days
const chartData = [
  { day: "Mon", characters: 30, episodes: 20, images: 50, information: 40, relations: 10, soundtrack: 25, statements: 15, trivia: 35 },
  { day: "Tue", characters: 25, episodes: 18, images: 45, information: 38, relations: 12, soundtrack: 22, statements: 17, trivia: 30 },
  { day: "Wed", characters: 35, episodes: 22, images: 55, information: 42, relations: 14, soundtrack: 28, statements: 19, trivia: 40 },
  { day: "Thu", characters: 40, episodes: 25, images: 60, information: 45, relations: 16, soundtrack: 30, statements: 20, trivia: 45 },
  { day: "Fri", characters: 45, episodes: 30, images: 65, information: 50, relations: 18, soundtrack: 35, statements: 25, trivia: 50 },
  { day: "Sat", characters: 50, episodes: 35, images: 70, information: 55, relations: 20, soundtrack: 40, statements: 30, trivia: 55 },
  { day: "Sun", characters: 55, episodes: 40, images: 75, information: 60, relations: 22, soundtrack: 45, statements: 35, trivia: 60 },
]

const chartConfig = {
  characters: {
    label: "Characters",
    color: "hsl(var(--chart-1))",
  },
  episodes: {
    label: "Episodes",
    color: "hsl(var(--chart-2))",
  },
  images: {
    label: "Images",
    color: "hsl(var(--chart-3))",
  },
  information: {
    label: "Information",
    color: "hsl(var(--chart-4))",
  },
  relations: {
    label: "Relations",
    color: "hsl(var(--chart-5))",
  },
  soundtrack: {
    label: "Soundtrack",
    color: "hsl(var(--chart-6))",
  },
  statements: {
    label: "Statements",
    color: "hsl(var(--chart-7))",
  },
  trivia: {
    label: "Trivia",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig

export function QueriesLineChart() {
  return (
    <Card className="bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-700">
      <CardHeader>
        <CardTitle>Queries Over Time</CardTitle>
        <CardDescription>Queries per day for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="characters"
              type="monotone"
              stroke="var(--color-characters)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="episodes"
              type="monotone"
              stroke="var(--color-episodes)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="images"
              type="monotone"
              stroke="var(--color-images)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="information"
              type="monotone"
              stroke="var(--color-information)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="relations"
              type="monotone"
              stroke="var(--color-relations)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="soundtrack"
              type="monotone"
              stroke="var(--color-soundtrack)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="statements"
              type="monotone"
              stroke="var(--color-statements)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="trivia"
              type="monotone"
              stroke="var(--color-trivia)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing query distribution for the last 7 days
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
