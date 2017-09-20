var React = require('react');
var ReactDOM = require('react-dom');

var ContainerElement = React.createClass({
  getInitialState: function () {
    return {
    url: "http://i.imgur.com/E8dlzj2.jpg",

    images: ["http://i.imgur.com/E8dlzj2.jpg","http://i.imgur.com/ItycbEa.jpg"
             ,"http://i.imgur.com/qHfUgJc.jpg","http://i.imgur.com/FQyL4Kp.jpg",
             "http://i.imgur.com/23tI2le.jpg"
             ,"http://i.imgur.com/xRm7ZFG.jpg","http://i.imgur.com/0QKnvhe.jpg",
             "http://i.imgur.com/NEGfIWb.jpg"],

    titles: ["Lion","Rabbit","Fox","Tiger","Turtle","Marten","Dog","Cat"],

    descrips: ["The lion (Panthera leo) is one of the big cats in the Felidae family and a   member of genus Panthera. It has been listed as Vulnerable on the IUCN Red List since 1996, as populations in African range countries declined by about 43% since the early 1990s."
               ,"Rabbits are small mammals in the family Leporidae of the order Lagomorpha, found in several parts of the world. There are eight different genera in the family classified as rabbits, including the European rabbit (Oryctolagus cuniculus), cottontail rabbits (genus Sylvilagus; 13 species)"
               ,"Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes are slightly smaller than a medium-size domestic dog, with a flattened skull, upright triangular ears, a pointed, slightly upturned snout"
               ,"The tiger (Panthera tigris) is the largest cat species, most recognizable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard. Tigers are apex predators"
               ,"Turtles are reptiles of the order Testudines (or Chelonii[3]) characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield."
               ,"The martens constitute the genus Martes within the subfamily Mustelinae, in the family Mustelidae. Martens are slender, agile animals, adapted to living in taigas, and are found in coniferous and northern deciduous forests across the Northern Hemisphere."
               ,"The domestic dog (Canis lupus familiaris or Canis familiaris)[4] is a member of genus Canis (canines) that forms part of the wolf-like canids,[5] and is the most widely abundant carnivore."
               ,"The domestic cat[1][5] (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines."]
    }
    
  },

  render: function () {
    return (
      <div>
        <ImageElement url={this.state.url} images={this.state.images} titles={this.state.titles} descrips={this.state.descrips}/>
        <ThumbElement onChange={this.changeTheUrl} />
        <SearchElement />
      </div>
    )
  },
  changeTheUrl: function (newUrl) {
    this.setState({
      url: newUrl
    })
  }
})

var ImageElement = React.createClass({
  getInitialState: function () {
    return {
      images: this.props.images,
      titles: this.props.titles,
      descrips: this.props.descrips
    }
  },


  render: function () {
    return(
      <div className='viewer'>
        <img className='main_pic' src={this.props.url}/>
        <DescriptionElement images={this.state.images} titles={this.state.titles} descrips={this.state.descrips}/>
        <ArrowElement />
      </div>  
    );
  }

})

var DescriptionElement = React.createClass({

  render: function () {
    return(
      <div className='description'>
        <h1>{this.props.titles[0]}</h1>
        <p>{this.props.descrips[0]}</p>
      </div>
    );
  }

})

var ThumbElement = React.createClass({
  getInitialState: function () {
    return {
      change: this.props.onChange,
      images: ["http://i.imgur.com/E8dlzj2.jpg","http://i.imgur.com/ItycbEa.jpg"
             ,"http://i.imgur.com/qHfUgJc.jpg","http://i.imgur.com/FQyL4Kp.jpg",
             "http://i.imgur.com/23tI2le.jpg"
             ,"http://i.imgur.com/xRm7ZFG.jpg","http://i.imgur.com/0QKnvhe.jpg",
             "http://i.imgur.com/NEGfIWb.jpg"]
    }
  },

  render: function () {
    var images = this.state.images;
    images = images.map(function (val,index) {
      return(<ButtonElement url={val} key={index} images = {this.state.images} idx={index} onChange={this.state.change} />) 
    }.bind(this));
    return(
      <div className='thumb_selector'>
        <p className='hover'></p>
        {images}
      </div>
      
    )
  },

  // popup: function (url) {
  //   var cur_index = images.indexOf(url);
  //   var hover = document.querySelector('.hover');
  //   hover.innerText = titles[cur_index];
  //   var marginLeft = cur_index*50;
  //   hover.setAttribute("style","margin-left:"+marginLeft+"px;visibility:visible;");
  // },  

  // unpopup: function () {
  //   document.querySelector('.hover').innerText = "";
  //   document.querySelector('.hover').setAttribute("style","visibility:hidden;");
  // }

})

var ButtonElement = React.createClass({ 
  render: function () {
    var btnStyle = {
      background:'url('+this.props.url+')',
    };
    return(<button className='btn' style={btnStyle} onClick={this.change}></button>);
  },

  change: function () {
    this.props.onChange(this.props.images[this.props.idx]);
  },
  // appear: function () {
  //   this.props.onAppear(this.props.url);
  // },
  // disappear: function () {
  //   this.props.onDisappear();
  // }
})


var ArrowElement = React.createClass({
  render: function() {
    return(
      <div>
        <button className="left_arrow" onClick={this.toLeft}></button>
        <button className="right_arrow" onClick={this.toRight}></button>
      </div>
    )
  },
  // toLeft: function () {
    
  // },
  // toRight: function () {
  //   var main_pic = document.querySelector('.main_pic');
  //   var h1 = document.querySelector("h1");
  //   var p = document.querySelector("p");
  //   var pic_url = main_pic.getAttribute("src");
  //   var cur_index = images.indexOf(pic_url);
  //   if(cur_index === 7){
  //     cur_index = -1;
  //   };
  //   main_pic.setAttribute("src",images[cur_index+1]);
  //   h1.innerText = titles[cur_index+1];
  //   p.innerText = discreps[cur_index+1];
  // }
})

var SearchElement = React.createClass({
  
  render: function () {
    return(
      <div>
        <input type='text' placeholder='picture name' />
        <button className='search' onClick={this.search}>Search</button>
      </div>

    );
  },

  search: function() {
    var picsName = document.querySelector('input').value;
    var cur_index = titles.indexOf(picsName);
    if(cur_index !== -1){
      document.querySelector('.main_pic').src = images[cur_index];
      document.querySelector('h1').innerText = titles[cur_index];
      document.querySelector('p').innerText = discreps[cur_index];
    }
  }

})









ReactDOM.render(<ContainerElement/>,document.querySelector('.container'));
















