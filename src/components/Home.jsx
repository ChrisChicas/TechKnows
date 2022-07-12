import React from 'react'

const Home = () => {
  return (
    <main>
      <div className='homejs'>
        <h2 >Fun facts about coding / programming</h2>
        <img  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" alt="Chia Fruit Shake" />
          <p className="parajs"> 
              1. There are around 700 separate programming languages
              Amongst this list, some of the most popular languages are Javascript, Swift,
               Scala, Python, PHP, Go, Rust, Ruby, and C#, with millions of users utilizing 
               them in both their careers and personal projects. However, new programming 
               languages are constantly being created.

              2.  According to many online studies, the most disliked programming languages
               are Perl, Delphi, and VBA With PHP, Objective-C, Coffeescript, and Ruby following 
               close behind them. Funnily enough, two of the entries in this list, PHP and Ruby, 
               are both still extremely popular with users regardless of how the community views 
               them as a whole.

              3. Recent studies show that around 70% of coding jobs have nothing to do with technology at all
              That’s right, you or your child could learn to program and apply this knowledge to topics 
              completely separate from technology – like nature studies, geography research, and film and design.
          </p>
      </div >
      <div className="footer">
          <h3>CONTACT</h3>
          <div className="footerbtn">
            <div>
            <a href='https://www.linkedin.com/in/olatunde-adetayo-7440b0210/'><i className="fab fa-linkedin"></i></a>
            </div>
            <div>
              <a href='https://github.com/QuadrupleTunde'><i className="fab fa-github"></i></a>
            </div>
            <div>
              <a href='mailto:ttayo9026@gmail.com'><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home
