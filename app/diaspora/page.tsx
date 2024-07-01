"use client";

import React, { useState } from "react";
import { LoginPage } from "@/components/diaspora/LoginPage";
import { RegionSelection } from "@/components/diaspora/RegionSelection";
import { LocationSelection } from "@/components/diaspora/LocationSelection";
import { Layout } from "@/components/diaspora/Layout";
import { Section } from "@/components/diaspora/Section";
import { Card } from "@/components/diaspora/Card";
import { CommunityUpdates } from "@/components/diaspora/CommunityUpdates";
import { Regions,Country,Region} from '@/types/diasporaTypes'
// Type definitions

const communityUpdates = [
  {
    id: 1,
    title: "Virtual Kenyan Cultural Night",
    content:
      "Join us for a night of Kenyan music, dance, and storytelling. All are welcome!",
    date: "2023-07-15",
  },
  {
    id: 2,
    title: "New Job Postings for Kenyans in Tech",
    content:
      "Check out the latest job opportunities for Kenyan professionals in the tech industry.",
    date: "2023-07-10",
  },
  {
    id: 3,
    title: "Upcoming Webinar: Investing in Kenya",
    content:
      "Learn about investment opportunities back home with our panel of expert speakers.",
    date: "2023-07-20",
  },
];

// Regions and countries data


const KenyanDiasporaApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Country | null>(
    null
  );
  const [interactionMode, setInteractionMode] = useState<
    "local" | "global" | null
  >(null);

  const handleLogin = (user: string) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleSelectRegion = (region: Region) => {
    setSelectedRegion(region);
  };

  const handleSelectLocation = (location: Country) => {
    setSelectedLocation(location);
    setInteractionMode("local");
  };

  const renderContent = (section: string) => {
    switch (section) {
      case "Home":
        return (
          <>
          <Section title="Welcome to Kenyan Diaspora Community">
            <p className="text-gray-300 mb-4">
              Connect with fellow Kenyans abroad, share experiences, and stay
              connected to your roots.
            </p>
            <Card
              title="Get Started"
              content="Explore our community features, find local events, and connect with Kenyans in your area."
            />
            <CommunityUpdates updates={communityUpdates} />
          </Section>
          
          </>
        );
      case "CommunityUpdates":
        return (
          <Section title="CommunityUpdates">
            <CommunityUpdates updates={communityUpdates} />
          </Section>
        );
      case "Community":
        return (
          <Section title="Community">
            <Card
              title="Local Community"
              content={`Connect with Kenyans in ${selectedLocation}. Join local events and meetups.`}
            />
            <Card
              title="Global Community"
              content="Interact with Kenyans worldwide. Share experiences and build global connections."
            />
          </Section>
        );
      case "Resources":
        return (
          <Section title="Resources">
            <Card
              title="Job Board"
              content="Explore job opportunities posted by fellow Kenyans and diaspora-friendly companies."
            />
            <Card
              title="Housing Assistance"
              content="Find information on affordable housing options and connect with Kenyan realtors in your area."
            />
          </Section>
        );
      case "News":
        return (
          <Section title="Latest News">
            <Card
              title="Diaspora Investment Conference"
              content="The annual Kenyan Diaspora Investment Conference will be held virtually next month. Register now to participate!"
            />
            <Card
              title="New Remittance Service Launched"
              content="A new mobile app for easy and affordable money transfers to Kenya is now available. Check out our review."
            />
          </Section>
        );
      case "Culture":
        return (
          <Section title="Kenyan Culture">
            <Card
              title="Language Corner"
              content="Learn a new Swahili phrase every week. This week: 'Umoja ni nguvu' - Unity is strength."
            />
            <Card
              title="Recipe of the Month"
              content="Discover how to make authentic Kenyan Pilau with our step-by-step guide."
            />
          </Section>
        );
      default:
        return (
          <p className="text-gray-300">
            Select a section from the menu to view content.
          </p>
        );
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (!selectedRegion) {
    return <RegionSelection onSelectRegion={handleSelectRegion} />;
  }

  if (!selectedLocation) {
    return (
      <LocationSelection
        region={selectedRegion}
        onSelectLocation={handleSelectLocation}
      />
    );
  }

  return (
    <Layout username={username} location={selectedLocation}>
      {renderContent}
    </Layout>
  );
};

export default KenyanDiasporaApp;
