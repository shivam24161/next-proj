"use client";

import { useRouter } from "next/navigation";

export default function BackToMerchants() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/merchants")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
            Back to Merchants
        </button>
    );
}