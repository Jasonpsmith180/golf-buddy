// import navbar from './pages/landing/navbar';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// establish link to graphql server
const httpLink = createHttpLink({
  uri: '/graphql',
});

// create connection to API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Router> */}
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          <div className='container'>
            <Home />
            {/* <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />
            
              <Route component={NoMatch} />
            </Switch> */}
          </div>
          <Footer />
        </div>
      {/* </Router> */}
    </ApolloProvider>
  );
}

export default App;
