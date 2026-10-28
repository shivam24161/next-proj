type Merchant = {
    id: string;
    name: string;
    email: string;
    status: "Active" | "Inactive";
};

const merchants: Merchant[] = [
    {
        id: "101",
        name: "ABC Store",
        email: "abc@example.com",
        status: "Active",
    },
    {
        id: "102",
        name: "XYZ Mart",
        email: "xyz@example.com",
        status: "Inactive",
    },
    {
        id: "103",
        name: "Global Shop",
        email: "global@example.com",
        status: "Active",
    },
];

type Props = {
    params: Promise<{ id: string }>;
};

export default async function MerchantDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    const merchant = merchants.find(
        (item) => item.id === id
    );

    if (!merchant) {
        return (
            <div>
                <h1 className="text-2xl font-bold">
                    Merchant not found
                </h1>
                <p className="mt-2">
                    No merchant exists with ID {id}.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-xl space-y-4">
            <h1 className="text-3xl font-bold">
                {merchant.name}
            </h1>

            <div className="rounded-lg border p-5">
                <p>
                    <strong>ID:</strong> {merchant.id}
                </p>

                <p className="mt-3">
                    <strong>Email:</strong> {merchant.email}
                </p>

                <p className="mt-3">
                    <strong>Status:</strong> {merchant.status}
                </p>
            </div>
        </div>
    );
}