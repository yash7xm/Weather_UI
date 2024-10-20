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
import { useState } from "react";

const notifications = [
    {
        title: "Min temp of the day",
        description: "22 °C",
    },
    {
        title: "Max temp of the day",
        description: "25 °C",
    },
    {
        title: "Average temp of the day",
        description: "23 °C",
    },
    {
        title: "Dominant weather condition",
        description: "Rain",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

export function WeatherSummary({ className, ...props }: CardProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const formattedDate = date
        ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        : "Select a date";

    return (
        <div className="absolute left-[60%]">
            <Card className={cn("w-[380px]", className)} {...props}>
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                    <CardDescription>Today's Weather Summary</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div>
                        {notifications.map((notification, index) => (
                            <div
                                key={index}
                                className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
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
        </div>
    );
}
