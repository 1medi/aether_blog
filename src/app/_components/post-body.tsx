import markdownStyles from './markdown-styles.module.css';  // CSS Module
import '../styles.css';  // Global CSS (if needed)

type Props = {
  content: string;
  type: string;  // The post type from frontmatter
};

export function PostBody({ content, type }: Props) {
  return (
    <div className={`max-w-2xl mx-auto ${type}`}>
      <div className={markdownStyles.markdown}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
