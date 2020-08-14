import React,{ Suspense } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
const Countries = React.lazy(() => import('./views/Countries'));
const Cities = React.lazy(() => import('./views/Cities'));
const Home = React.lazy(() => import('./views/Home'));

const client = new ApolloClient({
  uri: 'https://api.everbase.co/graphql?apikey=5b1d1c84-d1f7-492d-98bb-aebacb8d4175',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
          <Link to="/" className="navbar-brand">WorldPedia</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/countries" className="nav-link">Countries</Link>
              </li>
              <li className="nav-item">
                <Link to="/cities" className="nav-link">Cities</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Suspense fallback={
          <div style={{height: '70vh'}} className="d-flex justify-content-center align-items-center">
            <img src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="loading"/>
          </div>
        }>
          <Switch>
            <Route path="/countries">
              <Countries />
            </Route>
            <Route path="/cities">
              <Cities />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ApolloProvider>
  );
}
