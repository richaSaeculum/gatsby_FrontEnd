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
import renderHTML from 'react-render-html';
import moment from 'moment'


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
          <PostTitle>{title}</PostTitle>
          <PostDate>{moment(date).format('DD MMM, YYYY')}</PostDate>
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
            <PostTitle>{title}</PostTitle>
            <PostDate>{moment(date).format('DD MMM, YYYY')}</PostDate>
          </>
        ) : (
          ''
        )}
        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} href={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;
