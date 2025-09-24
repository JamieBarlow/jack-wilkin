import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
interface RichTextRendererProps {
  documents: any; // fix compatibility issue with contentful Document type
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ documents }) => {
  if (Array.isArray(documents)) {
    return (
      <>
        {documents.map((doc, i) => (
          <div key={i}>{documentToReactComponents(doc)}</div>
        ))}
      </>
    );
  }

  if (documents) {
    return <>{documentToReactComponents(documents)}</>;
  }
  return null;
};

export default RichTextRenderer;
