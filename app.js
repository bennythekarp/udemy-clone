const categories = {
    webDev: [
        'Wev Development', 'JavaScript', 'React', 'CSS', 'Angular', 'Node.Js', 'HTML5', 'PHP', 'Django'
    ],
    mobDev: [
        'Google Flutter', 'Android Development', 'iOS Development', 'Swift', 'React Native', 'Dart (programming language)', 'Mobile Development', 'Kotlin', 'SwiftUI'
    ], 
    gameDev: [
        'Unity', 'Unreal Engine', 'Game Development Fundamentals', 'C#', '2D Game Development', 'Unreal Engine Blueprints', 'Virtual Reality'
    ],
    entrepreneurship: [
        'Business Fundamentals', 'Entrepreneurship Fundamentals', 'Freelancing', 'Business Strategy', 'Business Plan', 'Startup', 'Online Business', 'Blogging', 'Blockchain'
    ],
    businessAnalytics: [
        'Microsoft Power BI', 'SQL', 'Tableau', 'Business Analysis', 'Data Modeling', 'Blockchain', 'Business Intelligence', 'MySQL', 'Data Analysis'
    ],
    digitalMarketing: [
        'Digital Marketing', 'Social Media Marketing', 'Marketing Strategy', 'Internet Marketing', 'Copywriting', 'Google Analytics', 'Email Marketing', 'YouTube Marketing', 'Podcasting'
    ],
    graphicDesign: [
        'Graphic Design', 'Photoshop', 'Adobe Illustrator', 'Drawing', 'Digital Painting', 'Canva', 'InDesign', 'Art Composition', 'Character Design'
    ],
    itCertification: [
        'AWS Certification', 'Microsoft Certification', 'AWS Certified Solutions Architect - Associate', 'AWS Certified Cloud Practitioner', 'CompTIA A+', 'Amazon AWS', 'Cisco CCNA', 'AWS Certified Developer - Associate', 'Microsoft AZ-900'
    ],
    personalTransformation: [
        'Life Coach Training', 'Neuro-Linguistic Programming', 'Personal Development', 'Personal Transformation', 'Life Purpose', 'Mindfulness', 'Meditation', 'CBT Cognitive Behavioral Therapy', 'Sound Therapy'
    ],
    allCategories: [
        'Development', 'Business', 'Finance & Accounting', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography & Video', 'Health & Fitness', 'Music', 'Teaching & Academics'
    ]
}

const hamburger = document.querySelector('.hamburger')
const screen = document.querySelector('.screen')
const mainNav = document.querySelector('.main-nav')
const mainNavHeader = document.querySelector('.main-nav-header')
const links = document.querySelectorAll('.side-nav-lists li')
const nav2 = document.querySelector('.second-nav')
const menus = document.querySelectorAll('.back-to-menu')
const settingsNav = document.querySelector('.settings-nav')

const secondNavList = document.querySelector('.second-nav-list')


hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('clicked')
    hamburger.classList.toggle('moved')
    screen.classList.toggle('greyed-out')
    if (nav2.classList.contains('clicked')) {
        nav2.classList.toggle('clicked')
    } else if (settingsNav.classList.contains('clicked')) {
        settingsNav.classList.toggle('clicked')
    }
})
mainNavHeader.addEventListener('click', () => {
    settingsNav.classList.toggle('clicked')
})
links.forEach(link => {
    link.addEventListener('click', (e) => {
        nav2.classList.toggle('clicked')
        let category = (e.target.id || e.target.closest('li').id)
        for (let cat in categories) {
            if (cat === category) {
                categories[cat].forEach(item => {
                    let li = document.createElement('li')
                    li.innerHTML = item
                    nav2.querySelector('ul').appendChild(li)
                })
            }
        }
    })
})
menus.forEach(menu => {
    menu.addEventListener('click', () => {
        if (nav2.classList.contains('clicked')) {
            nav2.classList.toggle('clicked')
            nav2.querySelector('ul').innerHTML =''
        } else if (settingsNav.classList.contains('clicked')) {
            settingsNav.classList.toggle('clicked')
        }
    })
})

