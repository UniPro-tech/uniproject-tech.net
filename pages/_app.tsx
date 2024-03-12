import { GA_TRACKING_ID, pageview } from "@/lib/gtag";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "@/styles/index.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  // useEffectでurlの動きを検知
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、return
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
