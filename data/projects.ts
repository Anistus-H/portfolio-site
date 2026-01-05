export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    techStack: string[];
    highlights: string[];
    period?: string;
    company?: string;
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        id: "inventory-management",
        title: "Multi-Platform Inventory Management System",
        category: "Full-Stack Web",
        description: "Comprehensive web application to centralize inventory management across multiple e-commerce platforms including WordPress, Daraz, and Shopify.",
        techStack: ["PostgreSQL", "Express", "React", "Node.js", "RESTful APIs", "JWT"],
        highlights: [
            "Implemented secure authentication and role-based access control",
            "Automated periodic data synchronization across platforms",
            "Improved inventory tracking efficiency by 40%",
            "Built real-time dashboard for inventory analytics"
        ],
        company: "Freelance Project"
    },
    {
        id: "gps-tracking",
        title: "Real-time GPS Tracking System",
        category: "IoT & Mobile",
        description: "End-to-end GPS tracking solution with ESP32-based hardware device and Flutter mobile application for real-time location monitoring.",
        techStack: ["ESP32", "GSM", "MQTT", "Flutter", "Firebase"],
        highlights: [
            "Designed ESP32 and GSM-based device for continuous location tracking",
            "Integrated MQTT server for real-time data transmission",
            "Created Flutter mobile app for device monitoring and tracking history",
            "Implemented geofencing and alert notifications"
        ],
        company: "Freelance Project"
    },
    {
        id: "hydroponic-controller",
        title: "Cloud-Based Smart Hydroponic System Controller",
        category: "Embedded IoT",
        description: "STM32-based intelligent controller system for remote monitoring and automated control of hydroponic farming environments.",
        techStack: ["STM32", "GSM", "LoRa", "MQTT", "Sensors"],
        highlights: [
            "Integrated GSM and LoRa modules for dual communication channels",
            "Implemented automated monitoring and control algorithms",
            "Maintained optimal pH, EC, and temperature levels autonomously",
            "Enabled remote access and control via cloud platform"
        ],
        company: "SenzMate (Pvt) Ltd",
        period: "2023"
    },
    {
        id: "fota-bootloader",
        title: "STM32 FOTA Bootloader over HTTP",
        category: "Embedded Systems",
        description: "Firmware Over-The-Air update system for STM32 microcontrollers, enabling remote firmware updates via HTTP protocol.",
        techStack: ["STM32", "HTTP", "GSM", "Flash Memory", "Bootloader"],
        highlights: [
            "Architected secure bootloader with dual-bank flash management",
            "Reduced deployment and update time by 50%",
            "Implemented firmware verification and rollback mechanisms",
            "Deployed to 100+ production devices"
        ],
        company: "SenzMate (Pvt) Ltd",
        period: "2023"
    },
    {
        id: "mqtt-library",
        title: "MQTT Library for STM32 with GSM",
        category: "Embedded Systems",
        description: "Custom MQTT client library for STM32 microcontrollers with support for 2G and 3G GSM modules.",
        techStack: ["STM32", "MQTT", "GSM", "AT Commands", "C"],
        highlights: [
            "Developed lightweight MQTT client optimized for embedded systems",
            "Supported multiple GSM module variants (2G/3G)",
            "Implemented automatic reconnection and QoS handling",
            "Deployed across 100+ IoT devices in production"
        ],
        company: "SenzMate (Pvt) Ltd",
        period: "2023"
    },
    {
        id: "smart-irrigation",
        title: "Smart Irrigation System with Advanced Soil Sensors",
        category: "Embedded IoT",
        description: "STM32-based irrigation control system with multiple soil sensors for monitoring moisture, pH, EC, and temperature.",
        techStack: ["STM32", "GSM", "MQTT", "Flash Memory", "Soil Sensors"],
        highlights: [
            "Integrated multiple soil sensors for comprehensive monitoring",
            "Implemented data logging to flash memory for offline operation",
            "Periodic cloud synchronization via MQTT over GSM",
            "Automated irrigation scheduling based on sensor data"
        ],
        company: "SenzMate (Pvt) Ltd",
        period: "2021-2022"
    },
    {
        id: "driver-behavior",
        title: "Driver Behavior Analysis System",
        category: "Embedded IoT",
        description: "IMU-based system for detecting and analyzing driving patterns to enhance driver safety and reduce vehicle maintenance costs.",
        techStack: ["STM32", "IMU", "BLE", "Pattern Recognition", "Decision Tree"],
        highlights: [
            "Implemented pattern recognition algorithms for harsh driving detection",
            "Detected hard acceleration, braking, and cornering events",
            "Real-time data transmission via BLE",
            "Contributed to driver safety improvement initiatives"
        ],
        company: "SenzMate (Pvt) Ltd",
        period: "2021-2022"
    },
    {
        id: "blood-pressure",
        title: "Ambulatory Blood Pressure Estimation System",
        category: "Biomedical IoT",
        description: "Wearable device for continuous blood pressure monitoring using ECG and PPG signals with deep learning-based estimation.",
        techStack: ["ESP32", "BLE", "Flutter", "Deep Learning", "TensorFlow", "ECG", "PPG"],
        highlights: [
            "Engineered device for capturing ECG and PPG measurements",
            "Developed deep learning model for blood pressure estimation",
            "BLE transmission to mobile application for real-time monitoring",
            "Achieved competitive accuracy compared to traditional methods"
        ],
        company: "SLIIT - Final Year Project",
        period: "2022-2023"
    },
    {
        id: "bus-pass",
        title: "IoT-based Bus Pass System",
        category: "Embedded IoT",
        description: "RFID-based automated fare collection system with real-time server communication and TFT display interface.",
        techStack: ["ESP32", "RFID", "MQTT", "TFT Display", "Firebase"],
        highlights: [
            "Developed ESP32-based RFID card reader system",
            "Real-time server communication via MQTT",
            "TFT display interface for transaction status",
            "Implemented secure card authentication"
        ],
        company: "SLIIT - Third Year Project",
        period: "2021-2022"
    },
    {
        id: "smart-home",
        title: "Smart Home Control System",
        category: "IoT",
        description: "Bluetooth-enabled home automation system for controlling lighting, fans, and door security.",
        techStack: ["Arduino", "Bluetooth", "Motion Sensors", "Relays", "Android"],
        highlights: [
            "Developed Bluetooth-enabled control system",
            "Integrated motion sensors for automated lighting",
            "Remote control via Android application",
            "Implemented security features for door access"
        ],
        company: "Personal Project",
        period: "2020"
    }
];

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(project => project.category === category);
};

// Get featured projects (top 6)
export const getFeaturedProjects = (): Project[] => {
    return projects.slice(0, 6);
};
