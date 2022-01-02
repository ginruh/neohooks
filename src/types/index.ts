/* Webhook Request Core Information */
export interface WebhookRequestCoreInfo {
  id: string;
  createdAt: string;
  method: string;
}

/* Webhook */
export interface Webhook {
  id: string;
  requests?: WebhookRequestCoreInfo[];
}

/* Webhook Request List */
export interface WebhookRequestList extends WebhookRequestCoreInfo {
  isActive: boolean;
}

/* Webhook Request */
export interface WebhookRequest {
  id: string;
  url: string;
  method: string;
  host: string;
  size: string;
  createdAt: string;
  headers: Record<string, string>;
  queryStrings: any;
  body: string;
}
