'use client'

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHandle = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandle} />;
}
