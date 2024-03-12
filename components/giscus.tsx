import Giscus from '@giscus/react';
import { repo,category,repoId,categoryId,mapping } from "@/config";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      term="コメント..."
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      lang="ja"
      strict="1"
      theme="light"
      loading="lazy"
    />
  );
}