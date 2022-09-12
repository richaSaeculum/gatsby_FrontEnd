import * as React from 'react';
import _ from 'lodash';
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
} from './post-card.style';
import Link from 'next/link';
import moment from 'moment/moment';
import { decode } from 'html-entities';



const PostCard = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link href={url}>
            {/* <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} /> */}
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: moment(date).format("DD [<span>] MMMM [</span>]"),
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
          <PostTitle className="post_title">
            <Link href={`/${url}`}>{decode(title)}</Link>
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: decode(description),
              }}
              className="excerpt"
            />
          )}

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag, index) => (
                // <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                <Link
                  key={index}
                  href={{
                    pathname: '/tags/[slug]',
                    query: { slug: tag.slug, tagid: tag.id },
                  }}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

export default PostCard;
