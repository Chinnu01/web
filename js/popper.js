body{
    font-family: Helvetica Neue,Inter,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
}
.navbar{
    overflow: hidden;
    padding: 90px 10px; /* Large padding which will shrink on scroll (using JS) */
    transition: 0.4s; /* Adds a transition effect when the padding is decreased */
    position: fixed; /* Sticky/fixed navbar */
    width: 100%;
    top: 0; /* At the top */
    z-index: 99;
    float: none;
    background: linear-gradient(35deg,#00FFFF,#FF69B4);
}

.floatingNav {
    box-shadow: 0px 1px 10px #999;
    background: linear-gradient(35deg,#00FFFF,#FF69B4);
  }

a {
    color: #5183f5;
    text-decoration: none;
    font-weight: 500;
}

#logo{
    font-size: 35px;
    transition: 0.4s;
}

.heading{
    margin-top: 200px;
}
.heading h1{
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 1.3rem;
    letter-spacing: -.03rem;
}

p{
    font-size: 1.2rem;
    color: rgba(0,0,0,.6);
}

.hero{
    padding-top: 0px;
    padding-bottom: 0px;
}

.gradient {
    background: radial-gradient(circle at 20% 20%,#5183f5 25%,#4640ff 100%);
}

.gradient h2{
    color: white;
}

h2{
    text-align: "center";
    font-size: 1.5rem;
    font-weight: 600;
}

h1{
  margin-top:-1%;
}
.about{

}

/*

cards
*/

.card{
    box-shadow: 0.5rem 1.25rem 1.75rem 0 rgba(0,0,0,.3);
  cursor: pointer;
  transition: 0.2s;
  border: 0px;
  border-radius: 15px;
  padding: 10px;
}

.card-img-top{
    border-radius: 10px;
    border:0px;
width: 100%;
    height: 10rem;
    object-fit: cover;
    -webkit-box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75);
box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75);
}

.jumbotron{
    border-radius: 0px;
    padding-left: 10rem;
    margin-top: 0rem !important;
}

.card-body {
    margin-top: 5px;
}

.card:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0.5rem 1.25rem 1.75rem 0 rgba(0,0,0,.3);

  }

/* tech skills */
#skills img{
    height: 5rem;
    width: 5rem;
    
    padding: 10px;
    border-radius:5px;
}
.skill{
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0.2rem 0.25rem 0.75rem 0 rgba(0,0,0,.1);
    margin: .5rem;
    margin-top: 30px;
    cursor: pointer;
  transition: 0.4s;
    
}
.skill:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0.5rem 1.25rem 1.75rem 0 rgba(0,0,0,.3);

  }
.skill p{
    font-size: 0.8rem;
    color: slategrey;
    margin-top: 5px;
    margin-bottom: 5px;
    
}
.chart{
  position:relative;
  display:inline-block;
  width:150px;
  height:150px;
  margin-top:50px;
  margin-bottom:50px;
  text-align:center;
  box-sizing: border-box;}
.chart canvas{position:absolute;top:0;left:0}
.percent{display:inline-block;line-height:150px;z-index:2}
.percent:after{content:'%';margin-left:.1em;font-size:.8em}


#contact{
    background: radial-gradient(circle at 20% 20%,#5183f5 25%,#4640ff 100%);
    padding: 120px 0px;
}


#contactcard{
    color: white;
    border-radius: 10px;
    padding: 3rem;
}

.icons{
    color: white;
}
.contacts a{
    font-size: 1.8rem;
    text-decoration: none;
}
.label{
    font-size: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/*Projects Page*/
.projectcontent a{
    text-decoration: none;
    
 }

.projectlinks h3{
    text-align: center;
    font-size: 1.3rem;
    margin-right: 10px;
}

 .projcontent {
    margin-top:200px
  }


@media(max-width: 500px) {
    
   #hero{
       padding-bottom: 0px;
       padding-top: 0px;
   }

   #skills{
       margin: 10px 20px;
   }


    
   #skills img{
       height: 3rem;
       width: 3rem;
   }

   #skills .tag{
       color: black;
       font-size: 10px;
   }

   
    .lead{
        font-weight: 400;
    }

   #about{

    margin: 5px 20px;
    padding-bottom: 10px;
   }

.icons{
    height: 40px;
    width: 40px;
}

    
.projectcontent h3{
   font-size: 20px;
   padding-right: 10px;
   
}


 
  }
