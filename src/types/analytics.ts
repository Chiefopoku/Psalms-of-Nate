export type AnalyticsEventType = "download" | "pdf_view" | "streaming_click";

export type AnalyticsEvent = {
  id: string;
  psalmId: string;
  type: AnalyticsEventType;
  createdAt: string;
  metadata?: Record<string, string>;
};
