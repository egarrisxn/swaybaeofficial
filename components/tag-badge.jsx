import Link from "next/link";
import { Badge } from "./ui/badge";

export default function TagBadge({ tag, clickable = true }) {
  const { title, color } = tag;

  const tagContent = (
    <Badge
      variant="tag"
      style={{
        backgroundColor: color,
      }}
    >
      {title}
    </Badge>
  );

  return clickable ? (
    <Link href={`/blog/tag/${tag.tagSlug}`}>{tagContent}</Link>
  ) : (
    tagContent
  );
}
