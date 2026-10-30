import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ModalitiesSection } from './components/ModalitiesSection';
import { PricingSection } from './components/PricingSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CoachesSection } from './components/CoachesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { BookingFormSection } from './components/BookingFormSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedModality, setSelectedModality] = useState<string>('Musculação');
  const [selectedTime, setSelectedTime] = useState<string>('19:00');
  const [selectedDay, setSelectedDay] = useState<string>('Segunda-feira');

  const scrollToBooking = () => {
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSchedule = () => {
    const el = document.getElementById('horarios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModality = (modalityName: string) => {
    setSelectedModality(modalityName);
    scrollToBooking();
  };

  const handleSelectSlot = (modality: string, time: string, day: string) => {
    setSelectedModality(modality);
    setSelectedTime(time);
    setSelectedDay(day);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col font-sans selection:bg-[#C8F031] selection:text-black overflow-x-hidden w-full">
      {/* 3-Zone Navigation Header */}
      <Navbar onScheduleClick={scrollToBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onScheduleClick={scrollToBooking}
          onExploreSchedule={scrollToSchedule}
        />

        {/* Modalities with Asymmetric Bento Grid */}
        <ModalitiesSection onSelectModality={handleSelectModality} />

        {/* Side-by-side Pricing with Quarterly Plan Dominant */}
        <PricingSection onScheduleClick={scrollToBooking} />

        {/* Interactive Schedule Table with Filters */}
        <ScheduleSection onSelectSlot={handleSelectSlot} />

        {/* Coaches / Technical Staff */}
        <CoachesSection />

        {/* Authentic Student Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Free Trial Booking Form & WhatsApp Generator */}
        <BookingFormSection
          initialModality={selectedModality}
          initialTime={selectedTime}
          initialDay={selectedDay}
        />
      </main>

      {/* Floating Bottom Quick Action for Mobile Thumb Zone */}
      <MobileStickyBar onScheduleClick={scrollToBooking} />

      {/* Footer */}
      <Footer onScheduleClick={scrollToBooking} />
    </div>
  );
}
