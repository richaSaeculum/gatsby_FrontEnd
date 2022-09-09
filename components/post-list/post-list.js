import * as React from 'react';
import _ from 'lodash';
import {
	PostListWrapper,
	PostPreview,
	PostDetails,
	PostTitle,
	PostMeta,
	PostDate,
	PostTags,
} from './post-list.style';
import Link from 'next/link';


const PostList = ({
	image,
	title,
	url,
	date,
	tags,
	className,
	placeholderBG,
	...props
}) => {
	// Add all class to an array
	const addAllClasses = ['post_list'];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<PostListWrapper className={addAllClasses.join(' ')} {...props}>
			<Link href={url}>
				{image == null ? null : (
					<PostPreview className='post_preview'>
            {/* <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG} /> */}
					</PostPreview>
				)}

				<PostDetails>
					<PostTitle className='post_title'>{title}</PostTitle>
					<PostMeta>
						{date && (
							<PostDate
								dangerouslySetInnerHTML={{
									__html: date,
								}}
								className='post_date'
							/>
						)}
						{tags == null ? null : (
							<PostTags className='post_tags'>
								{(tags || []).map((tag, index) => (
									<span key={index}>{`#${tag}`}</span>
								))}
							</PostTags>
						)}
					</PostMeta>
				</PostDetails>
			</Link>
		</PostListWrapper>
	);
};

export default PostList;
