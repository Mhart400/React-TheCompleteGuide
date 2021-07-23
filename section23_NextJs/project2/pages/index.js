import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMYLIST = [
  {
    id: "m1",
    title: " A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Albert_dock_at_night.jpg/520px-Albert_dock_at_night.jpg",
    address: "some address 1233232323",
    description: "cslkndflkenf klnef lkwen flwe",
  },
  {
    id: "m2",
    title: " A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Albert_dock_at_night.jpg/520px-Albert_dock_at_night.jpg",
    address: "some address 1233232323",
    description: "cslkndflkenf klnef lkwen flwe",
  },
  {
    id: "m3",
    title: " A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Albert_dock_at_night.jpg/520px-Albert_dock_at_night.jpg",
    address: "some address 1233232323",
    description: "cslkndflkenf klnef lkwen flwe",
  },
];

export default function HomePage(props) {

  return (
    
      <MeetupList meetups={props.meetups} />
    
  );
}

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMYLIST,
    },
    revalidate: 10
  };
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMYLIST,
//     },
//   }
// }

