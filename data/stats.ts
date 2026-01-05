export interface EngineerStat {
    id: string;
    label: string;
    value: number;
    unit: string;
    icon: string;
    color: string;
}

export const engineerStats: EngineerStat[] = [
    {
        id: "experience",
        label: "Years of Experience",
        value: 4,
        unit: "years",
        icon: "⚡",
        color: "cyan"
    },
    {
        id: "projects",
        label: "Projects Completed",
        value: 25,
        unit: "+",
        icon: "🚀",
        color: "purple"
    },
    {
        id: "devices",
        label: "IoT Devices Deployed",
        value: 100,
        unit: "+",
        icon: "📡",
        color: "blue"
    },
    {
        id: "code",
        label: "Lines of Code",
        value: 50000,
        unit: "+",
        icon: "💻",
        color: "green"
    },
    {
        id: "uptime",
        label: "System Uptime",
        value: 99.9,
        unit: "%",
        icon: "⚙️",
        color: "cyan"
    },
    {
        id: "languages",
        label: "Programming Languages",
        value: 8,
        unit: "+",
        icon: "🔧",
        color: "purple"
    }
];

// Mission log entries for the nerdy section
export interface MissionLog {
    id: string;
    timestamp: string;
    status: "completed" | "in-progress" | "planned";
    mission: string;
    details: string;
}

export const missionLogs: MissionLog[] = [
    {
        id: "mission-1",
        timestamp: "2023.11",
        status: "completed",
        mission: "FOTA Bootloader Deployment",
        details: "Successfully deployed firmware over-the-air update system to 100+ STM32 devices"
    },
    {
        id: "mission-2",
        timestamp: "2023.08",
        status: "completed",
        mission: "Multi-Platform Integration",
        details: "Integrated inventory management across WordPress, Daraz, and Shopify platforms"
    },
    {
        id: "mission-3",
        timestamp: "2023.05",
        status: "completed",
        mission: "MQTT Library Release",
        details: "Developed and deployed custom MQTT library for STM32 with GSM support"
    },
    {
        id: "mission-4",
        timestamp: "2024.01",
        status: "in-progress",
        mission: "Cloud Infrastructure Optimization",
        details: "Optimizing AWS infrastructure for improved performance and cost efficiency"
    },
    {
        id: "mission-5",
        timestamp: "2024.Q2",
        status: "planned",
        mission: "Next-Gen IoT Platform",
        details: "Architecting scalable IoT platform with edge computing capabilities"
    }
];

// Tech mastery levels (for game-like display)
export interface TechMastery {
    category: string;
    level: number; // 1-10
    experience: string;
}

export const techMastery: TechMastery[] = [
    {
        category: "Embedded Systems",
        level: 9,
        experience: "Expert"
    },
    {
        category: "Full-Stack Development",
        level: 8,
        experience: "Advanced"
    },
    {
        category: "Cloud & DevOps",
        level: 8,
        experience: "Advanced"
    },
    {
        category: "IoT Architecture",
        level: 9,
        experience: "Expert"
    },
    {
        category: "Firmware Development",
        level: 9,
        experience: "Expert"
    }
];
