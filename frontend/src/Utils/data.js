import {
    Search,
    Users,
    FileText,
    MessageSquare,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    BarChart3,
    Plus,
    
} from "lucide-react";

export const jobSeekerFeatures = [
    {
        icon:Search,
        title:"Smart Job Matching",
        description:"AI-powered algorithms matches you with relevant opportunities based on your skills and preferences. "
    },
    {
        icon:FileText,
        title:" Resume Builder",
        description:"Create professional resumes with our intuitive builder and template design by experts."
    },
    {
        icon:MessageSquare,
        title:"Direct Communication",
        description:"Connect directly with recruiters and hiring managers through our integrated messaging system."
    },
    {
        icon:Award,
        title:"Skill Assessments",
        description:"Showcase your abilities with verified skill tests and earn badges that employers trust."
    },
    

]


export const employerFeatures = [
    {
        icon:Users,
        title:"Talent Pool Access",
        description:"Access our vast databbase of pre-secreened candidates and find the perfect fit for your team."
    },
    {
        icon:BarChart3,
        title:"Analytics Dashboard ",
        description:"track your hiring performance with detailed analytics and insights on candidate engagement."
    },
    {
        icon:Shield,
        title:"Verified Candidates",
        description:"All candidates undergo background verification to ensure you're hiring trustworthy professionals."
    },
    {
        icon:Clock,
        title:"Quick Hiring",
        description:"Streamlined hiring process reduces time-to-hire by 60% with automated screening tools."  
     },
]


export const  NAVIGATION_MENU = [
    {
        id:"employer-dashboard",
        name:"Dashboard",
        icon:LayoutDashboard,
    },
    {
        id:"post-jobs",
        name:"Post Job",
        icon:Plus,
    },
    {
        id:"manage-job",
        name:"Manage Jobs",
        icon:Briefcase,
    },
    {
        id:"company-profile",
        name:"Company Profile",
        icon:Building2,
    },
    ]


export const Categories = [
    {
        value:"Engineering", 
        label:"Engineering"
    },
    {
        value:"Design", 
        label:"Design"
    },
  
    {
        value:"Marketing", 
        label:"Marketing"
    },
    {
        value:"Sales", 
        label:"Sales"
    },
    {
        value:"Customer-service", 
        label:"Customer-service"
    },
    {
        value:"Products", 
        label:"Products"
    },
    {
        value:"Operations", 
        label:"Operations"
    },
    {
        value:"Finance", 
        label:"Finance"
    },
    {
        value:"HR", 
        label:"HR"
    },
    {
        value:"Other", 
        label:"Other"
    },
  
]

export const Job_type = [
    {value: "Remote", label:"Remote"},
    {value: "Full-Time", label:"Full-Time"},
    {value: "Part-Time", label:"Part-Time"},
    {value: "Internship", label:"Internship"},
    {value: "Contract", label:"Contract"},
]
    

export const salary_ranges = [
    "Less then $10000",
    "$1000 - $15000",
    "More then $15000"
];