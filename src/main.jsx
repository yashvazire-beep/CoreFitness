import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {Dumbbell, MapPin, Phone, Clock3, Star, ArrowRight, Menu, X, Instagram, CheckCircle2} from "lucide-react";
import "./styles.css";

const gymPhoto="https://cdn.top-rated.online/places/ChIJJZHWR8fH1DsRJfdMlcMr7S0/8802e9878c3a689724076102856bced66273405ae9eb59e38e2103dd7a3a7ffb.webp";

const gallery=[
 "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
 "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
 "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=85",
 "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
 "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85"
];

function App(){
 const [open,setOpen]=useState(false);
 const go=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setOpen(false)};
 return <div className="site">
  <div className="top">CORE FITNESS • SAKKARDARA CHOWK, NAGPUR <span>MON–SAT • 6:00 AM–11:00 PM</span></div>
  <header>
   <a className="brand" href="#" onClick={()=>go("home")}><span className="mark"><Dumbbell size={23}/></span><span><b>CORE</b> FITNESS<small>TRAIN • STRONG • CONSISTENT</small></span></a>
   <nav className={open?"open":""}>
    <a onClick={()=>go("home")}>Home</a><a onClick={()=>go("about")}>About</a><a onClick={()=>go("programs")}>Programs</a><a onClick={()=>go("gallery")}>Gallery</a><a onClick={()=>go("contact")}>Contact</a>
   </nav>
   <div className="headBtns"><a className="call" href="tel:+919022395046"><Phone size={16}/> Call Now</a><button className="mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </header>

  <main>
   <section className="hero" id="home">
    <div className="heroContent">
     <div className="eyebrow">NAGPUR'S FITNESS COMMUNITY</div>
     <h1>Build your body.<br/><i>Build your core.</i></h1>
     <p>A motivating fitness space near Sakkardara Chowk for strength training, cardio, CrossFit and core-focused workouts.</p>
     <div className="actions"><button className="primary" onClick={()=>go("contact")}>Visit Core Fitness <ArrowRight size={18}/></button><a className="outline" href="https://www.google.com/maps/search/?api=1&query=Core+Fitness+Sakkardara+Nagpur" target="_blank">Get Directions <MapPin size={17}/></a></div>
     <div className="stats"><div><strong>4.8</strong><span>Google rating</span></div><div><strong>270+</strong><span>Reviews</span></div><div><strong>6AM–11PM</strong><span>Mon–Sat</span></div></div>
    </div>
    <div className="heroImage"><img src={gymPhoto} alt="Core Fitness sign"/><div className="photoNote">Core Fitness<br/><small>Sakkardara, Nagpur</small></div></div>
   </section>

   <section className="about" id="about">
    <div className="aboutImage"><img src={gallery[0]} alt="Gym workout area"/></div>
    <div className="aboutText"><div className="eyebrow">WHY CORE FITNESS</div><h2>Train with purpose.<br/><i>Progress with consistency.</i></h2><p>Core Fitness is a fitness center near Shahu Samaj Building at Sakkardara Chowk, Nagpur. The gym is described in current listings as a clean, motivating space with strength, cardio, CrossFit and core-training options.</p><div className="checks"><span><CheckCircle2/> Helpful trainers</span><span><CheckCircle2/> Strength & cardio equipment</span><span><CheckCircle2/> Core & CrossFit training</span><span><CheckCircle2/> Locker facilities</span></div></div>
   </section>

   <section className="programs" id="programs"><div className="eyebrow">TRAIN YOUR WAY</div><h2>Programs built for <i>real goals.</i></h2><div className="programGrid">
    {[
      ["01","Strength Training","Build strength, muscle and confidence with focused resistance workouts."],
      ["02","Cardio","Improve endurance and conditioning with dedicated cardio training."],
      ["03","CrossFit","Functional movements and challenging sessions for complete fitness."],
      ["04","Core Training","Develop a stronger, more stable core and better movement."]
    ].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><ArrowRight/></article>)}
   </div></section>

   <section className="gallery" id="gallery"><div className="sectionTitle"><div><div className="eyebrow">THE GYM</div><h2>See the <i>energy.</i></h2></div><a href="https://www.google.com/maps/search/?api=1&query=Core+Fitness+Sakkardara+Nagpur" target="_blank">View on Google Maps <ArrowRight size={16}/></a></div>
    <div className="photos"><div className="photo tall"><img src={gymPhoto} alt="Core Fitness reference"/></div>{gallery.slice(1).map((g,i)=><div className="photo" key={g}><img src={g} alt={"Gym training "+(i+1)}/></div>)}</div>
    <p className="photoCaption">The first image is a published Core Fitness listing photo; the remaining images are visual references for the workout sections and should be replaced with the gym's own approved photos before public launch.</p>
   </section>

   <section className="review"><div className="quote"><div className="stars">★★★★★</div><blockquote>“A clean, well-equipped place with helpful trainers and dedicated areas for strength and cardio.”</blockquote><span>Based on themes in public member reviews</span></div><div className="ratingBox"><strong>4.8</strong><div><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div><small>Google listing rating</small></div></section>

   <section className="contact" id="contact">
    <div><div className="eyebrow">START YOUR FITNESS JOURNEY</div><h2>Ready to<br/><i>get stronger?</i></h2><p>Call Core Fitness or visit the gym at Sakkardara Chowk to ask about current memberships, training options and trial availability.</p></div>
    <div className="contactCard"><div><MapPin/><b>Location</b><p>Near Shahu Samaj Building,<br/>Sakkardara Chowk, Nagpur</p></div><div><Clock3/><b>Hours</b><p>Monday–Saturday<br/>6:00 AM – 11:00 PM<br/><small>Sunday: closed</small></p></div><div><Phone/><b>Call</b><p><a href="tel:+919022395046">+91 90223 95046</a></p></div><a className="primary wide" href="https://www.google.com/maps/search/?api=1&query=Core+Fitness+Sakkardara+Nagpur" target="_blank">Open Google Maps <MapPin size={17}/></a></div>
   </section>
  </main>
  <footer><div className="brand"><span className="mark"><Dumbbell size={21}/></span><span><b>CORE</b> FITNESS<small>SAKKARDARA • NAGPUR</small></span></div><div>© 2026 Core Fitness. Website concept for the gym.</div><div className="social"><a href="tel:+919022395046"><Phone/></a><a href="https://www.google.com/maps/search/?api=1&query=Core+Fitness+Sakkardara+Nagpur" target="_blank"><MapPin/></a></div></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
