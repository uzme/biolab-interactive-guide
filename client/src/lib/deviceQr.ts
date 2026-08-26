import QRCode from "qrcode";

export const DEVICE_QUERY_KEY = "device";
export const DEFAULT_BIOLAB_ORIGIN = "https://biolabguide-fbcitqyf.manus.space";

function getOrigin() {
  if (typeof window !== "undefined" && window.location.origin) return window.location.origin;
  return DEFAULT_BIOLAB_ORIGIN;
}

export function getDeviceDetailPath(deviceId: string) {
  const params = new URLSearchParams({ direct: "1", [DEVICE_QUERY_KEY]: deviceId });
  return `/?${params.toString()}`;
}

export function getDeviceDetailUrl(deviceId: string, origin = getOrigin()) {
  return `${origin.replace(/\/$/, "")}${getDeviceDetailPath(deviceId)}`;
}

export async function getDeviceQrDataUrl(deviceId: string, origin?: string) {
  return QRCode.toDataURL(getDeviceDetailUrl(deviceId, origin), {
    width: 768,
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#073d3b", light: "#f8fffc" },
  });
}
