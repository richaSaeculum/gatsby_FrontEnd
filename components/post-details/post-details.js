import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from './post-details.style';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'
import { decode } from 'html-entities';


const PostDetails = ({
  title,
  date,
  preview,
  description,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass = ['post_details'];
  
  if (imagePosition == 'left') {
    addClass.push('image_left');
  }

  if (className) {
    addClass.push(className);
  }

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
    placeholderColors[Math.floor(Math.random() * placeholderColors.length)];

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      {imagePosition == 'left' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              {/* <GatsbyImage src={preview} alt={title} backgroundColor={setColor} /> */}
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          <PostTitle>{decode(title)}</PostTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ fontSize: 20, color: "#D10068", marginRight: "10px" }}
            />
            <PostDate>{moment(date).format('DD MMM, YYYY')}</PostDate>
          </div>
          {tags == null ? null : (
            <PostTags>
              <FontAwesomeIcon
                icon={faTags}
                style={{ fontSize: 18, color: "#D10068", marginRight: "10px" }}
              />
              {tags.map((tag, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: '/tags/[slug]',
                    query: { slug: tag.slug, tagid: tag.id },
                  }}>
                  {`${tag.name}`}
                </Link>
              ))}
            </PostTags>
          )}
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              {/* <GatsbyImage src={preview} alt={title} backgroundColor={setColor} /> */}
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == 'left' ? (
          <>
            <PostTitle>{decode(title)}</PostTitle>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ fontSize: 18, color: "#D10068", marginRight: "10px" }}
              />
              <PostDate>{moment(date).format('DD MMM, YYYY')}</PostDate>
            </div>
            {tags == null ? null : (
              <PostTags>
                <FontAwesomeIcon
                  icon={faTags}
                  style={{ fontSize: 18, color: "#D10068", marginRight: "10px" }}
                />
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={{
                      pathname: '/tags/[slug]',
                      query: { slug: tag.slug, tagid: tag.id },
                    }}>
                    {`#${tag.slug}`}
                  </Link>
                ))}
              </PostTags>
            )}

          </>
        ) : (
          ''
        )}
        <PostDescription
          dangerouslySetInnerHTML={{ __html: decode(description) }}
          className="post_des"
        />
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;
