export interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
}

export const skillCategories = {
    embedded: "Embedded Systems",
    languages: "Programming Languages",
    backend: "Backend & Databases",
    frontend: "Frontend & Frameworks",
    cloud: "Cloud & DevOps",
    protocols: "Communication Protocols",
    tools: "Tools & Platforms"
};

export const skills: Skill[] = [
    // Embedded Systems
    { name: "STM32", level: 95, category: "embedded" },
    { name: "ESP32", level: 90, category: "embedded" },
    { name: "MSP430", level: 75, category: "embedded" },
    { name: "Arduino", level: 85, category: "embedded" },
    { name: "ARM Cortex", level: 90, category: "embedded" },
    { name: "RTOS", level: 80, category: "embedded" },
    { name: "Firmware Development", level: 95, category: "embedded" },
    { name: "FOTA Bootloader", level: 85, category: "embedded" },

    // Programming Languages
    { name: "C", level: 95, category: "languages" },
    { name: "C++", level: 90, category: "languages" },
    { name: "Python", level: 85, category: "languages" },
    { name: "JavaScript", level: 90, category: "languages" },
    { name: "TypeScript", level: 85, category: "languages" },
    { name: "Java", level: 70, category: "languages" },
    { name: "Bash", level: 80, category: "languages" },
    { name: "Dart", level: 75, category: "languages" },

    // Backend & Databases
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express", level: 90, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "MySQL", level: 80, category: "backend" },
    { name: "MongoDB", level: 75, category: "backend" },
    { name: "Redis", level: 70, category: "backend" },
    { name: "Prisma ORM", level: 85, category: "backend" },
    { name: "RESTful APIs", level: 95, category: "backend" },

    // Frontend & Frameworks
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Flutter", level: 75, category: "frontend" },
    { name: "Responsive Design", level: 90, category: "frontend" },

    // Cloud & DevOps
    { name: "AWS (EC2, S3, Lambda)", level: 85, category: "cloud" },
    { name: "Docker", level: 85, category: "cloud" },
    { name: "Jenkins", level: 80, category: "cloud" },
    { name: "Terraform", level: 75, category: "cloud" },
    { name: "CI/CD Pipelines", level: 85, category: "cloud" },
    { name: "Linux Administration", level: 90, category: "cloud" },

    // Communication Protocols
    { name: "MQTT", level: 95, category: "protocols" },
    { name: "LoRa", level: 85, category: "protocols" },
    { name: "BLE (Bluetooth)", level: 85, category: "protocols" },
    { name: "Wi-Fi", level: 90, category: "protocols" },
    { name: "GSM/2G/3G", level: 85, category: "protocols" },
    { name: "I2C/SPI/UART", level: 95, category: "protocols" },

    // Tools & Platforms
    { name: "Git", level: 95, category: "tools" },
    { name: "CMake", level: 80, category: "tools" },
    { name: "EagleCAD", level: 70, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "STM32CubeIDE", level: 90, category: "tools" },
];

// Get skills by category
export const getSkillsByCategory = (category: string): Skill[] => {
    return skills.filter(skill => skill.category === category);
};

// Get all categories with their skills
export const getAllSkillsGrouped = () => {
    const grouped: Record<string, Skill[]> = {};

    Object.keys(skillCategories).forEach(key => {
        grouped[key] = getSkillsByCategory(key);
    });

    return grouped;
};
