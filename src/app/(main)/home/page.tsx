'use client';

import FloatingTab, { ButtonItem } from '@/app/components/shared/FloatingTab';
import SectionHeader from '@/app/components/shared/SectionHeader';
import { useState } from 'react';
import styled from 'styled-components';
import ProfileCarousel from './ProfileCarousel';
import CommonCard from '@/app/components/shared/CommonCard';
import { CommunityForumCardProps } from '@/app/components/shared/CommunityForumCard';
import CommunityCarousel from './CommunityCarousel';

const Greeting = styled.h1`
  font-weight: 200; /* extra-thin */
  font-size: 20px;
  margin: 8px;
`;


export default function Home() {
    const name = 'Rishav';
    const [activeButton, setActiveButton] = useState('create');

    const buttons: ButtonItem[] = [
        {
            name: 'Create Request',
            id: 'create',
            onClick: () => setActiveButton('create'),
            variant: 'primary',
        },
        {
            name: 'Community',
            id: 'community',
            onClick: () => setActiveButton('community'),
            variant: 'default',
        },
        {
            name: 'Calendar',
            id: 'calendar',
            onClick: () => setActiveButton('calendar'),
            variant: 'default',
        },
        {
            name: 'Urgent Care',
            id: 'urgent',
            onClick: () => setActiveButton('urgent'),
            variant: 'danger',
        },
    ];

    const featuredProfiles = [
        {
            name: "Rishav",
            rating: 4.5,
            description: "Loves Dogs and Turtles",
            distance: "0.8",
            verified: true
        },
        {
            name: "Sarah",
            rating: 4.8,
            description: "Professional Pet Sitter",
            distance: "1.2",
            verified: true
        },
        {
            name: "Mike",
            rating: 4.3,
            description: "Dog Walker & Trainer",
            distance: "1.5"
        },
        {
            name: "Emma",
            rating: 4.7,
            description: "Cat Specialist",
            distance: "2.0",
            verified: true
        },
        {
            name: "John",
            rating: 4.4,
            description: "Pet Care Expert",
            distance: "2.3"
        }
    ];

    const bookings = [
        {
            title: "Daycare for Bruno",
            description: "Daycare for Bruno, a 5-month-old Golden Retriever",
            status: "Ongoing",
            timeInfo: "until 6 pm today",
            button1Text: "Chat",
            button2Text: "View Details"
        },
        {
            title: "Daycare for Bruno",
            description: "Daycare for Bruno, a 5-month-old Golden Retriever",
            status: "Ongoing",
            timeInfo: "until 6 pm today",
            button1Text: "Chat",
            button2Text: "View Details"
        }
    ];

    const communityPosts: CommunityForumCardProps[] = [
        {
            title: "Local Pet Meetup At Agara Lake",
            type: "event",
            details: {
                location: "Location",
                date: "24th April 2025 - 7pm to 10pm"
            },
            engagement: {
                likes: 1400,
                comments: 400
            },
            username: "_username_"
        },
        {
            title: "Cat Missing .. Urgent Help Needed",
            type: "urgent",
            details: {
                phone: "Ph: +91 9838899110"
            },
            engagement: {
                likes: 1400,
                comments: 400
            },
            username: "_username_"
        },
    ]


    return (
        <div>
            <Greeting>Hello, {name}</Greeting>
            <FloatingTab buttons={buttons} activeButtonId={activeButton} />
            <SectionHeader title="Featured Buddies Near you" viewAllHref="#" showViewAll={true} />
            <ProfileCarousel profiles={featuredProfiles} />

            <SectionHeader title="Bookings" viewAllHref="#" showViewAll={true} />
            {bookings.map((booking, index) => (
                <CommonCard
                    key={index}
                    title={booking.title}
                    description={booking.description}
                    status={booking.status}
                    timeInfo={booking.timeInfo}
                    button1Text={booking.button1Text}
                    button2Text={booking.button2Text}
                />
            ))}

            <SectionHeader title="Community Posts" viewAllHref="#" showViewAll={true} />
            <CommunityCarousel posts={communityPosts} />
        </div>
    );
}
