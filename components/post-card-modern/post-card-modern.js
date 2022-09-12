import * as React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import {
  PostCardModernWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostTags,
} from './post-card-modern.style';
import { decode } from 'html-entities';


const PostCardModern = ({
  image,
  title,
  description,
  url = '',
  date,
  tags,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card_modern'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardModernWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link href={`/${url.toString()}`}>
            <a></a>
            {/* <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} /> */}
          </Link>
          {date && (
            <PostDate
              dangerouslySetInnerHTML={{
                __html: date,
              }}
              className="post_date"
            />
          )}
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostTitle className="post_title">
          <Link href={`/${url.toString()}`}>{decode(title)}</Link>
        </PostTitle>
        {tags == null ? null : (
          <>
            <PostTags className="post_tags">
              <FontAwesomeIcon
                icon={faTags}
                style={{ fontSize: 18, color: "#D10068", marginRight: "10px" }}
              />
              {tags.map((tag, index) => (
                // <Link key={index} href={`/tags/${_.kebabCase(tag.name)}/`}>
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
          </>
        )}
        {description && (
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: decode(description),
            }}
            className="excerpt"
          />
        )}
        
      </PostDetails>
    </PostCardModernWrapper>
  );
};

export default PostCardModern;
