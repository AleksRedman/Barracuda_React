import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Layout } from 'antd';
import Logo from './components/Logo/Logo.js';
import Contacts from './components/Contacts/Contacts.js';
import Nav from './components/Nav/Nav.js';
import SubNav from './components/SubNav/SubNav.js';
import Copyrights from './components/Copyrights/Copyrights.js';
import Home from './routes/Home/Home';
import Goods from './routes/Goods/Goods.js';
import Feedback from './routes/Feedback/Feedback.js';
import About_us from './routes/About_us/About_us.js';
import styles from './index.css';
const { Header, Content, Footer, Sider } = Layout;

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Layout className={styles.wrapper}>
          <Header className={styles.header}>
            <Logo/>
            <Contacts/>
          </Header>
          <Layout>
            <Nav/>
          </Layout>
          <Layout>
            <Sider>
              <SubNav/>
            </Sider>
            <Content>
              <Route path="/" exact component={Home} />
              <Route path="/Goods" exact component={Goods} />
              <Route path="/Feedback" exact component={Feedback} />
              <Route path="/About_us" exact component={About_us} />
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
