"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

const queryTypes = [
  { type: "characters", queries: 300, fill: "var(--color-characters)" },
  { type: "episodes", queries: 250, fill: "var(--color-episodes)" },
  { type: "images", queries: 200, fill: "var(--color-images)" },
  { type: "information", queries: 150, fill: "var(--color-information)" },
  { type: "relations", queries: 100, fill: "var(--color-relations)" },
  { type: "soundtrack", queries: 80, fill: "var(--color-soundtrack)" },
  { type: "statements", queries: 60, fill: "var(--color-statements)" },
  { type: "trivia", queries: 120, fill: "var(--color-trivia)" },
]

const chartConfig = {
  queries: {
    label: "Queries",
  },
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

export function QueriesPieChart() {
  return (
    <Card className="flex flex-col bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-700">
      <CardHeader className="items-center pb-0">
        <CardTitle>Query Types Pie Chart</CardTitle>
        <CardDescription className="text-stone-600 dark:text-stone-300">Last Month</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={queryTypes} dataKey="queries" nameKey="type" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-stone-600 dark:text-stone-300">
          Showing total queries for the last month
        </div>
      </CardFooter>
    </Card>
  )
}
