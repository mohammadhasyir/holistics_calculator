import React, {useState} from 'react'
import {Container,Row,Col,Button,Card,DropdownButton,Dropdown,Form} from 'react-bootstrap'
import calculate from '../images/calculate.png'

const initialState = {
  errorPackage:"",
  errorComsize:"",
}

export default function Calculator() {

  const [rawdata,setRawData] = useState();
  const [productdata,setProductData] = useState();
  const [total,setTotal] = useState();
  const [packages,setPackage] = useState();
  const [comsize, setComsize] = useState();
  const [error, setError] = useState({errorPackage:"",errorComsize:""});
  const constant = 555;

  var state = initialState;

  var weightage, company_size, d, n, check,errorCheck=true;

  const rawSlide = (event) =>{
    setRawData(event.target.value);
  }

  const productSlide = (event) =>{
    setProductData(event.target.value);
  }

  const formSubmit = (event) => {
    const dataSubmit = {
      package:"",
      company:"",
      rawmats:"",
      products:""
    };



    dataSubmit.package = event.target.formSelectPackage.value;
    dataSubmit.company = event.target.formSelectComSize.value;
    dataSubmit.rawmats = Number(event.target.formSliderRawMats.value);
    dataSubmit.products = Number(event.target.formSliderNoProducts.value);
   
    if(dataSubmit.package === "default"){
      setError(error =>{
        return {...error,errorPackage:"*Please select a package."}
      });
      errorCheck = false;
    }else{
      errorCheck = true;
    }

    if(dataSubmit.company === "default"){
      setError(error =>{
        return {...error,errorComsize:"*Please select a company size."}
      });
      errorCheck = false;
    }else{
      errorCheck = true;
    }

    if(errorCheck){
      setError(initialState);
    }
    else{
      event.preventDefault();
    }

    //check the company size
    if(dataSubmit.company === "Micro/Small"){
      company_size = 1;
      d = 3;
    }
    if(dataSubmit.company === "Medium/Large"){
      company_size = 2;
      d = 7;
    }

    if(company_size === 1){
      if(dataSubmit.products > 0 && dataSubmit.products <= 50){
        if (dataSubmit.rawmats <= 50){
          weightage = 4.4;
          n = 1;
        }else if(dataSubmit.rawmats > 50 && dataSubmit.rawmats <= 100){
          weightage = 7.4;
          n = 1;
        }else if(dataSubmit.rawmats > 100 && dataSubmit.rawmats <= 150){
          weightage = 10.4;
          n = 2;
        }else if(dataSubmit.rawmats > 150 && dataSubmit.rawmats <= 200){
          weightage = 13.4;
          n = 2;
        }else if(dataSubmit.rawmats > 200 && dataSubmit.rawmats <= 250){
          weightage = 16.4;
          n = 3;
        }else if(dataSubmit.rawmats > 250 && dataSubmit.rawmats <= 300){
          weightage = 19.4;
          n = 3;
        }
      }
      else if(dataSubmit.products > 50 && dataSubmit.products <= 100){
        if (dataSubmit.rawmats <= 50){
          weightage = 7.4;
          n = 2;
        }else if(dataSubmit.rawmats > 50 && dataSubmit.rawmats <= 100){
          weightage = 10.4;
          n = 2;
        }else if(dataSubmit.rawmats > 100 && dataSubmit.rawmats <= 150){
          weightage = 13.4;
          n = 2;
        }else if(dataSubmit.rawmats > 150 && dataSubmit.rawmats <= 200){
          weightage = 16.4;
          n = 2;
        }else if(dataSubmit.rawmats > 200 && dataSubmit.rawmats <= 250){
          weightage = 19.4;
          n = 3;
        }else if(dataSubmit.rawmats > 250 && dataSubmit.rawmats <= 300){
          weightage = 22.4;
          n = 3;
        }
      }
      else if(dataSubmit.products > 100 && dataSubmit.products <=150){
        if (dataSubmit.rawmats <= 50){
          weightage = 10.4;
          n = 3;
        }else if(dataSubmit.rawmats > 50 && dataSubmit.rawmats <= 100){
          weightage = 13.4;
          n = 3;
        }else if(dataSubmit.rawmats > 100 && dataSubmit.rawmats <= 150){
          weightage = 16.4;
          n = 3;
        }else if(dataSubmit.rawmats > 150 && dataSubmit.rawmats <= 200){
          weightage = 19.4;
          n = 3;
        }else if(dataSubmit.rawmats > 200 && dataSubmit.rawmats <= 250){
          weightage = 22.4;
          n = 3;
        }else if(dataSubmit.rawmats > 250 && dataSubmit.rawmats <= 300){
          weightage = 25.4;
          n = 3;
        }
      }
    }

    if(company_size === 2){
      if(dataSubmit.products > 0 && dataSubmit.products <= 50){
        if (dataSubmit.rawmats <= 50){
          weightage = 7.4;
          n = 1;
        }else if(dataSubmit.rawmats > 50 && dataSubmit.rawmats <= 100){
          weightage = 14.4;
          n = 1;
        }else if(dataSubmit.rawmats > 100 && dataSubmit.rawmats <= 150){
          weightage = 21.4;
          n = 2;
        }else if(dataSubmit.rawmats > 150 && dataSubmit.rawmats <= 200){
          weightage = 28.4;
          n = 2;
        }else if(dataSubmit.rawmats > 200 && dataSubmit.rawmats <= 250){
          weightage = 35.4;
          n = 3;
        }else if(dataSubmit.rawmats > 250 && dataSubmit.rawmats <= 300){
          weightage = 42.4;
          n = 3;
        }
      }
      else if(dataSubmit.products > 50 && dataSubmit.products <= 100){
        if (dataSubmit.rawmats <= 50){
          weightage = 14.4;
          n = 2;
        }else if(dataSubmit.rawmats > 50 && dataSubmit.rawmats <= 100){
          weightage = 21.4;
          n = 2;
        }else if(dataSubmit.rawmats > 100 && dataSubmit.rawmats <= 150){
          weightage = 28.4;
          n = 2;
        }else if(dataSubmit.rawmats > 150 && dataSubmit.rawmats <= 200){
          weightage = 35.4;
          n = 2;
        }else if(dataSubmit.rawmats > 200 && dataSubmit.rawmats <= 250){
          weightage = 42.4;
          n = 3;
        }else if(dataSubmit.rawmats > 250 && dataSubmit.rawmats <= 300){
          weightage = 49.4;
          n = 3;
        }
      }
      else if(dataSubmit.products > 100 && dataSubmit.products <=150){
        if (dataSubmit.rawmats <= 50){
          weightage = 21.4;
          n = 3;
        }else if(dataSubmit.rawmats > 50 && dataSubmit.rawmats <= 100){
          weightage = 28.4;
          n = 3;
        }else if(dataSubmit.rawmats > 100 && dataSubmit.rawmats <= 150){
          weightage = 35.4;
          n = 3;
        }else if(dataSubmit.rawmats > 150 && dataSubmit.rawmats <= 200){
          weightage = 42.4;
          n = 3;
        }else if(dataSubmit.rawmats > 200 && dataSubmit.rawmats <= 250){
          weightage = 49.4;
          n = 3;
        }else if(dataSubmit.rawmats > 250 && dataSubmit.rawmats <= 300){
          weightage = 56.4;
          n = 3;
        }
      }
    }

    switch(dataSubmit.package){
      case "Silver":
        setTotal(Math.round(weightage * d * constant));
        break;
      case "Diamond":
        setTotal(Math.round((weightage * d * constant) + (n * 3079)));
        break;
      case "Platinum":
        setTotal(Math.round((weightage * d * constant) + (n * 4079)));
        break;
    }
    
    console.log(error);
    //Math.round(total);
    event.preventDefault();

    
  }

  const testPass = (passData) =>{
    console.log("test "+passData);
  }


  const calculation = () =>{
    
  }




  return (
    <Container>
      <Row>
        <Col sm={8} className="my-4" style={{ textAlign:'left'}}>
          <span style={{fontSize:'22px',fontWeight:'bold',display:'block'}}>Calculate Your Price Here!</span>
          <span style={{fontSize:'15px'}}>Develop by HLSB Dev Team</span>
        </Col>
        <Col sm={4} style={{textAlign:'right'}}>
          <br/>
          <Button style={{backgroundColor:'#6A9C41',fontWeight:'bold',marginRight:'20px',width:'120px',border:0,borderRadius:'10px'}}>FAQ</Button>
          <Button style={{backgroundColor:'#0E2D35',fontWeight:'bold',width:'120px', border:0,borderRadius:'10px'}}>TERMS</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={7} className="p-5" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',textAlign:'left',backgroundColor:'white'}}>
          <Form onSubmit={formSubmit}>
            <Form.Group controlId="formSelectPackage">
              <b>Select Package</b>
                <Form.Control as="select" value={packages} defaultValue={"default"} onChange={(e) => setPackage(e.target.value)} name="packages" style={{width:'300px',marginTop:'10px',height:'35px'}}>
                  <option disabled value={"default"}>Select a package</option>
                  <option>Silver</option>
                  <option>Diamond</option>
                  <option>Platinum</option>
                </Form.Control>
                <div style={{color:"red"}} id="error">{error.errorPackage}</div>
            </Form.Group>
            <Form.Group controlId="formSelectComSize" className="mt-4">
              <b>Company Size</b>
              <div>
                <Form.Control as="select" value={comsize} defaultValue={"default"} onChange={(e) =>setComsize(e.target.value)} name="company" style={{width:'300px',marginTop:'10px',height:'35px'}}>
                  <option disabled value={"default"}>Select a company size</option>
                  <option>Micro/Small</option>
                  <option>Medium/Large</option>
                </Form.Control>
                <div style={{color:"red"}} id="error">{error.errorComsize}</div>
                
              </div>  
            </Form.Group>
            <Row className="mt-4">
              <Col sm={9}>
                <Form.Group controlId="formSliderRawMats">
                  <Form.Label><b>Raw Material</b></Form.Label>
                  <Form.Range name="raw_mats_slider" min={1} max={300} onChange={rawSlide} value={(rawdata) ? rawdata : 1}  />
                </Form.Group>
                <Form.Group controlId="formSliderNoProducts">
                  <Form.Label><b>No. of Products</b></Form.Label>
                  <Form.Range name="products_no" min={1} max={150} onChange={productSlide} value={(productdata) ? productdata : 1} />
                </Form.Group> 
              </Col>
              <Col sm={3}>
                <br/>
                <Form.Control type="text" name="raw_mats" placeholder={rawdata} value={(rawdata) ? rawdata : 1} onChange={rawSlide}/>
                <br/>
                <Form.Control type="text" name="no_products" placeholder={productdata} value ={(productdata) ? productdata : 1} onChange={productSlide}/>
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="d-grid gap-2 mt-5" style={{}}>
                <Button type="submit" style={{backgroundColor:'#0E2D35',borderRadius:0,border:0,fontSize:20}}><b>CALCULATE</b></Button>
              </Col>
            </Row>
          </Form>
          
        </Col>
        <Col sm={1}>
        </Col>
        <Col sm={4} style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',backgroundColor:'white'}} className="position-relative">
        <img src={calculate} style={{width:300,height:300}} className="position-absolute top-50 start-50 translate-middle"/>
          <div style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}} className="position-absolute top-50 start-50 translate-middle">
            <span>TOTAL</span>
            <p>{(check = total !== undefined) ? "RM "+ total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : " "}</p>
          </div>
        </Col>
      </Row>
      </Container>
  )
}
