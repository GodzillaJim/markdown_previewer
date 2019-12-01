import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
var showdown = require('showdown');
var converter = new showdown.Converter();

function App() {
  return (
    <div className="App">
        <Head/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;

class Head extends React.Component{
  render(){
    let headStyles = {
      height:"75px",
      display:"block",
      borderRadius:"15px",
      margin:"5px",
      border:"3px solid #356896"
    }
    return (
      <div>
         <Container>
           <Row style={headStyles}>
             <h1>Markdown Previewer</h1>
           </Row>
         </Container>
      </div>
    );
  }
}
class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {result : converter.makeHtml("Enter your markdown here...")}
    this.converterFunction = this.converterFunction.bind(this);
  }
  converterFunction = () =>{
    let text = document.getElementById("txtArea").value;
    let resultTemp = converter.makeHtml(text);
    this.setState({result:resultTemp});
  }
  render(){
    let text = {
      border:"3px solid #356896",
      borderRadius:"15px",
      width:"48%",
      float:"left",
      maxHeight:"600px",
      minHeight:"400px"
    }
    let textHTML = {
      width:"48%",
      float:"right",
      borderRadius:"15px",
      border:"3px solid #356896",
      maxHeight:"600px",
      minHeight:"400px"
    }
    return(
      
        <Container>
          <Row>
            <Col   style={text}>
              <textarea onChange={this.converterFunction} id="txtArea">
                Enter your markdown here...
              </textarea>
            </Col>
    <Col   style={textHTML}>{this.state.result}</Col>
          </Row>
        </Container>
      
    );
  }
}
class Footer extends React.Component{
  render(){
    return(
      <Container>
        <Row style={{height:"70px",position:"fixed",width:"100%",backgroundColor:"#356896",bottom:"0px"}}></Row>
      </Container>
    );
  }
}