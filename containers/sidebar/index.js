import _ from 'lodash';
import Link from 'next/link';
import React, { useState } from 'react';
import { decode } from 'html-entities';
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


const Sidebar = ({ featuredPosts, tagsList }) => {
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

  return (
    <SidebarWrapper>
      {/* <SidebarWidget>
        <WidgetTitle>Promotion</WidgetTitle>
        <a
          href="https://1.envato.market/r1jdv"
          target="_blank"
        >
          <img src={'/images/ad.png'} alt="Get fff" />
        </a>
      </SidebarWidget> */}

      <SidebarWidget>
        <WidgetTitle>Latest Post</WidgetTitle>
        {(featuredPosts || []).map((item, index) => {
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
        {tagsList.map((tag, index) => (
          <TagItem key={tag.name}>
            <span>#</span>
            <Link
              key={index}
              href={{
                pathname: '/tags/[slug]',
                query: { slug: tag.slug, tagid: tag.id },
              }}>
              <a>{tag.name} <span>({tag.count})</span></a>
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
