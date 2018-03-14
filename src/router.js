import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Layout } from 'antd';
import Logo from './components/Logo/Logo.js';
import Contacts from './components/Contacts/Contacts.js';
import Nav from './components/Nav/Nav.js';
import SubNav from './components/SubNav/SubNav.js';
import Copyrights from './components/Copyrights/Copyrights.js';
import IndexPage from './routes/IndexPage';
import styles from './index.css';
const { Header, Content, Footer, Sider } = Layout;


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Layout>
          <Header>
            <Logo/>
            <Contacts/>
            <Nav/>
          </Header>
          <Layout>
            <Sider>
              <SubNav/>
            </Sider>
            <Content>
              <Route path="/" exact component={IndexPage} />
            </Content>
          </Layout>
          <Footer>
            <Copyrights/>
          </Footer>
        </Layout>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
