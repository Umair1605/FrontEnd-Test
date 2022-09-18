import { useState, useEffect } from 'react'
import './App.css';
import { Table } from 'react-bootstrap'
import { Navbar, Container } from 'react-bootstrap'
import axios from 'axios'

function App() {
   
  const [data,setData] = useState([]);
  const getUser = async() => {
    try {
      const response = await axios.get("https://nft-event.herokuapp.com/api/getUser");
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUser();
  },[])
  return (
    <div className="App">
      <>
      <Navbar expand="lg" bg="secondary" variant="dark">
          <Container>
              <Navbar.Brand>
                  &nbsp;PLUTON
              </Navbar.Brand>            
          </Container>
      </Navbar>
      </>
      <div >
          <div className="flex justify-center">
          <div className="px-5 container" style={{paddingTop:30 }}>
            <Table  striped bordered hover variant="dark" >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Account No.</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {data.map((info,i)=>(
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{info.accountNo}</td>
                    <td>{info.accountBalanace}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
