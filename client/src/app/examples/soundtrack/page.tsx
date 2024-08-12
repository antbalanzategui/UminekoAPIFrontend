import Soundtrack from '@/app/examples/soundtrack/Soundtrack';


async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/soundtrack?random=20`, {
        headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY as string, 
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function Page() {
    const soundtracks = await getData();
    return (
        <main>
         <Soundtrack soundtracks={soundtracks} />
        </main>
    )
}