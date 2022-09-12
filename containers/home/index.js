import * as React from 'react';
import Posts from './posts';
import Banner from './banner';
import Layout from '../../components/layout'
import PersonalBlogWrapper from './style';


const PersonalBlog = (props) => {
  return (
    <Layout>
      <PersonalBlogWrapper {...props}>
        <Banner />
        <Posts serverData={props.serverData} />
      </PersonalBlogWrapper>
    </Layout>
  );
};

export default PersonalBlog;
