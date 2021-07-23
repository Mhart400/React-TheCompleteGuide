import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    
    const addMeetupHanlder = (meetupData) => {
        console.log(meetupData)
    };
    
    return (
        <NewMeetupForm onAddMeetup={addMeetupHanlder} />
    )
}