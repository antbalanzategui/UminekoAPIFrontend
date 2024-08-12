import Portraits from '@/app/examples/portraits/Portraits';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images?type=por`, {
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
  const portraits = await getData();

  return (
    <main>
      <Portraits portraits={portraits} />
    </main>
  );
}
