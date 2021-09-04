import axios from "axios";
import React,{Component} from "react";
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import baseURL from './serviceConfig';
import Loader from './appLoader';
import './App.scss';

export default class MyApp extends Component{

  constructor(){
    super();
    this.state={
      response:'',
      isLoading:true,
      isGlobalError:false,
      limit:10 // Load 5 records at initial
    }
  }

  componentDidMount() {   
    const {limit} = {...this.state};
    this.fetchData(limit);   
  };

  fetchData=(limit=5)=>{
    let url = baseURL+limit;
     axios.get(url).then(response => {
        if(response !=null){
          this.setState({isLoading:false,response});
        }else{
          this.setState({isLoading:false,isGlobalError:true});
        }
      }).catch(error=>{
        this.setState({isLoading:false,isGlobalError:true});
        console.log('error in service call::',JSON.stringify(error));
      });
  }
    

  render(){
    let {isLoading,isGlobalError,response} = {...this.state};

    return (
      <React.Fragment>
        {isLoading ? <Loader />: isGlobalError ? 'The service is temproarily unavialble':
          <React.Fragment>
            <HeaderComponent />
            <MainComponent items={response} />
            <FooterComponent />
          </React.Fragment>
        }

      </React.Fragment>
    );
  }
}