import { useRouter } from 'next/router';

//square brackets at beginning of filename means dynamic filename

export default function NewsPage() {
    const router = useRouter();
    
   const newsId = router.query.newsId;

    return <h1>{newsId}</h1>
}