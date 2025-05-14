import python from '../assets/icons/python.png';
import rust from '../assets/icons/rust.png';
import ros from '../assets/icons/ros.png';
import ltspice from '../assets/icons/ltspice.png';
import erc from '../assets/images/erc.png';
import spc from '../assets/images/spc.jpeg';
import rrc from '../assets/images/rrc_logo.png';
import mail from '../assets/icons/mail.png';
import diet from '../assets/icons/diet.png';
import music from '../assets/icons/music.png';
import nfs from '../assets/icons/nfs.png';
import bsr from '../assets/icons/bsr.png';  
import twit from '../assets/icons/twit.png';
import {
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    summiz,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: python, 
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: rust, 
        name: "Rust",
        type: "Systems Programming",
    },
    {
        imageUrl: ltspice,
        name: "Spice",
        type: "Circuit Design",
    },
    {
        imageUrl: ros,
        name: "ROS and Gazebo",
        type: "Robotics",
    }
    
];

export const experiences = [
    {
        title: "Tech and Events Team Member",
        company_name: "Electronics and Robotics Club, IIIT Hyderabad",
        icon: erc,
        iconBg: "#000000",
        date: "February 2024 - April 2025",
        points: [
            "Conducted technical events including Arduino intro sessions, ESP32 LED workshops, and F1 racing challenges.",
            "Managed event logistics and facilitated hands-on learning in embedded systems.",
            "Promoted maker culture and peer-led learning within the campus community."
        ],
    },
    {
        title: "UG2 Sports Representative",
        company_name: "Sports Council, IIIT Hyderabad",
        icon: spc,
        iconBg: "#000000",
        date: "Aug 2024 - April 2025",
        points: [
            "Organized and coordinated inter-batch events, fostering campus-wide participation and team spirit.",
            "Managed a night cricket tournament, ensuring smooth operations and a fun competitive environment.",
            "Facilitated various sports leagues, contributing to a vibrant and active campus culture.",
        ],
    },
    {
        title: "Undergraduate Researcher",
        company_name: "Robotics Research Center, IIIT Hyderabad",
        icon: rrc,
        iconBg: "#000000",
        date: "May 2025 - Present",
        points: [
            "Currently pursuing honors research under Prof. Madhava Krishna, focusing on advanced topics in robotics and automation.",
            "Collaborating with faculty and peers on cutting-edge projects to contribute to innovations in robotics technology.",
            "Gaining hands-on experience in research methodologies, experimentation, and prototyping within the field of robotics.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Email',
        iconUrl: mail,
        link: 'mailto:jalparikh3@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Xponent123',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jal-parikh-614b27286',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Finance Tracker',
        description: 'A full-stack web app for tracking personal finances. Built with HTML, JavaScript, Python, and MySQL, it allows users to log income/expenses and view financial summaries.',
        link: 'https://github.com/Xponent123/finance_tracker',
    },
    {
        iconUrl: nfs,
        theme: 'btn-back-green',
        name: 'Network File System',
        description: 'implemented a simple network (or rather, a distributed) file system in C++ from scratch, using sockets and threads. The system allows multiple clients to connect to a server and perform file operations like read, write, copy,etc.',
        link: 'https://github.com/Xponent123/network_file_system',
    },
    {
        iconUrl: music,
        theme: 'btn-back-blue',
        name: 'Audio Player',
        description: 'Built a music player in Rust that lets users play, pause, skip, and queue songs by pasting YouTube URLs. Songs are cached for on-demand playback.',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/Xponent123/Audio-player',
    },
    {
        iconUrl: twit,
        theme: 'btn-back-pink',
        name: 'Full Stack Twitter Clone',
        description: 'Built a Twitter like social Media app, enabling users to post and comment in threaded conversations.',
        link: 'Coming Soon',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Carry Look Ahead Adder',
        description: 'Designed a 4 bit CLA adder using static CMOS implementation , and simulated it using NgSpice. Created a layout using Magic VLSI and extracted the netlist. Also performed verilog simulations and implemented the code on FPGA using Vivado.',
        link: 'https://github.com/Xponent123/carry_lookahead_adder',
    },
     {
        iconUrl: bsr,
        theme: 'btn-back-black',
        name: 'Buy Sell IIITH',
        description: 'Made a MERN stack website in which IIIT Hyderabad students can buy and sell their used items.',
        link: 'https://github.com/Xponent123/Buy_Sell_IIITH',
    },
     {
        iconUrl: diet,
        theme: 'btn-back-black',
        name: 'Diet Manager',
        description: ' Created a CLI-based diet manager in Rust to help users log daily calorie intake and get goal-based calorie recommendations.',
        link: 'https://github.com/Xponent123/diet-manager',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'RISCV Processor',
        description: 'Designed a 5 stage pipelined RISC-V processor using Verilog HDL. Also took care of control signals and data hazards.',
        link: 'https://github.com/Xponent123/riscv_processor',
    }
];