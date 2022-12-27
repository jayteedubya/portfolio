import Header from '../components/header.js';
export default function Home() {
  return (
    <div>
      <Header/>
      <div className='content'>
        <h1> Welcome! </h1>
        <h2> Introduction </h2>
        <p>
          Hello and welcome to my portfolio site! My name is Jacob Williams and I am a software developer.
          My primary interests in the software sphere are backend, embedded, dev ops, and machine learning.
          My experience is fairly varied, having dabbled in everything from the last sentence plus some front end developement.
          I am self-taught/not formallly trained and have been writing code in some capacity since I was sixteen.
          For more on my experience and knowledge, check out my resume page, where you'll find my current resume.
        </p>
        <h2>My Skill Set</h2>
        <p> while this isn't a comprehensive list, it is enough to give you a good idea of the areas I've worked in and my priorities as a developer. </p>
        <h3> Primary Skills </h3>
        <p>These are the technologies/tools I am very well experienced in.</p>
        <h4> Python </h4>
        <p>
          In my current position, python is my primary programming language. I use it in my work to solve all kinds of problems, from creating hardware tests
          to backend work for our test server. It is also the first language I really learned in depth and the one I have spent the most time with. You could
          say I think in terms of python when it comes to solving/modelling problems.
        </p>
        <h4> Javascript </h4>
        <p>
          Javascript is another language I have written in for a long time, but I don't use it all that often in my daily work. Many of my personal projects 
          have been written using javascript (via node for server side), and react as my client side framework of choice. I enjoy javascript most of the time, 
          until its quirks start showing, but I have written enough now that I usually can avoid those quirks or troubleshoot them quickly.
        </p>
        <h4> React </h4>
        <p>
          React is my front end frame of choice. I find it makes the most sense to me. I tend to lean toward using class based components, however I am making efforts
          to learn to use functional components as well (this whole site was built using them). After having used html and pure JS in my first web project, being able
          to use jsx to having my javascript directly in my html was a breath of fresh air. I've used it since then, and other dabbling a little bit with vue, 
          haven't looked back.
        </p>
        <h4> Markdown/Documentation/confluence </h4>
        <p> 
          While learning markdown isn't particularly difficult, making good documentation is. I put a high priority on making sure I have clear and understandable
          documentation, especially when a project is put on hold or being handed off to another developer. I would rather too specific than too vague, and I make 
          it my goal to get everything out of my head and into a document. It is also handy to have these docs written in markdown, because it translates well into
          confluence, GitHub/GitLab, Jira tickets, and other places.
        </p>
        <h3> Secondary Skills </h3>
        <p>these are skill that I have used in the past, but don't use often.</p>
        <h4> git/GitLab </h4>
        <p> 
          I have a solid handle on a normal flows (branching, merges, etc) but the oddball issue that come up once every couple month are where my knowledge breaks down. 
          99% of the time I know what to do with git, but that 1% of the time where things break is what separates me from an expert.
        </p>
        <h4> PostgreSQL </h4>
        <p>
          I have a decent handle on using postgres, but I don't use it often enough to call it a primary skill. Because I primarily use it in my personal projects,
          I haven't developed a professional level of skill, but I have a solid foundation. I also have only used it with relatively small databases, around 4 tables.
        </p>
        <h4> Linux/Bash </h4>
        <p>
          I have a solid handle on the basics of Bash, and I do use it on a regular basis as part of my job. Linux administration, however, is not my 
          primary responsibilty, I mostly only handle some specific config pertaining directly to the tests I write. Because of that, I haven't developed
          the level of familiarity a daily user would.
        </p>
        <h3> Low experience skills </h3>
        <p> These are skills that I have familiarity with, but have never built anything substantial with. I define this level as "I would know what to google" </p>
        <h4> C </h4>
        <p> 
          I have completed a course, written some CLI programs, and done a little bit of arduino programming with C. I know the basics of the language, 
          kind of understand pointers (but not fluently), and know enough I could probably muddle through a project. It is on my list to learn better, but for
          nopw this is where I am with it.
        </p>
        <h4> C# </h4>
        <p> 
          Similar to my experience with C, I have taken a course on it and made some small projects, but nothing substantial. I know the syntax well enough to make
          small contributions right away, but starting a project from scratch would be an initial struggle.
        </p>
      </div>
    </div>
  )
}
