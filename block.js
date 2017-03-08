chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("IN");
    if(details.url.includes("ajax/mercury/mark_seen") ||
      details.url.includes("ajax/notifications/mark_read") ||
      details.url.includes("ajax/gigaboxx/endpoint/UpdateLastSeenTime") ||
      details.url.includes("reconnect") ||
      details.url.includes("friendjewel/friendconfirmednotifications")
      )
    {
      console.log("So in");
      return {cancel: true}
    }
  },
  {urls: ["*://*.facebook.com/*", "*://*.messenger.com/*"]},
  ["blocking"]
);