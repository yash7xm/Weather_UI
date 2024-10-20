import { Calendar1Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

type CardProps = React.ComponentProps<typeof Card>;

export function WeatherSummary({ className, ...props }: CardProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const formattedDate = date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : "Select a date";

    let { city } = useParams();

    if (!city) {
        city = "Delhi";
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Format the date correctly in local time for the API call
                const dateString = date
                    ? `${date.getFullYear()}-${(date.getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}-${date
                          .getDate()
                          .toString()
                          .padStart(2, "0")}`
                    : "";

                const res = await fetch(
                    `${backendUrl}/api/weather/summary?city=${city}&date=${dateString}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await res.json();
                setData(result);
            } catch (error: any) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city, date]);

    return (
        <div className="absolute left-[60%]">
            {loading ? (
                <p>...loading</p>
            ) : (
                <Card className={cn("w-[380px]", className)} {...props}>
                    <CardHeader>
                        <CardTitle>Summary</CardTitle>
                        <CardDescription>
                            Today's Weather Summary
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div>
                            <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Min temp of the day
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {data.minimum_temperature.Float64.toFixed(
                                            2
                                        ) ?? "N/A"}{" "}
                                        °C
                                    </p>
                                </div>
                            </div>
                            <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Max temp of the day
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {data.maximum_temperature.Float64.toFixed(
                                            2
                                        ) ?? "N/A"}{" "}
                                        °C
                                    </p>
                                </div>
                            </div>
                            <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Average temp of the day
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {data.average_temperature.Float64.toFixed(
                                            2
                                        ) ?? "N/A"}{" "}
                                        °C
                                    </p>
                                </div>
                            </div>
                            <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Dominant weather condition
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {data.dominant_condition.String ??
                                            "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="w-full flex justify-between items-center">
                            <div>Pick a date</div>
                            <div>{formattedDate}</div>
                            <Popover>
                                <PopoverTrigger>
                                    <Calendar1Icon className="cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
