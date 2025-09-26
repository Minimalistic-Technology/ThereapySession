import { BrainCircuit, Users, LucideProps } from 'lucide-react';
import { FC } from 'react';

// --- TYPE DEFINITIONS ---
export type DigitalProduct = {
  key: string;
  title: string;
  icon: FC<LucideProps>;
  description: string;
  shortDescription: string;
};

export type DigitalProductsData = {
  expertCbt: DigitalProduct;
  cbtClub: DigitalProduct;
};

// --- DATA FOR DIGITAL PRODUCTS ---
export const digitalProductsData: DigitalProductsData = {
  expertCbt: {
    key: "expert-cbt",
    title: "Expert CBT",
    icon: BrainCircuit,
    shortDescription: "A program focused on strengthening clinical reasoning and the assertive application of CBT techniques.",
    description: "Expert CBT is a program focused on strengthening clinical reasoning. It teaches the reasoning behind Cognitive-Behavioral Therapy techniques, showing the objective of each technique and, most importantly, how to use it to make assertive decisions in each clinical case. The goal is to provide clinical clarity to psychologists, teaching that, more than applying a technique, it is essential to understand the reasoning that underlies each intervention to decide the best way to act in each situation."
  },
  cbtClub: {
    key: "cbt-club",
    title: "CBT Club",
    icon: Users,
    shortDescription: "A continuous learning and community space for psychologists and cognitive-behavioral therapists.",
    description: "CBT Club is a continuous learning and community space for psychologists and cognitive-behavioral therapists. It works in a subscription format, with live meetings and recorded content. It is a collaborative environment, designed for beginner and developing psychologists to share experiences, reflect on real cases, and grow as professionals. CBT Club provides a practical and applicable experience, showing that it is possible to grow as a therapist, both humanly and professionally, in a safe continuous learning space."
  }
};