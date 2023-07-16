import './job-apply.css';
import {useState} from 'react';

export default function JobApply(){
    const jobSArray = [
        {
            'title': 'Blockchain Developer',
            'company': 'Overmind',
            'location': 'Canada Remote',
            'job-description': `Overmind is a platform where web3 developers compete on coding puzzles to earn prizes and on-chain credentials. Our mission is to enable more developers to enter web3, prove their creativity, and access rare opportunities.


            We believe that one of the biggest drags on crypto’s growth is the friction and uncertainty that developers face in the transition from web2 to web3. We are introducing “solve-to-earn” to de-risk the time and energy investment required to learn and practice web3 development, thereby offering a real opportunity to enter the space to significantly more people. Solving challenges on Overmind creates a transparent, verifiable track record of one’s skill and creativity, forming the first on-chain resume we have seen that contains real signal. We strongly believe that on-chain reputation will be one of the foundational layers of the crypto economy, and that the resume is where it all starts.
            
            
            The Overmind is formed by the collective intelligence of those bold enough to join it. Enter at overmind.xyz.
            
            
            The Role
            
            You will develop the core smart contracts powering Overmind on multiple chains. You will develop puzzles and challenges for developers to crack. You will work closely with a small team and take ownership of important projects from the get-go.
            
            
            Skills & Experience
            
            Essential Requirements
            
            - 3+ years of smart contract development experience
            
            - Love for coding puzzles and challenges
            
            - English fluency (written & oral)
            
            
            Nice-to-haves
            
            - Experience with Move
            
            - Experience writing Layer 1 code, e.g. EVM or Tendermint
            
            - Experience with coding competitions, e.g. ACM ICPC or Topcoder
            
            - Experience with remote work at startups
            
            - Bachelors or advanced degree in Computer Science or related subject
            
            
            Needless to say, none of the above supersedes your intellectual curiosity and drive to build world-changing products.
            
            
            Overmind Quests
            
            Solve any of the live competitive quests at https://overmind.xyz/quests, prove your technical skills, and increase your interview chances.
            Ping us on the Overmind Discord with your submission details and we will expedite the process for you.`
            
        },
        {
            'title': 'DevOps Engineer',
            'company': 'Shakudo',
            'location': 'Toronto, ON On-site',
            'job-description': `At Shakudo,  we are revolutionizing data-driven organizations with our comprehensive data platform. Our platform offers evolving, fully managed, top-tier open-source components that cater to each business's distinct requirements, reducing operational expenses and improving cost efficiency.
            
            We are in search of a seasoned DevOps Engineer, equipped with extensive experience in automation, CI/CD, and infrastructure management, to join our team. As a DevOps Engineer, you will be tasked with maintaining and improving our infrastructure's reliability, scalability, and performance. In this pivotal role, you'll be working closely with our solution engineering and product engineering teams, facilitating the smooth deployment and operation of our software products with customers.
            

            Responsibilities:
            
            Operate, evolve and maintain Shakudo deployments across our customer base using SOTA Kubernetes tooling.
            Operate and be the centre of knowledge for cloud managed services that interface with the Shakudo Kubernetes clusters.
            Execute and manage deployments, product update rollouts, and maintenance in collaboration with the engineering team.
            Monitor and troubleshoot software and system issues in the production environment, identifying opportunities for infrastructure improvement.
            Operate GPU servers and cloud node pools ensuring consistent operation with minimal downtime
            Prepare and deliver technical demonstrations and presentations to internal teams, showcasing the effectiveness of our DevOps practices.
            Create and maintain technical documentation, tutorials, and demos to educate our team on DevOps practices and related technologies.
            Write engaging blog posts and social media content that highlights our platform capabilities and fosters engagement with the right audience.
            Stay updated with industry trends and advancements in DevOps, cloud computing, and data tooling.
            
            Requirements:
            
            3+ years of experience in a DevOps role with a focus on automation, Kubernetes, and infrastructure management.
            3+ years of experience in managing and deploying cloud services with tools like Kubernetes and Terraform.
            Familiarity with the following stack: Kubernetes, Terraform, Helm, Python, CUDA, Go, AWS, GCP, Azure, PostgreSQL, Typescript.
            Bachelor's degree in Computer Science or Engineering.
            Strong problem-solving skills with the ability to adapt to new technologies quickly.
            Excellent communication, presentation, and technical writing skills.
            Experience in creating documentation and content for technical audiences.
            Ability to work independently and as part of a team.
            
            Shakudo is an equal opportunity employer and encourages candidates of all backgrounds to apply. If you are a skilled DevOps Engineer with a passion for delivering excellent technical solutions, we would love to hear from you. Apply today to join our growing team and help us shape the future of data-driven products.`,
        },
        {
            'title': 'Staff Blockchain Engineer - Developer',
            'company': 'Coinbase',
            'location': ' Waterloo, ON',
            'job-description': `At Coinbase, our mission is to increase economic freedom around the world, and we couldn’t do this without hiring the best people. We’re a group of hard-working overachievers who are deeply focused on building the future of finance and Web3 for our users across the globe, whether they’re trading, storing, staking or using crypto. Know those people who always lead the group project? That’s us.

            There are a few things we look for across all hires we make at Coinbase, regardless of role or team. First, we look for candidates who will thrive in a culture like ours, where we default to trust, embrace feedback, and disrupt ourselves. Second, we expect all employees to commit to our mission-focused approach to our work. Finally, we seek people who are excited to learn about and live crypto, because those are the folks who enjoy the intense moments in our sprint and recharge work culture. We’re a remote-first company looking to hire the absolute best talent all over the world.
            
            Ready to #LiveCrypto? Who you are:
            
            You’ve got positive energy. You’re optimistic about the future and determined to get there.
            You’re never tired of learning. You want to be a pro in bleeding edge tech like DeFi, NFTs, DAOs, and Web 3.0.
            You appreciate direct communication. You’re both an active communicator and an eager listener - because let’s face it, you can’t have one without the other. You’re cool with candid feedback and see every setback as an opportunity to grow.
            You can pivot on the fly. Crypto is constantly evolving, so our priorities do, too. What you worked on last month may not be what you work on today, and that excites you. You’re not looking for a boring job.
            You have a “can do” attitude. Our teams create high-quality work on quick timelines. Owning a problem doesn’t scare you, but rather empowers you to take 100% responsibility for achieving our mission.
            You want to be part of a winning team. We’re stronger together, and you’re a person who embraces being pushed out of your comfort zone.
            
            The mission of the Developer Product Group is to make it incredibly easy to build onchain. Our suite of products includes: Base, WaaS, and Cloud. Our most recent offering, Base, is an Ethereum L2 built to scale the crypto economy, the foundation for continuing the onchain journey. Wallet-as-a-Service (WaaS) is an API-based crypto platform that will enable developers to interact with heterogeneous cryptocurrency networks (such as Bitcoin, Ethereum and Cardano) in a simple, secure and scalable way. Coinbase Cloud provides web3 APIs, services, and infrastructure to power the next generation of software builders.
            
            We are looking for a Staff Blockchain Engineer to join the Base team, to enable and accelerate the success of Base. You’ll be working with us as a Core Dev on the open-source OP Stack, which will power the next generation of onchain activity through the SuperChain. In addition to direct protocol work, you’ll be part of the team building and running the infrastructure, ensuring the systems that sustain the Base chain are best-in-industry.
            
            What You’ll Be Doing
            
            Architect and develop distributed systems with high-availability and redundancy
            Manage individual projects priorities, deadlines and deliverables with your technical expertise
            Building key components of the OP Stack to further the decentralization of Base and other L2s
            Mentor and train other team members on design techniques and coding standards
            Design and implement foundational infrastructure components used by every L2 team using the OP Stack
            Assisting with Base oncall, debugging the issues that can arise with our L2 blockchain in production and testnet
            Write high quality, well tested code that can sustain billions of dollars of TVL
            
            What We Look For In You
            
            8+ years of experience in software engineering
            You’ve experienced architecting and developing solutions to ambiguous problems with significant impact
            You’re passionate about bringing the next billion users onchain
            
            Nice To Haves
            
            You have experience with Blockchains (such as Bitcoin, Ethereum etc.)
            You have experience building and monitoring highly-available infrastructure
            You’ve worked with Golang, Geth, Hardhat, Solidity
            You have contributed to the SuperChain via either OP Stack contributions or Base contributions
            You’ve built financial, high reliability or security systems
            
            Job #: GBLE06NA
            
            Commitment to Equal Opportunity
            
            Coinbase is committed to diversity in its workforce and is proud to be an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, creed, gender, national origin, age, disability, veteran status, sex, gender expression or identity, sexual orientation or any other basis protected by applicable law. Coinbase will also consider for employment qualified applicants with criminal histories in a manner consistent with applicable federal, state and local law. For US applicants, you may view Pay Transparency, Employee Rights and Know Your Rights notices by clicking on their corresponding links. Additionally, Coinbase participates in the E-Verify program in certain locations, as required by law.
            
            Coinbase is also committed to providing reasonable accommodations to individuals with disabilities. If you need a reasonable accommodation because of a disability for any part of the employment process, please send an e-mail to accommodations[at]coinbase.com and let us know the nature of your request and your contact information. For quick access to screen reading technology compatible with this site click here to download a free compatible screen reader (free step by step tutorial can be found here).
            
            Global Data Privacy Notice for Job Candidates and Applicants
            
            Depending on your location, the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) may regulate the way we manage the data of job applicants. Our full notice outlining how data will be processed as part of the application procedure for applicable locations is available here. By submitting your application, you are agreeing to our use and processing of your data as required. For US applicants only, by submitting your application you are agreeing to arbitration of disputes as outlined here.`
        },
        {
            'title': 'Node.js Developer',
            'company': 'Clevertech',
            'location': 'Ottawa, ON Remote',
            'job-description': `Experience Remote done Right.

            Over 20 years of remote experience, all 500+ staff are 100% remote and we still grow vibrant relationships, provide exceptional opportunities for career growth while working with stellar clients on ambitious projects
            
            
            What we're working on:
            
            Enterprise companies turn to us to help them launch innovative digital products that interact with hundreds of millions of customers, transactions and data points. The problems we solve every day are real and require creativity, grit and determination. We are building a culture that challenges norms while fostering experimentation and personal growth. In order to grasp the scale of problems we face, ideally, you have some exposure to Logistics, FinTech, Transportation, Insurance, Media or other complex multifactor industries
            
            
            Requirements
            
            7+ years of professional experience (A technical assessment will be required)
            Senior-level experience of at least 4 years of experience with Javascript, NodeJS, Express, Mongo
            Ability to create clean, modern, testable, well-documented code
            Serverless experience with AWS lambda or Azure functions
            Advanced English fluency, verbal and written
            Professional, empathic, team player
            Problem solver, proactive, go-getter
            
            
            At Clevertech, you can expect that you will:
            
            Be 100% dedicated to one project at a time so that you can hone your skills, innovate and grow
            Be a part of a team of talented and friendly senior-level developers
            Work on projects that allow you to use cutting edge tech. We believe in constantly evolving your mastery
            
            The result? We produce meaningful work and we are truly proud and excited to be creating waves in an industry under transformation.
            
            
            Benefits of joining the Clevertech team:
            
            Competitive Salaries
            1 Month Paid Time Off For You
            Personal Development Fund
            Tenure-Based Rewards
            Flexible Family Leave
            Clevertech University
            Clevertech Gives Back
            Amazing Culture & Strong Community`
        },
        {
            'title': 'Full-stack engineer - Freelance',
            'company': 'Braintrust ',
            'location': 'Toronto, ON Remote',
            'job-description': `Braintrust is a user-owned talent network that connects you with great jobs with no fees or membership costs—so you keep 100% of what you earn.

            ABOUT THE HIRING PROCESS:
            
            When you join Braintrust, you will be invited to a screening process for Braintrust to learn more about your previous work experiences. Once completed, you will have access to the employer for this role and other top companies that seek high-quality talent. Apply to this job to kick off the process.
            JOB TYPE: Freelance, Contract Position (no agencies/C2C - see notes below)
            LOCATION: Remote - Work from anywhere
            HOURLY RANGE: Our client is looking to pay $40 – $80/hr
            ESTIMATED DURATION: 40h/week - Short term
            BRAINTRUST JOB ID: 6846
            
            THE OPPORTUNITY
            
            Requirements
            Experience writing production code on shipped full-stack apps
            Experience with frontend frameworks like React, Vue, Angular
            Proficiency in programming languages, such as C++, Java, JS, and/or Golang.
            What you’ll be working on
            
            You will be working on iterating on our MVP build (Shopify-like storefront for live streamers), making adjustments to our platform based on week-to-week testing feedback from our users.
            
            Apply Now!
            
            C2C Candidates: This role is not available to C2C candidates working with an agency. If you are a professional contractor who has created an LLC/corp around their consulting practice, this is well aligned with Braintrust and we’d welcome your application.
            
            Braintrust values the multitude of talents and perspectives that a diverse workforce brings. All qualified applicants will receive consideration for employment without regard to race, national origin, religion, age, color, sex, sexual orientation, gender identity, disability, or protected veteran status.`
        },
        {
            'title': 'Systems Development Engineer III, AWS Security',
            'company': 'Amazon Web Services (AWS)',
            'location': 'Toronto, ON Hybrid',
            'job-description': `Automation and innovation are our DNA! Come and build services and systems that allow us to scale via automation.

            The AWS Security Operations Centre (SOC) Software Engineering team is looking for a highly motivated and passionate systems development engineer. You will define, build and support the system design, architecture, and software for internal services that automate activities managed by the SOC. You will get to use the full set of AWS technologies to build these services. The services that you build will be a force multiplier for protecting the AWS cloud for all customers. This will help us preserve our customers’ trust in us. AWS is a world leader in providing highly available and secure infrastructure in the cloud and it powers millions of customers around the globe.
            
            This position will be located in Toronto, ON.
            
            #AWSSOC
            
            #SysDE
            
            #Tech Lead
            
            Mentorship & Career Growth
            
            Our team is dedicated to supporting new team members and we are building an environment that celebrates knowledge sharing and mentorship. We care about your career growth. We assign projects and tasks based on what will help team members develop into a more well-rounded engineer and enable them to take on more complex tasks in the future.
            
            Inclusive and Diverse Culture
            
            Our team is intentional about attracting, developing, and retaining amazing talent from diverse backgrounds. We’re looking for a new teammate who is enthusiastic, empathetic, curious, motivated, reliable, and able to work effectively with a diverse team of peers. We want someone who will help us amplify the positive & inclusive team culture we’ve been building.
            
            Work/Life Balance
            
            Our team puts a high value on work-life balance. Striking a healthy balance between your personal and professional life is crucial to your happiness and success here. We understand that life is challenging and we have a flexible work environment that enables individuals to adjust their work schedule to accommodate personal needs.
            
            Key job responsibilities
            
            Our engineers are responsible for solving problems using technology. You will work with internal customers and stakeholders to understand their pain points and requirements. You will architect and build software that drives automation across logical and physical access control systems. You will be part of a team that values strong intuition, but seek metrics and other data sources to back up assumptions. You will share your knowledge with others and also learn from others. Our team is one where you own everything end to end: design, development, testing, deploying through rapid iteration. You will develop internal solutions that allow us to scaling via automation — and automate away operational inefficiencies. You will also have lots of fun while doing your work.
            
            About The Team
            
            The AWS SOC Engineering team is focused on being a force multiplier for protecting the AWS cloud for all customers. We are building the next generation of innovative services to automate and power the SOC. We have opportunities and ways for you to make big impact at AWS and grow your career. Join us!
            
            Basic Qualifications
            
            5+ years of programming with at least one modern language such as C++, C#, Java, Python, Golang, PowerShell, Ruby experience
            5+ years of non-internship professional software development experience
            4+ years of designing or architecting (design patterns, reliability and scaling) of new and existing systems experience
            Experience leading the design, build and deployment of complex and performant (reliable and scalable) software solutions in production
            
            Preferred Qualifications
            
            Knowledge of engineering practices and patterns for the full software/hardware/networks development life cycle, including coding standards, code reviews, source control management, build processes, testing, certification, and livesite operations
            
            Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, disability, age, or other legally protected status. If you would like to request an accommodation, please notify your Recruiter.
            
            Company - Amazon Web Services Canada, In
            
            Job ID: A2366596`
        },
        {
            'title': 'Principal Software Engineer',
            'company': 'Autodesk',
            'location': 'Remote - Canada',
            'job-description': `Job Requisition ID #

            23WD69094
            
            23WD69094, Senior Software Engineer, Remote - Canada
            
            French job description to follow!/La description de poste en français se trouve plus bas!
            
            Position Overview
            
            As a Senior Software Engineer on the Customer Activation team, you will be creating solutions to ensure seamless onboarding for Autodesk Construction Cloud (ACC) customers. This includes features such as user subscription and licensing management, account creation, member invitations, etc. The Customer Activation team's goal is to create critical tooling that sets customers of any size up for success in a wide variety of projects within the ACC platform. We are responsible for making a customer's first experience with the ACC platform smooth and intuitive, and assuring optimal customer growth from the moment they begin using our product.
            
            ACC is a large scale construction management application used by the leading construction and engineering firms in the world to organize and deliver on large scale projects. ACC connects teams and project data from design to done—reducing risk, protecting profits, and increasing predictability. At Autodesk Construction Solutions, we have 5 separate cloud ecosystems, over 400 developers across 9 time zones, innovating 29 individual products. To scale and deliver value to our customers effectively we need powerful tools and administration services to make the enterprise experience exciting.
            
            Responsibilities
            Research, conceive, design, develop, and test features that help customers onboard into the ACC platform
            Collaborate with a variety of teams in ACS, both domestic and abroad
            Write unit / integration tests to achieve a better and more robust code
            Take an active role in code reviews & pull requests, get your own code reviewed by the team and become a better developer overall
            Set and maintain high coding standards
            Mentor fellow developers and lead by example
            Minimum Qualifications
            BS or MS in a technical field, or significant equivalent experience
            3+ years developing solutions using Node.js and React
            Expertise with SQL/Postgres DB
            Ability to design scalable and resilient technical solutions
            Excellent communication skills with the ability to converse fluently with multiple types of audiences ranging from managers, customers, and software developers
            Ability to convert complex software problems into technical tasks
            Ability to collaborate and work well in a remote-friendly distributed team to deliver on team goals
            Flexibility under changing conditions and ability to multi-task between projects`
        },
        {
            'title': 'Senior Credit Technology Developer (C++)',
            'company': 'Citi',
            'location': 'Mississauga, ON Hybrid',
            'job-description': `Job Id: 23656878

            The Senior Developer (C++) will be a key member of the Analytics Implementation team within Wholesale Credit Risk area. The team focuses on the design, implementation, delivery and support of models for the firms’ Wholesale Credit Stress (CCAR, ICAAP) and Counterparty Credit Risk (Basel4, PFE) models. In particular, for this role, the successful candidate will participate in the software development, delivery and maintenance of high-performance analytics frameworks and libraries covering wholesale credit risk products. This will require the candidates to work with other Wholesale Credit model developers and business partners to analyze new or enhanced modelling requirements and complete coding and testing of the software.
            
            Responsibilities
            
            You will be joining a team responsible for developing and supporting models to quantify and manage counterparty credit risk reporting
            This group is responsible for margin modeling as well as credit risk capital calculation
            Design and implement new cutting-edge, cross-asset, counterparty and funding risk simulation models as well as enhance the existing library
            Help on-board new products into the counterparty risk valuation framework
            Partner with multiple development and management teams to ensure appropriate integration of functions to meet goals as well as identify and define necessary system enhancements to deploy new products and process improvements
            Ensure clear documentation and testing of models
            
            Qualifications
            
            6-10 years related experience required
            Candidate with an understanding of Counterparty Credit Risk Potential Future Exposure, Margin (ISDA MNA and CSA), Collateral Haircut, Liquidity and Period of Risk, Settlement Risk preferred.
            Degree in Math, Math Finance, Physics, Computer Science, Engineering or similar
            Deep understanding of probability theory, stochastic processes, PDEs, and numerical methods
            Extensive C/C++ coding experience
            Excellent communication skills (written and verbal)
            
            Citi Canada is an equal opportunity employer. Accordingly, we will make accommodations to respond to the needs of people with disabilities (including, without limitation, physical and mental health disabilities) during the recruitment process and otherwise in accordance with law. Individuals who view themselves as Aboriginals, members of visible minority or racialized communities, and people with disabilities are encouraged to apply.`
        },
        
    ];

    const [jobId, setJobId] = useState(0);
    const [jobName, setJobName] = useState('');
    const [jobCompany, setJobCompany] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');


    const jobClickHandler = (id) => {
        setJobId(id);
        setJobName(jobSArray[jobId]['title'])
        setJobCompany(jobSArray[jobId]['company'])
        setJobLocation(jobSArray[jobId]['location'])
        setJobDescription(jobSArray[jobId]['job-description'])
    }
    return (<div className='job-apply-dashboard'>
        <div className='job-list-column'>

            <button className='blocks' onClick={() => jobClickHandler(0)}>
                <div className='block-header'>
                {jobSArray[0]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[0]['company']}
                    <br />{jobSArray[0]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(1)}>
                <div className='block-header'>
                {jobSArray[1]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[1]['company']}
                    <br />{jobSArray[1]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(2)}>
                <div className='block-header'>
                {jobSArray[2]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[2]['company']}
                    <br />{jobSArray[2]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(3)}>
                <div className='block-header'>
                {jobSArray[3]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[3]['company']}
                    <br />{jobSArray[3]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(4)}>
                <div className='block-header'>
                {jobSArray[4]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[4]['company']}
                    <br />{jobSArray[4]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(5)}>
                <div className='block-header'>
                {jobSArray[5]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[5]['company']}
                    <br />{jobSArray[5]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(6)}>
                <div className='block-header'>
                {jobSArray[6]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[6]['company']}
                    <br />{jobSArray[6]['location']}
                </div>
            </button>
            <button className='blocks' onClick={() => jobClickHandler(7)}>
                <div className='block-header'>
                {jobSArray[7]['title']}
                </div>
                <div className='block-body'>
                    {jobSArray[7]['company']}
                    <br />{jobSArray[7]['location']}
                </div>
            </button>
            
        </div>
        <div className='job-display-column'>
            <div className='blocks'>
                <div className='block-header'>
                    {jobName}
                </div>
                <div className='block-body'>
                    {jobCompany}
                    <br /><br />{jobLocation}
                    <br /><br /><button>Apply now</button>
                    <br /><br /><br /><br />{jobDescription}
                </div>
            </div>
        </div>
    </div>);
}