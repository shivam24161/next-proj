import Link from "next/link";

const merchants = [
    { id: "101", name: "ABC Store" },
    { id: "102", name: "XYZ Mart" },
    { id: "103", name: "Global Shop" },
];

export default function MerchantsPage() {
    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">
                Merchants
            </h1>

            <div className="space-y-3">
                {merchants.map((merchant) => (
                    <div
                        key={merchant.id}
                        className="rounded-lg border p-4"
                    >
                        <h2 className="font-semibold">
                            {merchant.name}
                        </h2>

                        <Link
                            href={`/merchants/${merchant.id}`}
                            className="mt-2 inline-block text-blue-600"
                        >
                            View details →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}