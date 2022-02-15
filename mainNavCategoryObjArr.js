const mainNavCategoryObjArr = [
   {
      name: 'Development',
      topics: [
         {
            name: 'Web Development',
            topics: [
               'Javascript',
               'React',
               'Angular',
               'CSS',
               'Django',
               'PHP',
               'Node.js',
               'WordPress'
              ]
         },
         {
            name: 'Data Science',
            topics: [
               'Python',
               'Machine Learning',
               'Deep Learning',
               'Data Analysis',
               'Artificial Intelligence',
               'R (programming language)',
               'TensorFlow',
               'Statistics'
            ]
         },
         {
            name: 'Mobile Development',
            topics: [
               'Google Flutter',
               'Android Development',
               'iOS Development',
               'React Native',
               'Swift',
               'Dart (programming language)',
               'Kotlin',
               'SwiftUI'
            ]
         },
         {
            name: 'Programming Language',
            topics: [
               'Python',
               'Java',
               'C#',
               'React',
               'C++',
               'JavaScript',
               'C (programming language)',
               'Spring Framework',
               'Go (programming language)'
            ]
         },
         {
            name: 'Game Development',
            topics: [
               'Unity',
               'Unreal Engine',
               'Game Development Fundamentals',
               'C#',
               '3D Game Development',
               'C++',
               'Unreal Engine Blueprints',
               '2D Game Development',
               'Mobile Game Development'
            ]
         },
         {
            name: 'Database Design & Development',
            topics: [
               'SQL',
               'MySQL',
               'Oracle SQL',
               'MongoDB',
               'Apache Kafka',
               'Oracle Certification',
               'Database Programming',
               'SQL Server',
               'Database Management'
            ]
         },
         {
            name: 'Software Testing',
            topics: [
               'Selenium WebDriver',
               'Java',
               'Automation Testing',
               'Selenium Testing Framework',
               'API Testing',
               'REST Assured',
               'Cypress.io',
               'Appium'
            ]
         },
         {
            name: 'Software Engineering',
            topics: [
               'Data Structures',
               'Algorithms',
               'Coding Interview',
               'Microservices',
               'Kubernetes',
               'Certified Kubernetes Application Developer (CKAD)',
               'Linux',
               'Python',
               'Apache Airflow'
            ]
         },
         {
            name: 'Software Development Tools',
            topics: [
               'Docker',
               'Git',
               'DevOps',
               'Kubernetes',
               'Jenkins',
               'JIRA',
               'Confluence',
               'Continuous Integration',
               'Node.js'
            ]
         },
         {
            name: 'No-Code Development',
            topics: [
               'Elementor',
               'Bubble Visual Programming',
               'Artificial Intelligence',
               'Wix',
               'Machine Learning',
               'WordPress',
               'Microsoft PowerApps',
               'Web Design',
               'Software Development'
            ]
         }
      ]
   },
   {
      name: 'Business',
      topics: [
         {
            name: 'Entrepeneurship',
            topics: [
               'Business Fundamentals',
               'Entrepeneurship Fundamentals',
               'Business Strategy',
               'Freelancing',
               'Business Plan',
               'Startup',
               'Online Business',
               'Blogging',
               'Home Business'
            ]
         },
         {
            name: 'Communication',
            topics: [
               'Communication Skills',
               'Presentation Skills',
               'Public Speaking',
               'Writing',
               'Business Writing',
               'Firction Writing',
               'Email Etiquette',
               'Storytelling',
               'Business Communication'
            ]
         },
         {
            name: 'Management',
            topics: [
               'Product Management',
               'Leadership',
               'Management Skills',
               'BPM Business Process Management',
               'Business Strategy',
               'ISO 9001',
               'Project Management',
               'Manager Training',
               'PMP'
            ]
         },
         {
            name: 'Sales',
            topics: [
               'Sales Skills',
               'B2B Sales',
               'Linkedin',
               'Presentation Skills',
               'Lead Generation',
               'Business Development',
               'Customer Success Management',
               'Cold Email',
               'Customer Service'
            ]
         },
         {
            name: 'Business Strategy',
            topics: []
         },
         {
            name: 'Operations',
            topics: []
         },
         {
            name: 'Product Management',
            topics: []
         },
         {
            name: 'Business Law',
            topics: []
         },
         {
            name: 'Business Analytics & Intelligence',
            topics: []
         },
         {
            name: 'Human Resources',
            topics: []
         },
         {
            name: 'Industry',
            topics: []
         },
         {
            name: 'E-Commerce',
            topics: []
         },
         {
            name: 'Media',
            topics: []
         },
         {
            name: 'Real Estate',
            topics: []
         },
         {
            name: 'Other Business',
            topics: []
         }
      ] 
   },
   {
      name: 'Finance & Accounting',
      topics: [
         {
            name: 'Accounting & Bokkeeping',
            topics: []
         },
         {
            name: 'Compliance',
            topics: []
         },
         {
            name: 'Cryptocurrency & Blockchain',
            topics: []
         },
         {
            name: 'Economics',
            topics: []
         },
         {
            name: 'Finance',
            topics: []
         },
         {
            name: 'Finance Cert & Exam Prep',
            topics: []
         },
         {
            name: 'Financial Modeling & Analysis',
            topics: []
         },
         {
            name: 'Investing & Trading',
            topics: []
         },
         {
            name: 'Money Management Tools',
            topics: []
         },
         {
            name: 'Taxes',
            topics: []
         },
         {
            name: 'Other Finance & Accounting',
            topics: []
         }
      ]
   },
   {
      name: 'IT & Software',
      topics: [
         {
            name: 'IT Certifications',
            topics: []
         },
         {
            name: 'Network & Security',
            topics: []
         },
         {
            name: 'Hardware',
            topics: []
         },
         {
            name: 'Operating Systems & Servers',
            topics: []
         },
         {
            name: 'Other IT & Software',
            topics: []
         }
      ]
   },
   {
      name: 'Office Productivity',
      topics: [
         {
            name: 'Microsoft',
            topics: []
         },
         {
            name: 'Apple',
            topics: []
         },
         {
            name: 'Google',
            topics: []
         },
         {
            name: 'SAP',
            topics: []
         },
         {
            name: 'Oracle',
            topics: []
         },
         {
            name: 'Other Office Productivity',
            topics: []
         }
      ]
   },
   {
      name: 'Personal Development',
      topics: [
         {
            name: 'Personal Transformation',
            topics: []
         },
         {
            name: 'Peronal Productivity',
            topics: []
         },
         {
            name: 'Leadership',
            topics: []
         },
         {
            name: 'Career Development',
            topics: []
         },
         {
            name: 'Parenting & Relationships',
            topics: []
         },
         {
            name: 'Happiness',
            topics: []
         },
         {
            name: 'Esoteric Practices',
            topics: []
         },
         {
            name: 'Religion & Spirituality',
            topics: []
         },
         {
            name: 'Peronal Brand Building',
            topics: []
         },
         {
            name: 'Creativity',
            topics: []
         },
         {
            name: 'Influence',
            topics: []
         },
         {
            name: 'Self Esteem & Confidence',
            topics: []
         },
         {
            name: 'Stress Management',
            topics: []
         },
         {
            name: 'Memory & Study Skills',
            topics: []
         },
         {
            name: 'Motivation',
            topics: []
         },
         {
            name: 'Other Peronal Development',
            topics: []
         }
      ]
   },
   {
      name: 'Design',
      topics: [
         {
            name: 'Web Design',
            topics: []
         },
         {
            name: 'Graphic Design & Illustration',
            topics: []
         },
         {
            name: 'Design Tools',
            topics: []
         },
         {
            name: 'User Experience Design',
            topics: []
         },
         {
            name: 'Game Design',
            topics: []
         },
         {
            name: '3D & Animation',
            topics: []
         },
         {
            name: 'Fashion Design',
            topics: []
         },
         {
            name: 'Architectural Design',
            topics: []
         },
         {
            name: 'Interior Design',
            topics: []
         },
         {
            name: 'Other Design',
            topics: []
         }
      ]
   },
   {
      name: 'Marketing',
      topics: [
         {
            name: 'Digital Marketing',
            topics: []
         },
         {
            name: 'Search Engine Optimization',
            topics: []
         },
         {
            name: 'Social Media Marketing',
            topics: []
         },
         {
            name: 'Branding',
            topics: []
         },
         {
            name: 'Marketing Fundamentals',
            topics: []
         },
         {
            name: 'Marketing Analytics & Automation',
            topics: []
         },
         {
            name: 'Public Relations',
            topics: []
         },
         {
            name: 'Paid Advertising',
            topics: []
         },
         {
            name: 'Video & Mobile Marketing',
            topics: []
         },
         {
            name: 'Content Marketing',
            topics: []
         },
         {
            name: 'Growth Hacking',
            topics: []
         },
         {
            name: 'Affiliate Marketing',
            topics: []
         },
         {
            name: 'Product Marketing',
            topics: []
         },
         {
            name: 'Other Marketing',
            topics: []
         }
      ]
   },
   {
      name: 'Lifestyle',
      topics: [
         {
            name: 'Arts & Crafts',
            topics: []
         },
         {
            name: 'Beauty & Makeup',
            topics: []
         },
         {
            name: 'Esoteric Practices',
            topics: []
         },
         {
            name: 'Food & Beverage',
            topics: []
         },
         {
            name: 'Gaming',
            topics: []
         },
         {
            name: 'Home Improvement & Gardening',
            topics: []
         },
         {
            name: 'Pet Care & Training',
            topics: []
         },
         {
            name: 'Travel',
            topics: []
         },
         {
            name: 'Other Lifestyle',
            topics: []
         }
      ]
   },
   {
      name: 'Photography & Video',
      topics: [
         {
            name: 'Digital Photography',
            topics: []
         },
         {
            name: 'Photography',
            topics: []
         },
         {
            name: 'Portrait Photography',
            topics: []
         },
         {
            name: 'Photography Tools',
            topics: []
         },
         {
            name: 'Commercial Photography',
            topics: []
         },
         {
            name: 'Video Design',
            topics: []
         },
         {
            name: 'Other Photography & Video',
            topics: []
         }
      ]
   },
   {
      name: 'Health & Fitness',
      topics: [
         {
            name: 'Fitness',
            topics: []
         },
         {
            name: 'General Health',
            topics: []
         },
         {
            name: 'Sports',
            topics: []
         },
         {
            name: 'Nutrition & Diet',
            topics: []
         },
         {
            name: 'Yoga',
            topics: []
         },
         {
            name: 'Mental Health',
            topics: []
         },
         {
            name: 'Martial Arts & Self Defense',
            topics: []
         },
         {
            name: 'Saftey & First Aid',
            topics: []
         },
         {
            name: 'Dance',
            topics: []
         },
         {
            name: 'Meditation',
            topics: []
         },
         {
            name: 'Other Health & Fitness',
            topics: []
         }
      ]
   },
   {
      name: 'Music',
      topics: [
         {
            name: 'Instruments',
            topics: []
         },
         {
            name: 'Music Production',
            topics: []
         },
         {
            name: 'Music Fundamentals',
            topics: []
         },
         {
            name: 'Vocal',
            topics: []
         },
         {
            name: 'Music Techniques',
            topics: []
         },
         {
            name: 'Music Software',
            topics: []
         },
         {
            name: 'Other Music',
            topics: []
         }
      ]
   },
   {
      name: 'Teaching & Academics',
      topics: [
         {
            name: 'Engineering',
            topics: []
         },
         {
            name: 'Humanities',
            topics: []
         },
         {
            name: 'Math',
            topics: []
         },
         {
            name: 'Science',
            topics: []
         },
         {
            name: 'Online Education',
            topics: []
         },
         {
            name: 'Social Science',
            topics: []
         },
         {
            name: 'Language Learning',
            topics: []
         },
         {
            name: 'Teacher Training',
            topics: []
         },
         {
            name: 'Test Prep',
            topics: []
         },
         {
            name: 'Other Teaching & Academics',
            topics: []
         }
      ]
   }
]
