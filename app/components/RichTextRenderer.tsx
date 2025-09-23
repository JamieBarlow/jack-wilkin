import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const RichTextRenderer = ({
  documents,
}: {
  documents: Document | Document[];
}) => {
  if (Array.isArray(documents)) {
    return (
      <>
        {documents.map((doc, i) => (
          <div key={i}>{documentToReactComponents(doc)}</div>
        ))}
      </>
    );
  }

  // single Document
  return <>{documentToReactComponents(documents)}</>;
};

export default RichTextRenderer;
