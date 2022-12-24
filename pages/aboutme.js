import Header from '../components/header.js';
export default function About() {
    return (
        <div>
            <Header/>
            <div>
                <h1 className='content'>About Me</h1>
                <h2 className='content'> Introduction </h2>
                <p className='content'>
                    Hello, my name is Jacob Williams (I usually go by Jake) and I am a software developer. I am very passionate about this field
                    and truly love that it requires me to learn something new every day.
                    I primarily work on writing hardware testing software and providing software engineering support to other teams.
                    My primary language is python, which makes up the bulk of my work, however I am competent with javascript/node/react as well.
                    My self-taught learning journey has given me exposure to numerous other languages and programming paradigms. 
                </p>
                <br/>
                <h2 className='content'> Professional background</h2>
                <p className='content'>
                    I am currently a Junior Software Developer at Sigma Design. My main duties involve developing software to test experimental hardware, making UI improvements,
                    and providing engineering support to other teams. In test developement I could be doing anything from writing binary values to registers to front end web developement to
                     working with other engineering teams to develop test criteria. Due to this test developement, my role involves lot of coordinating with other teams, both interal and external.
                    I have been in this role since April 2022, but was formally promoted in May 2022. I was initially given a 90 day trial run, but I did well enough to be promoted early.
                    Prior to becoming a software developer, I was an engineering technician, also at sigma design on the same project I now develop software for.
                    I have found this combination of skills to be exceedingly useful, as familiarity with the hardware has helped me develop tests, and having used the
                    software that I now develop has given me good insight into useful features and UI improvements.
                </p>
                <br/>
                <h2 className='content'> My path to programming </h2>
                <p className='content'>
                    My path to where I am now has been a winding one, to be sure. My first experience coding was when I was a teenager, trying to learn python 2
                    on codecademy. I didn't make it too far and shelved the project for a while. I picked coding back up for a little while going to Clark College for
                    electrical engineering (didn't make it terribly far in that venture either) taking a c programming course. Eventually I decided that college was
                    not the right path for me and spent some time not sure what to do with my life, working in retail. While I was figuring out what to do with my life,
                    I learned about the numerous people who work as programmers despite not having degrees. After this, I went back to codecademy and spent the next few years
                    learning to code. I intially took the computer science track they had which taught me a lot about python and some basic data structures and algorithms
                    but taught me nothing about how to actually develop real applications for where to go next. After that I went through the c# class they had, which was
                    great but left me with the same problem. I spent some time in the data science track, which was helpful, but not particularly interesting to me. 
                    Eventually, codecademy came out with a backend developement course, which finally offered an actual direction. I took that course and shortly after
                    made my first real project, CRUDit, a simplified reddit clone. from then on I shifted away from taking courses and dove into projects. About a year later
                    , I talked to my manager at the time about my career aspirations and she let me spend a lot of time shadowing a software engineer. Unfortunately, he left
                    the company about a month after I started learning from him. After that, I was told by the software at the time that he wasn't interested in hiring people
                    with no degree. Time went on, and that manager left while the junior developement position that had opened up when the engineer I shadowed left was still open.
                    I siezed the oppurtunity and applied for the junior engineer position again, from which I was offered a 90 day trial run, where I would work on the software
                    team, but not change title or pay. Evidently I did well, because I was made permanent a month later. In the end, while a direct route would have been faster,
                    I think learning pieces from all those different courses has helped me develop into a jack of all trades, quite well suited for the work I do now. As for the
                    future, I want to move into DevOps since it combines two of my big interests in computer science.
                </p>
            </div>
        </div>
    )
}