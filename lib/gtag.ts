import { GA_ID } from "@/config";

export const GA_TRACKING_ID = GA_ID;

// PV 測定
export const pageview = (url: string): void => {
  // GA_TRACKING_ID が設定されていない場合は、処理終了
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
