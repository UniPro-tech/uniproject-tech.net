import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

const OGP = ({ url = null }) => {
  if (!(url == null)) {
    return (
      <Head>
        <meta property="og:image" content={url} />
      </Head>
    );
  } else {
    return (
      <Head>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
    );
  }
};

export default OGP;
