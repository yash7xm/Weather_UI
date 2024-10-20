import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const notifications = [
    {
        title: "Min temp of the day",
        description: "22 C",
    },
    {
        title: "Max temp of the day",
        description: "25 C",
    },
    {
        title: "Average temp of the day",
        description: "23 C",
    },
    {
        title: "Dominant weather condition",
        description: "Rain",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

export function WeatherSummary({ className, ...props }: CardProps) {
    return (
        <div className="absolute left-[60%]">
            <Card className={cn("w-[380px]", className)} {...props}>
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                    <CardDescription>
                        Today's Weather Summary
                    </CardDescription>
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
                    <Button className="w-full">
                        <CheckIcon /> Mark all as read
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
