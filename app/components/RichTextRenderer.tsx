import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
interface RichTextRendererProps {
  documents: Document | Document[] | undefined; // fix compatibility issue with contentful Document type
  className?: string;
  options?: object;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  documents,
  options,
  className,
}) => {
  if (Array.isArray(documents)) {
    return (
      <div className={className}>
        {documents.map((doc, i) => (
          <div key={i}>{documentToReactComponents(doc, options)}</div>
        ))}
      </div>
    );
  }

  if (documents) {
    return (
      <div className="richtext">
        {documentToReactComponents(documents, options)}
      </div>
    );
  }
  return [];
};

export default RichTextRenderer;
