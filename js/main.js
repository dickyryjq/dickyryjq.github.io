// one-page plugin
$(document).ready(function() {
	$('#nav').onePageNav();
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44938135-1', 'xiaoyuew.com');
  ga('send', 'pageview');


  window.onload = function() {
  	var text1 = "I've been working on Microsoft Teams since its public launch in 2017. Over the years Teams has become Microsoft's fastest growing product. I’m on the core team of the design org here and have delivered multiple key features that millions of people use everyday. Those features include announcement post type, cross posting, fun picker, message translation, new team creation flow, team analytics, and many others. I work with devs, PMs, researchers, etc with tight timeline and engineering constraints and routinely present my work to senior leadership team.";
  	var elements = document.getElementsByClassName('msft');
  	for (i = 0; i < elements.length; i = i+1){
  		elements[i].innerHTML = text1;
  	}

  	var text2 = "From 2016 to 2017, I was a UX designer on an in-house design team that take charge of Amazon's recruiting and candidate experience. For example, I was the design owner of amazon.jobs. In addition to owning the UX, I also owned comprehensive research (from recruiting participants to writing reports), visual design, and copy writing. I was partially PM and partially designer. As a T shaped design specialist, I was able to grow the horizontal bar of the ’T’.";
  	var elements = document.getElementsByClassName('amzn');
  	for (i = 0; i < elements.length; i = i+1){
  		elements[i].innerHTML = text2;
  	}

  	var text3 = "GoToTraining provides virtual classrooms with remote activities and rich collaboration. I designed and shipped features touching all lifecycle of the product on desktop, web and mobile: pre-training (schedule, invite, material prep, etc), during-training (device set up, activities, breakout rooms, etc), and post-training (course summary, emails, recording, etc). I also worked sooooo closely with devs and learned to speak their language (and make friends). I worked there from 2015 to 2016.";
  	var elements = document.getElementsByClassName('g2t');
  	for (i = 0; i < elements.length; i = i+1){
  		elements[i].innerHTML = text3;
  	}

  	var text4 = "I did my internship here as an UX Architect. With guidance from senior designers, I designed internal sites from scratch, thinking deep into website navigation. I also participated in the redesign of d23.com and thewaltdisneycompany.com.";
  	var elements = document.getElementsByClassName('dis');
  	for (i = 0; i < elements.length; i = i+1){
  		elements[i].innerHTML = text4;
  	}
  }



