'use client';

import { useParams, useSearchParams } from "next/navigation";

export default function ProductPage(props: ProductPageProps){

    const params = useParams();
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    console.log(id)

    return (
        <h1>product page</h1>
    )
}