import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render() {
    return (
      <div>
        <h1 style={{paddingLeft:"600px"}}>Gaurav Dubey</h1>
        <h2 style={{paddingLeft:"550px"}}>Lovely Professional Univrsity </h2><br/>
       
        <div class="row">
       

          <div>
                      <p>
              <br/><br/><br/><br/><br />My name is Gaurav Dubey a tech enthusat and programmer always ready to explore this tech world.I have been development website from last 2 yeas using differnt technology
              <ul>
                <li><b>Html</b></li>
                <li><b>CSS</b></li>
                <li><b>JavaScript</b></li>
                <li><b>Node js</b></li></ul></p>
          </div>
          
          <div>
          <br/><br/><br/><br/><br/><br/><br/>

          <a href="www.facebook.com"><b>Facebook</b></a><br/>
          <a href="www.twitter.com" ><b>Twitter</b></a><br/>
          <a href="www.instagram.com" ><b>Instagram</b></a><br/>
          <a href="www.linkedin.com" ><b>LinkedIn</b></a><br/>
          </div>

        </div>
      </div>
    );
  } 
}

export default App;
