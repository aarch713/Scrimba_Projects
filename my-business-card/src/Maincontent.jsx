

export default function Maincontent(){
    return(
        <main>
            <div className ="name">
                <h1>Aaron Chai</h1>
                <h2>Frontend Developer | Software Engineer</h2>
                <p hidden>website link</p>
            </div>

            <div className ='buttons'>
                <a href= "mailto: aarch.jobinfo@gmail.com" className="email"><i class="fa-regular fa-envelope"></i><p>Email</p></a>
                <a href="https://www.linkedin.com/in/yalun-chai-867b51227/" className="linkedin" target="_blank"><i class="fa-brands fa-linkedin"></i><p>LinkedIn</p></a>
            </div>

            <div className ='des'>
                <h1>About</h1>
                <p> I am a Computer Science graduate from San Diego State University with experience
                    in web development, programming, and e-commerce. I have developed web applications,
                    optimized interfaces, and automated tasks to boost efficiency. My roles have included
                    IT Specialist, Product Associate, UI Designer, and Web Developer. I am looking to apply
                    my skills in a dynamic, growth-oriented environment.</p>
                <h1>Skill</h1>
                <p>
                Languages: Java, Python, JavaScript, HTML, CSS<br/>
Frameworks: React, jQuery<br/>
Web Development: WordPress, Shopify<br/>
E-commerce: Amazon, Wayfair, Home Depot, Walmart, Lowe's<br/>
UI/UX: Web and iOS design
</p>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet
fanatic. Bacon buff. Entrepreneur. Travel geek. Pop
culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}