import * as React from 'react';
import {
  FeaturedPostWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostMeta,
  PostTags,
} from './feature-post.style';
import Link from 'next/link';

const FeaturedPost = ({
  image,
  title,
  url,
  tags,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['featured_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <FeaturedPostWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link href={url}>
            {/* <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} /> */}
          </Link>
        </PostPreview>
      )}

      <PostDetails>
        <PostTitle className="post_title">
          <Link href={url}>{title}</Link>
        </PostTitle>
        {/* <PostMeta>
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.slice(0, 2).map((tag, index) => (
                <Link
                  key={index}
                  to={`/tags/${_.kebabCase(tag)}/`}
                >{`#${tag}`}</Link>
              ))}
            </PostTags>
          )}
        </PostMeta> */}
      </PostDetails>
    </FeaturedPostWrapper>
  );
};

export default FeaturedPost;
