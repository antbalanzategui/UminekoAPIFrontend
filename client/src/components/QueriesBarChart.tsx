"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { useTheme } from "next-themes"

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

// Example data for response sizes in bytes
const chartData = [
  { size: "0-10K", count: 45 },
  { size: "10K-20K", count: 100 },
  { size: "20K-30K", count: 75 },
  { size: "30K-40K", count: 60 },
  { size: "40K-50K", count: 30 },
  { size: "50K+", count: 20 },
]

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


export function QueriesBarChart() {
  const { resolvedTheme } = useTheme();
  return (
    <Card className="bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-700">
      <CardHeader>
        <CardTitle>Response Size Distribution</CardTitle>
        <CardDescription className="text-stone-600 dark:text-stone-300">Histogram of response sizes in bytes</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 30,
            }}
          >
            <CartesianGrid vertical={false} stroke={resolvedTheme === 'dark' ? "#44403c" : "#e7e5e4"}/>
            <XAxis
              dataKey="size"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={7}
            />
            <YAxis />
            <ChartTooltip

              cursor={false}
              content={<ChartTooltipContent className="bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-700" hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-stone-600 dark:text-stone-300">
          Showing response size distribution for the last month
        </div>
      </CardFooter>
    </Card>
  )
}
