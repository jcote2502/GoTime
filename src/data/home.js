import { FaHandshake,FaChessPawn,FaUsers} from 'react-icons/fa';
import '../pages/style.css'

export const pillars = [
    {
        title:'Brand Partnerships',
        desc:"Amplifying brand's credibility through strategic collaborations",
        link:'/brands',
        icon:<FaHandshake className='plr-icon' />
    },
    {   
        title:'Content Strategy',
        desc:"Crafting narratives that inspire individuals and form communities",
        link:'/services',
        icon:<FaChessPawn className='plr-icon' />

    },
    {
        title:'Community Development',
        desc:"Growing surrounding communities through athletics and selfless service",
        link:'/news',
        icon:<FaUsers className='plr-icon' />

    }
];

export const satisfaction = [
    {title:'NIL ATHLETES',stat:'8'},
    {title:'INFLUENCERS',stat:'3'},
    {title:'SOCIAL AUDIENCE REACH',stat:'600K+'},
    {title:'GENERATED IN BRAND DEALS',stat:'$100K+'}
];

export const testimionials = [
    {
        image: `${process.env.PUBLIC_URL}/testimonials/llana.jpeg`,
        quote:'"After only 4 months of knowing Juan Faura, I have become extremely confident in both myself and my content and determined more then ever to succeed."',
        name:'Ilana Epstein',
        title:'Multimedia Journalist & Content Creator'
    },
    {
        image: process.env.PUBLIC_URL + '/testimonials/anniebeard.JPEG',
        quote:`"Collaborating with my agent Juan and Go Time LLC has been instrumental in my collegiate journey, and I'm deeply thankful for their invaluable support during this pivotal and celebratory moment in my career."`,
        name:'Annie Beard',
        title:"LSU Women's Gymnastics"
    },
    {
        image: process.env.PUBLIC_URL + "/testimonials/cjkirker.jpg",
        quote: `"Go Time has catapulted my brand from something I do as a job to something I love. Juan and Go Time have helped me discover who I am and what I want my following to know. This in turn has lead to an increase in deals that fit my values ."`,
        name: 'CJ Kirker',
        title: 'Penn State Track and Field'
    },
    {
        image: process.env.PUBLIC_URL + "/testimonials/veronicazelner.jpg",
        quote: `"Working with Juan has been an incredible opportunity, and I am deeply grateful for it. While there are moments in life when we might wish we had made different choices, partnering with Juan is one decision I will never regret."`,
        name: 'Veronica Zelner',
        title: 'Bikini Athlete'
    },
]

