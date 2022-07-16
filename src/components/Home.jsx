import React from 'react'

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='home'>
        <h2>Fun facts about coding / programming</h2>
        <img className='img-fluid img-thumbnail' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" alt="Chia Fruit Shake" />
          <blockquote className='blockquote text-center'>
            <p className="homepar"> 
                <strong>1.</strong> There are around 700 separate programming languages.
                Amongst this list, some of the most popular languages are Javascript, Swift,
                  Scala, Python, PHP, Go, Rust, Ruby, and C#, with millions of users utilizing 
                  them in both their careers and personal projects. However, new programming 
                  languages are constantly being created.
            </p>
            <footer className='blockquote-footer'><cite title='14 Cool Facts About Coding & Programming'><a href='https://funtech.co.uk/latest/cool-facts-about-coding-programming'>FunTech</a></cite></footer>  
          </blockquote>
          <blockquote className='blockquote text-center'>
            <p className='homepar'>
              <strong>2.</strong> According to many online studies, the most disliked programming languages
                  are Perl, Delphi, and VBA With PHP, Objective-C, Coffeescript, and Ruby following 
                  close behind them. Funnily enough, two of the entries in this list, PHP and Ruby, 
                  are both still extremely popular with users regardless of how the community views 
                  them as a whole.
            </p>
            <footer className='blockquote-footer'><cite title='14 Cool Facts About Coding & Programming'><a href='https://funtech.co.uk/latest/cool-facts-about-coding-programming'>FunTech</a></cite></footer>  
          </blockquote>
          <blockquote className='blockquote text-center'>
            <p className='homepar'>
              <strong>3.</strong> Recent studies show that around 70% of coding jobs have nothing to do with technology at all
                That’s right, you or your child could learn to program and apply this knowledge to topics 
                completely separate from technology – like nature studies, geography research, and film and design.
            </p>
            <footer className='blockquote-footer'><cite title='14 Cool Facts About Coding & Programming'><a href='https://funtech.co.uk/latest/cool-facts-about-coding-programming'>FunTech</a></cite></footer>  
          </blockquote>
      </div>
    </div >
  )
}

export default Home
