import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nameSong : this.props.nameSong,
      lyricsSong : this.props.lyricsSong,
      singerSong : this.props.singerSong,
      authorSong : this.props.authorSong,
      categorySong: this.props.categorySong,
      viewSong: this.props.viewSong,
      downloadSong: this.props.downloadSong,
    }
    this.index = 1;
  }

  
  onClickNext = () =>{
    if(this.index < music.length){
      let count = this.index+1;
      this.setState((prevState) => ({
        nameSong : music[count-1].name,
        lyricsSong : music[count-1].lyrics,
        singerSong : music[count-1].singer,
        authorSong : music[count-1].author,
        categorySong : music[count-1].categories,
        viewSong: music[count-1].views,
        downloadSong: music[count-1].download
    }));
  this.index +=1;
}
    else{
      this.setState((prevState) => ({
        nameSong : music[0].name,
        lyricsSong : music[0].lyrics,
        singerSong : music[0].singer,
        authorSong : music[0].author,
        categorySong : music[0].categories,
        viewSong: music[0].views,
        downloadSong: music[0].download
    }));
  this.index = 0}
  }
  render(){
  return (

    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <div className="top">
        <p className="nameSong">{this.state.nameSong} - </p> 
        <p className="singerSong"> {this.state.singerSong}</p>
        <p className="infoSong" href="#">Sáng tác: {this.state.authorSong} |  Thể loại: {this.state.categorySong} |  Lượt nghe: {this.state.viewSong} |  Lượt tải: {this.state.downloadSong} </p>
      </div>
      <div className="bottom">
        <i className="material-icons pause">
        pause
        </i>
        <i className="material-icons next" onClick={this.onClickNext}>
        skip_next
        </i>
        <hr className="timeHr"/>
        <i className="material-icons repeat">
        repeat
        </i>
        <i className="material-icons shuffle">
        shuffle
        </i>
        <i className="material-icons volume">
        volume_down
        </i>
        <hr className="volumeValue"/>
        <div className="time"> 00:34 </div>
      </div>
    </div>
  );}
}
const music = [
  {
  name: "Em của ngày hôm qua",
  lyrics: "Eh eh eh.. Em đang nơi nào... Can you feel me. Can you feel me.",
  singer: "Sơn Tùng",
  author: "Sơn Tùng",
  categories: "Pop",
  views: "10.000.000",
  download: "1.234.567"
  },
  {
  name: "Người Anh Em",
  lyrics: "Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em",
  singer:"Châu Khải Phong",
  author: "Nhạc Hoa, Lời Việt: Mạnh Thắng",
  categories : "Dance",
  views: "163.005",
  download: "1.121"
  }
  ]
App.defaultProps = {
  nameSong : music[0].name,
  lyricsSong : music[0].lyrics,
  singerSong : music[0].singer,
  authorSong : music[0].author,
  categorySong : music[0].categories,
  viewSong: music[0].views,
  downloadSong: music[0].download
};
console.log(music.length);
export default App;
