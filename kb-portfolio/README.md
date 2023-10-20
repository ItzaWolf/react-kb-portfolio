<Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>


    
// import AboutMe from './components/AboutMe';
// import ContactForm from './components/ContactForm';
// import Projects from './components/Projects';
// import Navbar from './components/NavBar';