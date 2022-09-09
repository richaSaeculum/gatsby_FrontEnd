import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Layout from '../../components/layout';
import PostCard from '../../components/post-card/post-card';
import PostDetails from '../../components/post-details/post-details';
import Sidebar from '../sidebar';
import { decode } from 'html-entities';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   PinterestShareButton,
//   RedditShareButton,
// } from 'react-share';
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
import Link from 'next/link';

const BlogPost = ({ serverData }) => {
  // const post = props.data.wpPost;
  // // const { edges } = props.data.allMarkdownRemark;
  // const title = post.title;
  // const slug = post.slug;
  // const siteUrl = props.data.site.siteMetadata.siteUrl;
  // // const shareUrl = urljoin(siteUrl, slug);

  // const featuredImage = getImage(post.featuredImage?.node?.localFile);
  // const disqusConfig = {
  //   shortname: process.env.GATSBY_DISQUS_NAME,
  //   config: { identifier: slug, title },
  // };
  // const params = useParams();
  const [post, setPost] = useState(serverData.data);

  // return (
  //   <h1>demo</h1>
  // )
  // https://example.com/wp-json/wp/v2/posts/<id>

  // useEffect(() => {
  //   // const { postid } = params;
  //   getSinglePost();
  // }, [])

  // function getSinglePost(id = 553) {
  //   fetch(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts/${id}`)
  //     .then(response => response.json())
  //     .then(resultData => {
  //       setPost(resultData)
  //     })
  // }

  return (
    <Layout>
      <BlogPostDetailsWrapper>
        <BlogDetailsContent>
          <PostDetails
            title={post?.title?.rendered}
            date={post?.date}
            // preview={featuredImage}
            description={decode(post?.content.rendered)}
            // description={content}
          />

          {/* <BlogPostFooter>
            {post?.frontmatter?.tags == null ? null : (
              <PostTags className="post_tags">
                {post?.frontmatter?.tags.map((tag, index) => (
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
              <TwitterShareButton url={shareUrl} title={title}>
                <IoLogoTwitter />
              </TwitterShareButton>
              <PinterestShareButton
                url={shareUrl}
                media={urljoin(siteUrl, post?.publicURL)}
              >
                <IoLogoPinterest />
              </PinterestShareButton>
              <RedditShareButton
                url={shareUrl}
                title={`${post.title}`}
              >
                <IoLogoReddit />
              </RedditShareButton>
            </PostShare>
          </BlogPostFooter> */}

          {/* <BlogPostComment>
            <DiscussionEmbed {...disqusConfig} />
          </BlogPostComment> */}

        </BlogDetailsContent >

        <Sidebar featuredPosts={serverData.featuredPosts} />
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
    </Layout >
  );
};

export default BlogPost;

