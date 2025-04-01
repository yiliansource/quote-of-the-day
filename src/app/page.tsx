"use client";

import { useEffect, useState } from "react";
import { cyrb53 } from "./hash";
import { Quote, QuoteData } from "./quote";
import { quotes } from "./quotes";
import Link from "next/link";

export default function Home() {
    const [qotd, setQotd] = useState<QuoteData | null>(null);

    useEffect(() => {
        const date = new Date();
        const timestamp = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ]
            .map((s) => String(s).padStart(2, "0"))
            .join("");
        const seed = cyrb53("qotd-" + timestamp);

        setQotd(quotes[seed % quotes.length]);
    }, []);

    return (
        <div className="flex flex-col font-(family-name:--font-geist-sans) w-dvw h-dvh">
            <main className="flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full *:m-auto">
                {qotd && <Quote {...qotd} />}
            </main>
            <footer className="flex flex-row gap-2 m-[auto_8px_4px_auto] text-sm text-neutral-600">
                <span>
                    <Link href="https://hornik.dev" target="_blank">
                        made by Ian Hornik
                    </Link>
                </span>
                <span className="text-neutral-400 select-none">&bull;</span>
                <span>
                    <Link
                        href="https://github.com/yiliansource/quote-of-the-day"
                        target="_blank"
                    >
                        view on GitHub
                    </Link>
                </span>
            </footer>
        </div>
    );
}
