import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
interface RichTextRendererProps {
  documents: any; // fix compatibility issue with contentful Document type
  className?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  documents,
  className,
}) => {
  if (Array.isArray(documents)) {
    return (
      <div className={className}>
        {documents.map((doc, i) => (
          <div key={i}>{documentToReactComponents(doc)}</div>
        ))}
      </div>
    );
  }

  if (documents) {
    return (
      <div className="richtext">{documentToReactComponents(documents)}</div>
    );
  }
  return [];
};

export default RichTextRenderer;
