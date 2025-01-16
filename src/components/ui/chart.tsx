import React from "react";
import { Line } from "react-chartjs-2";
import { cn } from "@/lib/utils";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartProps {
    className?: string;
    data: ChartData<"line">;
    options?: ChartOptions<"line">;
}

export function Chart({ className, data, options }: ChartProps) {
    return (
        <div className={cn("w-full h-[350px]", className)}>
            <Line data={data} options={options} />
        </div>
    );
}
