import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
class Home extends React.Component{
  state={//로딩 완료된 데이터는 이 쪽에 출력. 
    isLoading: true,
    movies: [],//로딩 완료된 데이터가 이 곳에 저장. 
  };
  getrecords = async() => {
    const{
      data: {
        data: { movies }, 
      },
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); 
    this.setState({ movies, isLoading: false }/*{movies: movies} 에서 키와 대입할 변수의 이름이 같아서 축약 가능. */ ) 
  };
  componentDidMount(){
    //데이터 로딩
    this.getrecords();
  }
  render(){
    const{ isLoading,movies } = this.state;
    return( <section className="container">
      {isLoading ? (<div className = "loader">
                      <span className = "loader__text">'Loading...' </span>
                    </div>
                  ): (
                      <div className="movies">
                        {movies.map(movie => (
                          <Movie
                            
                            key={movie.id}//으로 console 창의 key props문제 해결.  컴포넌트를 여러 개 출력할 때 유일값 사용해서 key props를 추가해야 함. 
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                            />
                        ))}
                        </div>
                  )}
                  </section>
    );
    // 로딩이 완료되면  we are ready에 출력. 
  }
}
export default Home;

