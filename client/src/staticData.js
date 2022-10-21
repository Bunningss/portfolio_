import home from './img/home.png';
import about from './img/about.png';
import project from './img/project.png';
import contact from './img/contact.png';

// Projects
import customSticker from './img/projects/custom_sticker.png';
import puropasta from './img/projects/puropasta.png';
import zeus_drinks from './img/projects/zeus_drinks.png';
import pocobun from './img/projects/pocobun.png';
import briton_store from './img/projects/briton_store.png';

export const navbarData = [
    {
        id: 1,
        name: "Home",
        icon: home,
        href: "/"
    },
    {
        id: 2,
        name: "About",
        icon: about,
        href: "/about"
    },
    {
        id: 3,
        name: "Skills",
        icon: project,
        href: "/projects"
    },
    {
        id: 4,
        name: "Contact",
        icon: contact,
        href: "/contact"
    },
];

export const aboutText = "Highly motivated web developer with 2+ years of web development experience using modern web development technologies and industry best practices. I have worked on over 40+ projects and specialize in technologies like React JS, Next JS, Node JS, Express, Python, Django, etc. I love working on challenging projects and achieve better results than before.";

export const expertiseData = [
    {
        id: 1,
        label: "React JS",
        exp: "95",
        color: "rgb(8, 248, 216)"
    },
    {
        id: 2,
        label: "Node JS",
        exp: "87",
        color: "rgb(104, 42, 233)"
    },
    {
        id: 3,
        label: "JavaScript",
        exp: "98",
        color: "crimson"
    },
    {
        id: 4,
        label: "Next JS",
        exp: "95",
        color: "rgb(210, 108, 213)"
    },
];

export const projects = [
    {
        image: customSticker,
        link: 'https://custom-stc.herokuapp.com/'
    },
    {
        image: pocobun,
        link: 'https://pocobun.herokuapp.com/'
    },
    {
        image: puropasta,
        link: 'https://www.puropasta.com/'
    },
    {
        image: briton_store,
        link: 'https://britonstore.com/'
    },
    {
        image: zeus_drinks,
        link: ''
    },
];

export const sidebarList = [
    {
        title: 'Home',
        href: ''
    },
    {
        title: 'About',
        href: "/about"
    },
    {
        title: 'Projects',
        href: "/projects"
    },
    {
        title: 'Contact Me',
        href: "/contact"
    },
];