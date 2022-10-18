import React from 'react';
import { decode } from 'html-entities';
import _ from 'lodash';
import Sidebar from '../sidebar';
import Layout from '../../components/layout';
import PostDetails from '../../components/post-details/post-details';
import PostCard from '../../components/post-card';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
} from 'react-share';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoReddit,
} from 'react-icons/io';
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment,
  BlogDetailsContent,
} from './style';
import { getCategories } from '../../utils/helpers';
import { DiscussionEmbed } from 'disqus-react';
import GoogleAd from '../../components/google-ad/GoogleAd';

const BlogPost = ({ serverData }) => {
  const { post, featuredPosts, tagsList } = serverData;
  // const siteUrl = props.data.site.siteMetadata.siteUrl;
  // // const shareUrl = urljoin(siteUrl, slug);
  let shareUrl = '#'
  // post.author
  // const featuredImage = getImage(post.featuredImage?.node?.localFile);
  const disqusConfig = {
    shortname: process.env.DISQUS_SHORT_NAME,
    config: {
      // url: `http://localhost:3590/${post.id}`,
      url: post?.link,
      identifier: post?.id.toString(),
      title: post?.title?.rendered,
      language: 'en_US'
    },
  };

  let tags = getCategories(post._embedded["wp:term"][0])

  return (
    <Layout>
      <div style={{ background: 'red' }}>
        <GoogleAd />
      </div>
      <BlogPostDetailsWrapper>
        <BlogDetailsContent>
          <PostDetails
            title={post?.title?.rendered}
            date={post?.date}
            // preview={featuredImage}
            description={post?.content.rendered}
            imagePosition={'top'}
            tags={tags}
          />

          {/* <BlogPostFooter>
            {post.tags == null ? null : (
              <PostTags className="post_tags">
                {post.tags.map((tag, index) => (
                  <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                    {`#${tag}`}
                  </Link>
                ))}
              </PostTags>
            )}
            <PostShare>
              <span>Share This:</span>
              <FacebookShareButton url={shareUrl} quote={post.excerpt}>
                <IoLogoFacebook />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl}>
                <IoLogoTwitter />
              </TwitterShareButton>
              <PinterestShareButton
                url={shareUrl}
                // media={urljoin(siteUrl, post?.publicURL)}
              >
                <IoLogoPinterest />
              </PinterestShareButton>
              <RedditShareButton
                url={shareUrl}
                // title={`${post.title}`}
              >
                <IoLogoReddit />
              </RedditShareButton>
            </PostShare>
          </BlogPostFooter> */}

          <BlogPostComment>
            <DiscussionEmbed {...disqusConfig} />
            {/* <Recommendations  {...disqusConfig} /> */}
          </BlogPostComment>

        </BlogDetailsContent >

        <Sidebar featuredPosts={featuredPosts} tagsList={tagsList} />
      </BlogPostDetailsWrapper >
      {/* 
      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => {
              // Random Placeholder Color
              const placeholderColors = [
                '#55efc4',
                '#81ecec',
                '#74b9ff',
                '#a29bfe',
                '#ffeaa7',
                '#fab1a0',
                '#e17055',
                '#0984e3',
                '#badc58',
                '#c7ecee',
              ];
              const setColor =
                placeholderColors[
                  Math.floor(Math.random() * placeholderColors.length)
                ];
              return (
                <RelatedPostItem key={node.fields.slug}>
                  <PostCard
                    title={node.frontmatter.title || node.fields.slug}
                    url={node.fields.slug}
                    image={
                      node.frontmatter.cover == null
                        ? null
                        : node.frontmatter.cover.childImageSharp.gatsbyImageData
                    }
                    tags={node.frontmatter.tags}
                    placeholderBG={setColor}
                  />
                </RelatedPostItem>
              );
            })}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )} */}
      <div style={{ background: 'red' }}>
        <GoogleAd />
      </div>
    </Layout >
  );
};

export default BlogPost;

