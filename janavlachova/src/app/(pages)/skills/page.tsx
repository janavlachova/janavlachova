import React from "react";

interface Skill {
    key: string;
    name: string;
    description: string;
    icon?: string;
    level?: number;
}

const skillsFrontend: Skill[] = [
    {
        key: "html",
        name: "HTML",
        description: "HyperText Markup Language",
        icon: "html",
        level: 5,
    },
    {
        key: "css",
        name: "CSS",
        description: "Cascading Style Sheets",
        icon: "css",
        level: 5,
    },
    {
        key: "js",
        name: "JavaScript",
        description: "A programming language for the web",
        icon: "javascript",
        level: 5,
    },
    {
        key: "ts",
        name: "TypeScript",
        description: "A typed superset of JavaScript",
        icon: "typescript",
        level: 5,
    },
    {
        key: "vue",
        name: "Vue.js",
        description: "A JavaScript framework for building user interfaces",
        icon: "vue",
        level: 4,
    },
    {
        key: "react",
        name: "React",
        description: "A JavaScript library for building user interfaces",
        icon: "react",
        level: 3,
    },
    {
        key: "next",
        name: "Next.js",
        description: "A React framework for production",
        icon: "next",
        level: 3,
    },
];

const skillsBackend: Skill[] = [
    {
        key: "php",
        name: "PHP",
        description: "A server-side scripting language",
        icon: "php",
        level: 5,
    },
    {
        key: "maria",
        name: "MariaDB",
        description: "A relational database",
        icon: "mariadb",
        level: 4,
    },
    {
        key: "nette",
        name: "Nette",
        description: "A PHP framework",
        icon: "nette",
        level: 4,
    },
    {
        key: "yii2",
        name: "Yii 2",
        description: "A PHP framework",
        icon: "yii",
        level: 3,
    },
    {
        key: "cpp",
        name: "C++",
        description: "A programming language",
        icon: "cpp",
        level: 3,
    },
];

const Skills: React.FC = () => {
    return (
        <div>
            <h1>Skills</h1>
            <h2>Frontend</h2>
            <ul>
                {skillsFrontend.map((skill) => (
                    <li key={skill.key}>
                        <h2>{skill.name}</h2>
                        <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
            <h2>Backend</h2>
            <ul>
                {skillsBackend.map((skill) => (
                    <li key={skill.key}>
                        <h2>{skill.name}</h2>
                        <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
