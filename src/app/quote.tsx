"use client";

export interface QuoteData {
    quote: string;
    author: string;
    profession: string;
    topics: string[];
}

export function Quote({ quote, author }: QuoteData) {
    return (
        <div className="p-2">
            <h1 className="mb-6 text-4xl lg:text-6xl font-semibold max-w-6xl leading-11 lg:leading-17">
                {quote}
            </h1>
            <p className="text-2xl lg:text-3xl">&mdash; {author}</p>
        </div>
    );
}
