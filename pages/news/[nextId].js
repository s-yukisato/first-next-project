import { useRouter } from 'next/router';


export default function Home() {
    const router = useRouter();

    const nextId = router.query.nextId;
    console.log(nextId);

    return (
      <h1>The Home Page</h1>
    )
  }
  