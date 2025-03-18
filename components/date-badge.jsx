import { Badge } from "./ui/badge";

export default function DateBadge({ publishedAt }) {
  return (
    <Badge variant="time">
      {new Date(publishedAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </Badge>
  );
}
