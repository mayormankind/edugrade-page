import { BarChart3, Download, Shield, Users } from "lucide-react";

export const features = [
    {
        title: "Admin Dashboard",
        description: "Intuitive interface to manage students, classes, subjects, and academic terms with ease.",
        icon: Users
    },
    {
        title: "Automated Results",
        description: "ISmart grade calculations, GPA computation, and instant report card generation.",
        icon: BarChart3
    },
    {
        title: "Parent Portal",
        description: "Secure access for parents to view their child's progress, attendance, and reports.",
        icon: Shield
    },
    {
        title: "Printable Reports",
        description: "Beautiful, professional report cards ready for printing or digital distribution.",
        icon: Download
    },
]

export const screenshots = [
    {
        title: "Admin Dashboard",
        description: "Manage your entire school's academic data from one central location. Add students, input scores, and generate reports with just a few clicks.",
        image: '/edugrade.PNG'
    },
    {
        title: "Report Card View",
        description: "Professional, customizable report cards that reflect your school's branding and academic standards. Print-ready in seconds.",
        image: '/edugrade.PNG'
    },

]