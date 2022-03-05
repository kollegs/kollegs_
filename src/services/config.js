import Clock from "../animation/16226-clock-animation.json"
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import DiamondIcon from '@mui/icons-material/Diamond';
const config = {
    offersList : [
        {
            id: 1,
            heading: "Stay in the Loop 24/7",
            subtitle: "With round-the-clock support and direct access to your expert, you can access our online assignment writing service immediately, whenever you want.",
            imageUrl: Clock
        },
        {
            id: 2,
            heading: "Every Word in Its Right Place",
            subtitle: "Hitting your word count or getting the correct solution is only half the job. We'll fill your assignment with vital insight and clear argumentation.",
            imageUrl: "/assets/SectionB/Notepad.webp"
        },
        {
            id: 3,
            heading: "Tailored to Your Needs",
            subtitle: "Our homework help service is made to meet your demands, whatever the challenge. Every paper is written from scratch by experts in your field.",
            imageUrl: "/assets/SectionB/Target.webp"
        },
    ],

    services : [
        {
            id: 1,
            title: "Content Writing",
            description: "Be it a short essay on gravitational waves for the astronomy class or a multi-page project on bipolar disorder for the psychology course, your paper will have the right content and format to bring you top grades in every area of study.",
        },
        {
            id: 2,
            title: "Essay Writing",
            description: "Writing a thorough and well-referenced research paper is no picnic: it requires deep knowledge and understanding of your subject, and that’s exactly what your expert will deliver. In-depth research and breakthrough insights are a given."
        },
        {
            id: 3,
            title: "Presentations",
            description: "Writing a thorough and well-referenced research paper is no picnic: it requires deep knowledge and understanding of your subject, and that’s exactly what your expert will deliver. In-depth research and breakthrough insights are a given."
        },
        {
            id: 4,
            title: "Development",
            description: "Writing a thorough and well-referenced research paper is no picnic: it requires deep knowledge and understanding of your subject, and that’s exactly what your expert will deliver. In-depth research and breakthrough insights are a given."
        }
    ],

    projectData: [
        {
            id: 1,
            title: "Content",
            description: "From business and programming to medicine and genetic engineering, we have career professionals that know your field inside-out. With hands-on experience in your niche, they know how to make your teachers impressed",
            imageUrl: "/assets/projects/content.webp"
        
        },
        {
            id: 2,
            title: "Development",
            description: "From business and programming to medicine and genetic engineering, we have career professionals that know your field inside-out. With hands-on experience in your niche, they know how to make your teachers impressed",
            imageUrl: "/assets/projects/development.webp"
        },
        {
            id: 3,
            title: "Programming",
            description: "From business and programming to medicine and genetic engineering, we have career professionals that know your field inside-out. With hands-on experience in your niche, they know how to make your teachers impressed",
            imageUrl: "/assets/projects/programming.webp"
        },
        {
            id: 4,
            title: "Presentation",
            description: "From business and programming to medicine and genetic engineering, we have career professionals that know your field inside-out. With hands-on experience in your niche, they know how to make your teachers impressed",
            imageUrl: "/assets/projects/presentation.webp"
        },
        {
            id: 5,
            title: "Research",
            description: "From business and programming to medicine and genetic engineering, we have career professionals that know your field inside-out. With hands-on experience in your niche, they know how to make your teachers impressed",
            imageUrl: "/assets/projects/research.webp"
        },
        {
            id: 6,
            title: "Papers",
            description: "From business and programming to medicine and genetic engineering, we have career professionals that know your field inside-out. With hands-on experience in your niche, they know how to make your teachers impressed",
            imageUrl: "/assets/projects/papers.webp"
        },
    ],

    processData: [
        {
            value: "1",
            title: "Order",
            imageUrl: "/assets/process/orders.svg",
            description: "Fill our order form with all the details you want. That way, you're guaranteed to get the results you're looking for.",
        },
        {
            value: "2",
            title: "Search",
            imageUrl: "/assets/process/search.png",
            description: "We can assign an expert for you, or you can choose your champion from our diverse pool yourself – it's up to you."
        },
        {
            value: "3",
            title: "Chats",
            imageUrl: "/assets/process/chat.png",
            description: "Chat with the writer and have changes made as you go. We'll adapt to you at every stage, from research to formatting."
        }
    ],

    paymentsData: [
        {
            id: "1",
            title: "Secure Payments",
            avatar: <NoEncryptionIcon style={{fontSize: "50px", color: "#58caff", paddingRight: "10px"}} />,
            subtitle: "Sleep tight: each transaction is encrypted and 100% secure."
        },
        {
            id: "2",
            title: "Data Protection",
            avatar: <FingerprintIcon style={{fontSize: "50px", color: "#58caff", paddingRight: "10px"}}/>,
            subtitle: "We encrypt everything. It's all confidential."
        },
        {
            id: "3",
            title: "Guaranteed Originality",
            avatar: <DiamondIcon style={{fontSize: "50px", color: "#58caff", paddingRight: "10px"}} />,
            subtitle: "Get a free plagiarism report upon request."
        },
    ],

    questions: [
        {
            id: "1",
            question: "Is Kollegs legit?",
            answer: "Yes. Unlike many cheap writing services, AssignmentGeek.com boasts a team of trustworthy experts, selected for you through a rigorous screening process. If you need help with assignment writing, and you need it fast, just say, “Do my paper,” and your expert will commence work right away."
        },
        {
            id: "2",
            question: "Can I trust your assignment writing service?",
            answer: "Yes. Your trust means everything to us, as evidenced by the reviews from your peers. Unlike other companies that offer assistance for cheap, our assignment writing services have been built on the idea of never compromising the high quality of homework help and, above all, security and guarantee of your confidentiality. With 256-bit encryption of all the data you share with us, and daily system checks, you are in safe hands."
        },
        {
            id: "3",
            question: "Is it safe to pay for online assignment help?",
            answer: "Yes. Every transaction is encrypted and processed through secure online payment gateways – we don’t collect or store your financial data, and we never disclose it to third parties. If you need help with payment, please contact our Customer Support Team."
        },
        {
            id: "4",
            question: "Who can help me with my assignment?",
            answer: "We staff a team of professional, highly qualified writers who have hands-on experience in meeting deadlines and writing papers for students on such diverse subjects as law, business, finance, management, marketing, statistics, and nursing."
        },
        {
            id: "5",
            question: "Can I expect the best assignment writing help when hiring your service?",
            answer: "Yes. Our writers are experts at writing, as proven by our customers’ feedback. What’s more, when you order assignment help online from us, you get a free 10-day revision period, and a 6--day money-back guarantee."
        },
    ]
}

export default config;
