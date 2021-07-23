import { useRouter } from "next/router"
import MeetupDetail from "../../components/meetups/MeetupDetail"

export default function MeetupDetails() {
    return (
        <>
            <MeetupDetail 
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Albert_dock_at_night.jpg/520px-Albert_dock_at_night.jpg'
                title="A first meetup"
                address="Some street, some city"
                description="the meetup description" 
            />
            
        </>
        )
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {params: {
                meetupId: 'm1',
            }},
            {params: {
                meetupId: 'm2',
            }},
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Albert_dock_at_night.jpg/520px-Albert_dock_at_night.jpg',
                title: "A first meetup",
                address: "Some street, some city",
                description: "the meetup description",
            } 
        }
    }
}
