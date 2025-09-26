import { User, Users, Briefcase, LucideProps } from 'lucide-react';
import { FC } from 'react';

// --- TYPE DEFINITIONS ---
export type Step = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  icon: FC<LucideProps>;
  info: {
    title: string;
    content: string;
  };
  process: {
    title: string;
    steps: Step[];
  };
};

export type ServicesData = {
  individual: Service;
  couples: Service;
  supervision: Service;
};

// --- DATA FOR SERVICES ---
export const servicesData: ServicesData = {
  individual: {
    title: "Individual Therapy",
    icon: User,
    info: {
      title: "A Path to a More Meaningful Life",
      content: "In individual therapy, the first step is to deeply understand what brings each person to therapy: their difficulties, the factors that maintain them, and the thoughts and behaviors that are not helping. Collaboratively, we create a therapeutic plan together so that you can overcome these obstacles, develop new skills and competencies, and thus build a healthier, more meaningful life that is worth living."
    },
    process: {
      title: "Our Therapeutic Process",
      steps: [
        { title: "Initial Assessment", description: "We begin with a deep dive into your unique situation, challenges, and goals for therapy." },
        { title: "Collaborative Planning", description: "Together, we'll create a personalized therapeutic plan tailored to your specific needs." },
        { title: "Skill Development", description: "Learn and practice new skills and coping mechanisms to overcome obstacles effectively." },
        { title: "Building Autonomy", description: "As you progress, we'll transition from weekly to biweekly sessions, empowering you to maintain long-term balance." }
      ]
    }
  },
  couples: {
    title: "Couples Therapy",
    icon: Users,
    info: {
      title: "Building a Healthier Relationship",
      content: "In couples therapy, we analyze the relationship dynamics, identify conflict points, and clarify the couple's goals. Together, we explore which skills and competencies need to be strengthened so that the relationship becomes healthier and meaningful for both. Always collaboratively, we create a plan to help the couple move toward the relationship they wish to build."
    },
    process: {
      title: "Reconnecting and Growing Together",
      steps: [
        { title: "Dynamic Analysis", description: "We identify patterns of interaction, communication styles, and key conflict points in your relationship." },
        { title: "Goal Clarification", description: "We work together to define a shared vision for the future of your relationship." },
        { title: "Strengthening Skills", description: "Develop crucial relationship skills, such as communication, empathy, and conflict resolution." },
        { title: "Moving Forward", description: "We create a concrete plan to help you build the healthier, more meaningful relationship you desire." }
      ]
    }
  },
  supervision: {
    title: "Clinical Supervision",
    icon: Briefcase,
    info: {
      title: "Guidance for Your Professional Journey",
      content: "In clinical supervision, I welcome psychologists at different stages of their careers with care and respect for their journey. Together, we evaluate their current stage, needs, difficulties, and the skills they need to develop. We work collaboratively to overcome obstacles, strengthen clinical and therapeutic competencies, and recognize the beauty of each stage of this professional path."
    },
    process: {
      title: "Nurturing Professional Growth",
      steps: [
        { title: "Career Stage Evaluation", description: "We assess your current professional stage, identifying your unique needs and challenges." },
        { title: "Collaborative Goal Setting", description: "Together, we define the key clinical and therapeutic skills you wish to develop." },
        { title: "Overcoming Obstacles", description: "We work to overcome professional hurdles and strengthen your core competencies as a psychologist." },
        { title: "Celebrating Growth", description: "Recognize and appreciate the progress and beauty in every step of your professional development." }
      ]
    }
  }
};