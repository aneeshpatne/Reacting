"use client";

import * as React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Ensure this path is correct

const data = [
  {
    name: "Easy",
    value: 182,
    lightColor: "hsl(120, 70%, 40%)",
    darkColor: "hsl(120, 70%, 60%)",
  },
  {
    name: "Medium",
    value: 284,
    lightColor: "hsl(45, 100%, 50%)",
    darkColor: "hsl(45, 100%, 60%)",
  },
  {
    name: "Hard",
    value: 22,
    lightColor: "hsl(0, 100%, 50%)",
    darkColor: "hsl(0, 100%, 60%)",
  },
];

export function GraphComponent() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const totalValue = React.useMemo(
    () => data.reduce((sum, entry) => sum + entry.value, 0),
    []
  );
  const { theme } = useTheme();

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const getColor = (item) => {
    return theme === "dark" ? item.darkColor : item.lightColor;
  };

  return (
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">
          Difficulty Distribution
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Easy, Medium, and Hard problems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              className="transition-all duration-300"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(entry)}
                  stroke={activeIndex === index ? "hsl(210, 50%, 70%)" : "transparent"}
                  strokeWidth={activeIndex === index ? 4 : 0}
                  cursor="pointer"
                  className="transition-stroke duration-300"
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-900 dark:fill-gray-100"
            >
              <tspan x="50%" dy="-0.5em" fontSize="20" fontWeight="bold">
                {activeIndex !== null ? data[activeIndex].value : totalValue}
              </tspan>
              <tspan
                x="50%"
                dy="1.5em"
                fontSize="14"
                className="fill-gray-600 dark:fill-gray-300"
              >
                {activeIndex !== null ? data[activeIndex].name : "Total"}
              </tspan>
            </text>
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div
                className="w-4 h-4 rounded-full mb-1"
                style={{ backgroundColor: getColor(item) }}
              ></div>
              <div className="font-medium text-gray-800 dark:text-gray-200">
                {item.name}
              </div>
              <div className="font-bold text-gray-900 dark:text-gray-100">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
