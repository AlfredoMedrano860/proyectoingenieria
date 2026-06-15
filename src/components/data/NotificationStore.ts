export type NotificationType = "error" | "warning" | "success" | "info";

export interface AppNotification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
}

export const notificationColors: Record<NotificationType, string> = {
  error:   "#dc2626",
  warning: "#d97706",
  success: "var(--color-primary)",
  info:    "#2563eb",
};

let _items: AppNotification[] = [];
let _nextId = 1;
let _listener: ((items: AppNotification[]) => void) | null = null;

function _emit() { _listener?.([..._items]); }

function _add(type: NotificationType, title: string, message: string) {
  _items = [..._items, { id: _nextId++, type, title, message }];
  _emit();
}

export const notify = {
  success: (title: string, message: string) => _add("success", title, message),
  error:   (title: string, message: string) => _add("error",   title, message),
  warning: (title: string, message: string) => _add("warning", title, message),
  info:    (title: string, message: string) => _add("info",    title, message),
};

export function dismissNotification(id: number) {
  _items = _items.filter(n => n.id !== id);
  _emit();
}

export function subscribeNotifications(fn: (items: AppNotification[]) => void): () => void {
  _listener = fn;
  return () => { _listener = null; };
}
