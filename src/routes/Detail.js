import React from 'react'

class Detail extends React.Component{//구조분해할당 한 코드. 
    //리다이랙션
    componentDidMount(){//detail 컴포넌트가 mount 되면 
        const{ location, history } =  this.props;
        if(location.state === undefined) //location.state가 없는 경우
        history.push('/');
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return <span> {location.state.title} </span>
        }   else {
            return null;
        }
    }
}
//function Detail(props) {
//    console.log(props);
//    return <span>hello</span>;
//}

export default Detail;