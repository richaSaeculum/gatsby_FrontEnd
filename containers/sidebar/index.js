import _ from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import FeaturePost from '../../components/feature-post/feature-post';
// import PromotionImage from '../../images/ad.png';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
  InstagramWrapper,
  InstagramPhoto,
} from './style';


const Sidebar = ({ featuredPosts }) => {
  // const Posts = Data.allMarkdownRemark.edges;
  const Tags = [
    {
      fieldValue: 'Bollywood',
      totalCount: 12
    },
    {
      fieldValue: 'Tollywood',
      totalCount: 87
    },
    {
      fieldValue: 'Instagram',
      totalCount: 45
    },
    {
      fieldValue: 'Crime',
      totalCount: 23
    },
    {
      fieldValue: 'Finance',
      totalCount: 45
    },
  ];

  const [posts, setPosts] = useState(featuredPosts);
  // const getPosts = async () => {
  //   fetch(`https://gatsby.saeculumsolutions.com/wp-json/wp/v2/posts`)
  //     .then(response => response.json())
  //     .then(resultData => {
  //       setPosts(resultData)
  //     })
  // }

  // useEffect(() => {
  //   getPosts();
  // }, [])

  return (
    <SidebarWrapper>
      <SidebarWidget>
        <WidgetTitle>Promotion</WidgetTitle>
        <a
          href="https://1.envato.market/r1jdv"
          aria-label="Get StoryHub"
          target="_blank"
        >
          <img src={'/images/ad.png'} alt="Get StoryHub" />
        </a>
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Latest Post</WidgetTitle>
        {(posts || []).map((item, index) => {
          const title = item.title.rendered || item.slug;
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
            <FeaturePost
              key={item.slug}
              title={title}
              // image={
              //   node.frontmatter.cover == null
              //     ? null
              //     : node.frontmatter.cover.childImageSharp.gatsbyImageData
              // }
              url={item.id}
              tags={item.tags}
              placeholderBG={setColor}
            />
          );
        })}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link href={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              <a>{tag.fieldValue} <span>({tag.totalCount})</span></a>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>

      {/* <SidebarWidget>
        <WidgetTitle>Instagram</WidgetTitle>
        {instagramPhotos ? (
          <InstagramWrapper>
            {instagramPhotos.slice(0, 4).map((node) => {
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
                <InstagramPhoto key={node?.id}>
                  <a href={node?.permalink} target="_blank">
                    <img
                      src={node?.media_url}
                      alt="Instagram Photo"
                      style={{ backgroundColor: setColor }}
                    />
                  </a>
                </InstagramPhoto>
              );
            })}
          </InstagramWrapper>
        ) : (
          ''
        )}
      </SidebarWidget> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
