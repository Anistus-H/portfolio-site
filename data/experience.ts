export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    type: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        id: "freelance-2023",
        company: "Freelance Software Engineer",
        role: "Independent Contractor",
        period: "Jan 2023 – Present",
        type: "Full-time",
        achievements: [
            "Developed and deployed responsive web applications using Next.js, React, and Node.js, focusing on performance optimization and SEO best practices",
            "Built a multi-platform inventory management system using the PERN stack, integrating with platforms like WordPress, Daraz, and Shopify, improving inventory tracking efficiency by 40%",
            "Deployed and maintained a full-stack food delivery application with real-time order tracking and payment integration",
            "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%",
            "Managed AWS infrastructure including EC2, S3, RDS, and Lambda, ensuring 99.9% uptime for client applications",
            "Automated infrastructure provisioning using Terraform and AWS CloudFormation, streamlining deployments"
        ]
    },
    {
        id: "senzmate-2023",
        company: "SenzMate IoT Intelligence Solutions",
        role: "Embedded System Engineer",
        period: "Jan 2023 – Nov 2023",
        type: "Full-time",
        achievements: [
            "Architected and developed an STM32-based FOTA bootloader over HTTP, reducing deployment and update time by half",
            "Developed and deployed an MQTT library for 100+ STM32-based devices, with support for 2G and 3G GSM modules",
            "Implemented critical features in a LoRa remote control device to resolve continuous transmission and power reset related issues",
            "Developed and deployed an MQTT, LoRa based gateway and peripherals system for monitoring cold storage in a supermarket",
            "Designed a prototype master-slave system to monitor and control hydroponic environment via MQTT and LoRa",
            "Developed a sleep bud prototype to play audio from external flash memory, with BLE and UART for audio data transfer"
        ]
    },
    {
        id: "senzmate-intern",
        company: "SenzMate IoT Intelligence Solutions",
        role: "Embedded System Engineer Intern",
        period: "Sep 2021 – Mar 2022",
        type: "Internship",
        achievements: [
            "Developed a prototype driving behavior detection system for cars using IMU, BLE and decision tree algorithm to identify harsh driving",
            "Added persistent storage capability to an environmental sensor device based on MQTT to manage power failures and signal drops",
            "Implemented timestamp functionality in an MQTT-based environmental sensor device using RTC in GSM module for accurate data mapping"
        ]
    }
];
